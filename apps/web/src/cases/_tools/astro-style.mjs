#!/usr/bin/env node
// Converts the scoped <style> block of an Atlas .astro component into a plain, global CSS file for the Next port.
//
//   node apps/web/src/cases/_tools/astro-style.mjs <Component.astro> [--prefix et-] [--prefix cine] > Component.css
//
// What it does (see cases/README.md → "Styles"):
//  1. Takes the content of the first <style> block and drops Astro's duplicate `@layer theme, base, components,
//     utilities;` line (it re-adds one at the top of the output).
//  2. Emulates Astro's scoped-style SPECIFICITY. Atlas builds with `scopedStyleStrategy: 'attribute'`, which appends
//     `[data-astro-cid-xxxx]` to EVERY compound selector, i.e. +0,1,0 per compound. Without that boost a component rule
//     would lose (or tie) against kit rules such as `.et-screen` / `.cine-text` and against its own sibling rules in a
//     different order than on Atlas. The port appends `:not(._)` instead (same +0,1,0, matches every element because
//     no element has the class `_`). Pseudo-elements stay last. Selectors inside `:global(...)` are emitted as is,
//     without the boost, exactly like Astro does. `@keyframes` steps are untouched.
//  3. Audits: prints to stderr every selector that has no class starting with one of the `--prefix` values, i.e. a
//     selector that was harmless while Astro scoped it but would LEAK once global (e.g. `[data-col='0']`). Fix those by
//     hand with a zero-specificity ancestor: `:where(.et-rooms__grid) > [data-col='0']:not(._)`.
import fs from 'node:fs';

const args = process.argv.slice(2);
const file = args.find((a) => !a.startsWith('--') && args[args.indexOf(a) - 1] !== '--prefix');
const prefixes = args.flatMap((a, i) => (args[i - 1] === '--prefix' ? [a] : []));
if (!file) {
  console.error('usage: astro-style.mjs <Component.astro> [--prefix et-] [--prefix cine]');
  process.exit(1);
}

const src = fs.readFileSync(file, 'utf8');
const match = src.match(/<style>([\s\S]*?)<\/style>/);
if (!match) {
  console.error(`no <style> block in ${file}`);
  process.exit(1);
}
let css = match[1].replace(/^\s*@layer theme, base, components, utilities;\s*/m, '');

const BOOST = ':not(._)';
const LEGACY_PSEUDO_ELEMENTS = /^:(before|after|first-line|first-letter)\b/;

/** Splits `s` on `sep` at top level (outside (), [] and quotes). */
function splitTop(s, isSep) {
  const parts = [];
  let depth = 0;
  let quote = '';
  let start = 0;
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (quote) {
      if (ch === '\\') i++;
      else if (ch === quote) quote = '';
      continue;
    }
    if (ch === '"' || ch === "'") quote = ch;
    else if (ch === '(' || ch === '[') depth++;
    else if (ch === ')' || ch === ']') depth--;
    else if (depth === 0) {
      const len = isSep(s, i);
      if (len) {
        parts.push(s.slice(start, i));
        parts.push({ sep: s.slice(i, i + len) });
        i += len - 1;
        start = i + 1;
      }
    }
  }
  parts.push(s.slice(start));
  return parts;
}

/** Index where a pseudo-element starts in a compound (outside parens), or -1. */
function pseudoElementAt(compound) {
  let depth = 0;
  for (let i = 0; i < compound.length; i++) {
    const ch = compound[i];
    if (ch === '(' || ch === '[') depth++;
    else if (ch === ')' || ch === ']') depth--;
    else if (depth === 0 && ch === ':') {
      if (compound[i + 1] === ':') return i;
      if (LEGACY_PSEUDO_ELEMENTS.test(compound.slice(i))) return i;
    }
  }
  return -1;
}

/** Unwraps every `:global(x)` in a compound; reports whether anything non-global remains. */
function unwrapGlobal(compound) {
  let out = '';
  let rest = '';
  for (let i = 0; i < compound.length; ) {
    if (compound.startsWith(':global(', i)) {
      let depth = 1;
      let j = i + 8;
      while (depth) {
        if (compound[j] === '(') depth++;
        else if (compound[j] === ')') depth--;
        j++;
      }
      out += compound.slice(i + 8, j - 1);
      i = j;
    } else {
      out += compound[i];
      rest += compound[i];
      i++;
    }
  }
  return { out, scoped: rest.trim() !== '' };
}

function scopeCompound(compound) {
  if (!compound.trim()) return compound;
  const { out, scoped } = unwrapGlobal(compound);
  if (!scoped) return out;
  const at = pseudoElementAt(out);
  return at >= 0 ? out.slice(0, at) + BOOST + out.slice(at) : out + BOOST;
}

const combinator = (s, i) => {
  const m = /^\s*[>+~]\s*|^\s+/.exec(s.slice(i));
  return m ? m[0].length : 0;
};

function scopeSelector(selector) {
  const lead = selector.match(/^\s*/)[0];
  const trail = selector.match(/\s*$/)[0];
  const body = selector.trim();
  // A selector that is one :global(...) is emitted untouched (its inner combinators included).
  if (/^:global\(/.test(body) && unwrapGlobal(body).scoped === false) return lead + unwrapGlobal(body).out + trail;
  const parts = splitTop(body, combinator);
  return lead + parts.map((p) => (typeof p === 'string' ? scopeCompound(p) : p.sep)).join('') + trail;
}

// Walk the stylesheet: transform rule preludes, skip @keyframes bodies and comments/strings.
let out = '';
const stack = [];
let prelude = '';
const leaks = [];
const ok = prefixes.length ? new RegExp(`\\.(${prefixes.map((p) => p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`) : null;
for (let i = 0; i < css.length; i++) {
  const ch = css[i];
  if (ch === '/' && css[i + 1] === '*') {
    const end = css.indexOf('*/', i + 2);
    const comment = css.slice(i, end + 2);
    if (prelude.trim()) prelude += comment;
    else out += prelude + comment, (prelude = '');
    i = end + 1;
    continue;
  }
  if (ch === "'" || ch === '"') {
    let j = i + 1;
    while (css[j] !== ch) j += css[j] === '\\' ? 2 : 1;
    prelude += css.slice(i, j + 1);
    i = j;
    continue;
  }
  if (ch === '{') {
    const text = prelude;
    const inKeyframes = stack.includes('keyframes');
    const trimmed = text.trim();
    if (trimmed.startsWith('@')) {
      stack.push(/^@(-webkit-)?keyframes/.test(trimmed) ? 'keyframes' : 'at');
      out += text + '{';
    } else if (inKeyframes) {
      stack.push('step');
      out += text + '{';
    } else {
      stack.push('rule');
      const selectors = splitTop(text, (s, k) => (s[k] === ',' ? 1 : 0));
      if (ok) {
        for (const sel of selectors) if (typeof sel === 'string' && !ok.test(sel)) leaks.push(sel.trim());
      }
      out += selectors.map((p) => (typeof p === 'string' ? scopeSelector(p) : p.sep)).join('') + '{';
    }
    prelude = '';
    continue;
  }
  if (ch === '}') {
    stack.pop();
    out += prelude + '}';
    prelude = '';
    continue;
  }
  if (ch === ';') {
    out += prelude + ';';
    prelude = '';
    continue;
  }
  prelude += ch;
}
out += prelude;

// Dedent Astro's two-space style indentation.
out = out
  .split('\n')
  .map((l) => (l.startsWith('  ') ? l.slice(2) : l))
  .join('\n')
  .trim();

const name = file.split('/').pop();
process.stdout.write(
  `/*\n * Port of the scoped <style> of Atlas ${name} (generated by cases/_tools/astro-style.mjs, then reviewed).\n` +
    ' * `:not(._)` reproduces Astro\'s scoped-style specificity (+0,1,0 per compound); keep it. See cases/README.md.\n */\n' +
    '@layer theme, base, components, utilities;\n\n' +
    out +
    '\n',
);
for (const leak of leaks) console.error(`LEAK? ${name}: ${leak}`);
