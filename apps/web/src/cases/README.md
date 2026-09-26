# Bespoke case pages (`src/cases`)

Cinematic case-study pages ported 1:1 from the Atlas BIP Astro site
(`/Users/kerimovie/MyJobs/Atlas BIP site`, **read only — never modify it**) and rebranded to Aibaycan.
They render at `/[locale]/projects/<aibaycan-slug>` inside Aibaycan's normal layout (header, footer).
Any slug that is **not** registered in `registry.ts` keeps the DB-driven page (BlockRenderer).

| Aibaycan slug (URL, folder) | Atlas slug | Status |
| --- | --- | --- |
| `etehsil-az` | `etehsil` | ported (reference implementation) |
| `sahil-transport` | `sahil-transport` | to port |
| `cavably` | `cavably` | to port |
| `foodost` | `foodost` | to port |
| `molecion-az` | `molecion` | to port |

## Folder layout

```
src/cases/
  README.md            ← this file
  types.ts             ← CaseSlug, CaseBase (copy contract), CaseEntry, RailItem, AccentPreset…
  meta.ts              ← metadata of ALL 5 cases × 3 locales (kind, services, industry, url, accentPreset,
                         nameLang, name/category/tagline). Imports no components. Already complete.
  registry.ts          ← slug → { Component, copy }. Only etehsil-az is registered; TODO lines mark the other 4.
  _tools/astro-style.mjs  ← converts an Astro <style> block to our CSS (see "Styles")
  _shared/             ← DO NOT EDIT from a case agent (everything the 5 cases import is already here)
    CaseLayout.tsx + .css   CaseHero.tsx + .css   CaseFacts   CaseRole   CaseStack   CaseNext
    CinematicPage.tsx  CinematicEffects.tsx ('use client')  ChapterRail  ScrollProgress
    Chapter  Surface  AccentTitle  FeatureGrid  DefinitionRows  TagList  MockFrame  IntegrationOrbit
    FaqList  FinalCta  SampleDataNote  CineLink  cx.ts  labels.ts  fonts.ts  schema.ts
    styles/cinematic.css    ← Atlas cinematic.css + the Atlas global.css bits the kit needs, scoped to .cine
    scripts/motion.ts       ← reducedMotion, clamp, watchVisibility, rafThrottle, visibleInterval,
                              initInView, initOffscreenPause, createCleanup, listen (all return Cleanup)
    scripts/rail.ts         ← initChapterRail
  etehsil-az/          ← one folder per case, flat
    Case.tsx           ← default export, `({ locale }) => <CaseLayout …>chapters</CaseLayout>`
    HeroVisual.tsx + HeroVisual.css, Challenge.tsx + Challenge.css, …   (one .tsx + one .css per Astro component)
    etehsil.css        ← port of Atlas src/styles/cases/etehsil.css
    scenes.ts          ← port of Atlas src/scripts/cases/etehsil/scenes.ts (returns Cleanup)
    EtehsilEffects.tsx ← 'use client'; runs the case scripts in useEffect
    i18n/en.ts az.ts ru.ts index.ts
```

Atlas sources for a case `<atlas>`: `src/components/cases/<atlas>/*`, `src/scripts/cases/<atlas>/*`,
`src/styles/cases/<atlas>.css`, `src/assets/cases/<atlas>/*`, `src/i18n/{az,en,ru}/cases/<atlas>.ts` (drop `tr`).
Put everything in `src/cases/<aibaycan-slug>/` (sub-folders are fine for big cases, e.g. `scripts/`, `assets/`).

## Conversion rules

### Markup: `.astro` → React **server** component (`.tsx`)

- Frontmatter code → plain code in the function (or module scope for constant data). `Astro.props` → typed props.
- `class` → `className`; `class:list={[a, b && 'x']}` → `className={cx(a, b && 'x')}` (`_shared/cx.ts`).
- SVG attributes → camelCase (`stroke-width` → `strokeWidth`, `text-anchor` → `textAnchor`,
  `stroke-dasharray` → `strokeDasharray`, `preserveAspectRatio`, `viewBox` stay). Keep `pathLength={100}`.
- Boolean data attributes: `data-et-on` → `data-et-on=""`; conditional ones stay `data-x={cond ? '' : undefined}`.
  Scripts toggle these attributes on the DOM, so render the exact initial state Atlas renders (usually the LAST
  frame of a scene, so the page is complete without JS and under reduced motion).
- Lists need `key`s. `<Fragment>` for Astro's bare `<>` inside maps.
- `noUncheckedIndexedAccess` is on: `arr[i]` is `T | undefined` → use `arr[i] ?? fallback`, `(rows[i] ?? []).map`,
  `s.fields[0]?.value`, or destructuring defaults.
- Slots: `slot="hero-visual"` → `CaseLayout heroVisual={…}`; `slot="head"` of Chapter → `Chapter head={…}`;
  default slot → `children`.
- `<Fragment set:html>` → avoid; if unavoidable use `dangerouslySetInnerHTML` with trusted copy only.
- Whitespace: JSX drops newlines between elements, Astro keeps one space. Where two inline pieces must be separated
  (inline text, not flex/grid children) write `{' '}` or keep them on one line (`{a} {b}`).
- Links: internal app paths go through `CineLink` (`_shared/CineLink.tsx`, next-intl `Link`, adds the locale prefix):
  `<CineLink href="/contact">`. `href(locale, 'contact')` → `'/contact'`; `href(locale, 'work')` → `'/projects'`;
  `href(locale, 'work/<atlas>')` → `'/projects/<aibaycan-slug>'`. Pages Aibaycan does not have
  (`work/logistics-erp`, `industries`, `services/<x>`) → `'/contact'` (or `'/services'` for services).
- Images (`astro:assets`): copy the file into `src/cases/<slug>/assets/`, static-import it and render
  `next/image`'s `<Image src={imported} alt=… sizes=…/>` (width/height come from the import, as with Astro's `Image`).
  Keep `alt`, `loading`, `sizes` equivalents; keep class names for CSS.

### Before → after (Etehsil `Contracts.astro`)

```astro
---
import DefinitionRows from '~/components/cinematic/DefinitionRows.astro';
const { c } = Astro.props; const s = c.screen; const signedAt = s.fields.length + 2;
---
<div class="et-con mt-14 lg:mt-20">
  <div class="et-con__stage" role="img" aria-label={s.label} data-et-scene data-et-phases={signedAt + 2} …>
    …
    <span class="et-con__no" data-et-at="1" data-et-on>№ {s.fields[0].value}</span>
  </div>
  <DefinitionRows items={c.points} />
</div>
<style>
  @layer theme, base, components, utilities;
  @layer components { .et-con__stage { … } … }
</style>
```

```tsx
// etehsil-az/Contracts.tsx (server component)
import { DefinitionRows } from '../_shared/DefinitionRows';
import type { EtehsilCopy } from './i18n';
import './Contracts.css';                       // generated from the <style> block, see "Styles"

export function Contracts({ c }: { c: EtehsilCopy['contracts'] }) {
  const s = c.screen;
  const signedAt = s.fields.length + 2;
  return (
    <div className="et-con mt-14 lg:mt-20">
      <div className="et-con__stage" role="img" aria-label={s.label} data-et-scene="" data-et-phases={signedAt + 2} …>
        …
        <span className="et-con__no" data-et-at="1" data-et-on="">№ {s.fields[0]?.value}</span>
      </div>
      <DefinitionRows items={c.points} />
    </div>
  );
}
```

### Scripts: Astro `<script>` → TS module + one small client component

1. Port each `src/scripts/cases/<atlas>/*.ts` and each component's inline `<script>` body into `.ts` modules in the
   case folder. Keep the logic identical (same selectors, data attributes, timings, reduced-motion checks), import
   helpers from `../_shared/scripts/motion` instead of `~/scripts/cinematic/motion`.
2. **Every init/setup function returns a `Cleanup`** (`() => void`) that disconnects observers, removes listeners
   (`window`, `document`, `matchMedia`), clears timers/rAF and — where it mutated the server-rendered frame
   (text, attributes, inline styles) — restores it. React Strict Mode runs effects twice in dev and client-side
   navigation (CaseNext) unmounts the page, so leaks show up immediately. Helpers already return cleanups:
   `watchVisibility`, `visibleInterval` (returned void on Atlas!), `rafThrottle(...).cancel`, `initInView`,
   `initOffscreenPause`, `initChapterRail`. Use `createCleanup()` to collect several.
3. One `'use client'` component per case (`<Case>Effects.tsx`) runs them all, rendered once inside `Case.tsx`:

```tsx
'use client';
import { useEffect } from 'react';
import { createCleanup } from '../_shared/scripts/motion';
import { initHero } from './scripts/hero';
import { initFlow } from './scripts/flow';

export function CavablyEffects() {
  useEffect(() => {
    const cleanup = createCleanup();
    cleanup.add(initHero());
    cleanup.add(initFlow());
    return cleanup.run;
  }, []);
  return null;
}
```

   The kit scripts (`initInView`, `initOffscreenPause`, `initChapterRail`) already run in `CinematicPage`; do not call
   them again. Scripts query `document` (one `.cine` page at a time), exactly like Atlas.
4. Never turn the mockups themselves into client components: they stay server-rendered HTML that the scripts drive.

### Styles: Astro scoped `<style>` → co-located global CSS

Generate each component's CSS with the tool, then review it:

```
node apps/web/src/cases/_tools/astro-style.mjs "<atlas>/src/components/cases/cavably/FlowBuilder.astro" \
  --prefix cav- --prefix cine > apps/web/src/cases/cavably/FlowBuilder.css
```

- It unwraps `:global(...)`, keeps the `@layer theme, base, components, utilities;` statement and the
  `@layer components { … }` wrapper, and appends **`:not(._)` to every scoped compound selector**. That reproduces
  the specificity Astro's attribute scoping gave (`[data-astro-cid-…]`, +0,1,0 per compound) so component rules beat
  kit/case-shared rules (`.et-screen`, `.cine-text`, …) exactly as on Atlas. Keep the `:not(._)`s. Selectors that were
  inside `:global()` intentionally get none.
- It prints `LEAK? …` for selectors without a class starting with a `--prefix`: harmless while Astro scoped them,
  global now. Anchor each under a zero-specificity ancestor, e.g. Etehsil:
  `[data-col='0']:not(._)` → `:where(.et-rooms__grid) > [data-col='0']:not(._)`,
  `[data-t='0']:not(._)` → `:where(.et-iso) [data-t='0']:not(._)`. Mention the fix in the file header.
- Also check across the case: a class name styled in two components (different rules were isolated on Atlas) and
  `@keyframes` names defined twice with different bodies (`grep -h "@keyframes" *.css | sort | uniq -d`).
- The per-case stylesheet `src/styles/cases/<atlas>.css` is NOT scoped on Atlas: copy it as is (no `:not(._)`)
  to `<slug>/<atlas>.css`, rename its header comment.
- Import order = Atlas order (it decides equal-specificity ties): `Case.tsx` imports `CaseLayout` first (it loads the
  kit CSS), then `./<atlas>.css`, then the chapter components (each imports its own `.css`).
- Class prefixes in use: kit `cine-*`, layout `case-*` (hero root renamed **`cine-case-hero`** because Aibaycan's
  globals.css owns `.case-hero`; `.case-hero__*` elements are unchanged, so `molecion.css` rules on
  `.case-hero__title` etc. still work). Case prefixes: `et-`, `st-`, `cav-`, `fd-`, `mo-` — none collide with
  Aibaycan. Don't reference Aibaycan classes.
- Tailwind utilities in markup (`mt-14 lg:mt-20`, `max-w-3xl`, `sr-only`, …) stay as they are; Tailwind v4 auto-scans
  `src/cases/**`. `.container-page` is provided inside `.cine` by `styles/cinematic.css`.
- Tokens: all `--cine-*` variables, accent presets (`data-accent`), `--header-h` (5.5rem = Aibaycan's floating header),
  the Atlas base (`.cine` h1–h4 → Geologica + `#0c1626`, system-UI body font, `text-wrap`), fonts
  `--font-alumni-sans`, `--font-jetbrains-mono`, `--font-geologica` (next/font, only on the `.cine` root) and keyframes
  `cine-blink`, `cine-dash`, `cine-pulse` are available. Atlas `global.css` theme colours (`ink-*`, `brand-*`,
  `azure-*`) are NOT registered as Tailwind utilities — none of the 5 cases use them in markup; if you find one,
  use the hex in CSS instead.
- Aibaycan's globals.css is mostly **unlayered** (it beats every layered rule). Already neutralised for the case
  pages: focus outlines (`revert-layer`), `section[id]` scroll margin. If a case shows an Aibaycan style bleeding in,
  fix it in the case's CSS with an unlayered, `.cine`-prefixed rule and say so in a comment.

## i18n: copy files

`<slug>/i18n/en.ts` is the type source; az/ru are typed with it (as on Atlas):

```ts
// en.ts
import type { CaseBase } from '../../types';
const en = { seo: {…}, h1: '…', hero: {…}, …, challenge: { id: 'challenge' as const, … } } satisfies CaseBase;
export type EtehsilCopy = typeof en;
export default en;

// az.ts / ru.ts
import type { EtehsilCopy } from './en';
const az: EtehsilCopy = { … };
export default az;

// index.ts
export const etehsilCopy: Record<Locale, EtehsilCopy> = { az, en, ru };
```

Copy the Atlas objects verbatim (drop `tr`). Types that Atlas components imported from a copy file
(`import type { CavChannel } from '~/i18n/en/cases/cavably'`) now come from `./i18n/en`. Component props use
`EtehsilCopy['schedule']` instead of `Cases['etehsil']['schedule']`.

### Rebrand rule

Every Atlas company mention in ported copy (all three locales) becomes **Aibaycan**, grammatically:

| Atlas | EN | AZ | RU |
| --- | --- | --- | --- |
| role title | `What Aibaycan did` | `Aibaycan nə etdi` | `Что сделал Aibaycan` |
| possessive / other cases | `Aibaycan's` | `Aibaycanın`, `Aibaycana`, `Aibaycandan` (no apostrophe) | Aibaycan is not declined: `в Aibaycan`, `команда Aibaycan` |
| “Can Atlas BIP build…?” | `Can Aibaycan build…?` | `Aibaycan … qura bilərmi?` | `Может ли Aibaycan создать…?` |
| `ATLAS BIP Logistics ERP` (Sahil) | `Aibaycan Logistics ERP` | same | same |

Grep before finishing: `grep -rni "atlas" src/cases/<slug>` must only hit code comments. No Atlas URLs, domains,
e-mails, phone numbers or OG images. Contact CTAs go to `/contact`. There is no WhatsApp on Aibaycan: the final CTA's
secondary button is `mailto:hello@aibaycan.az` (already in CaseLayout); drop any other WhatsApp/phone buttons of the
company (WhatsApp as a *product feature* in mockups stays). Sahil's “ATLAS BIP Logistics ERP” product link
(`href(locale, 'work/logistics-erp')`) → `/contact`.

## Registering a case

1. `src/cases/<slug>/Case.tsx` — `export default function XCase({ locale }: { locale: Locale })` returning
   `<CaseLayout locale slug="<slug>" copy={t} rail={rail} heroVisual={<Hero t={t} />} [heroLayout="stacked"]
   [sampleDataNote={false}]>{chapters}<XEffects /></CaseLayout>`, where
   `rail = chapters.map((ch) => ({ id: ch.id, label: t.railLabels[ch.id] }))` (same order as Atlas).
2. `registry.ts` — replace the TODO line with `'<slug>': { Component: XCase, copy: xCopy },` and add the two imports.
3. Nothing else: `meta.ts` already has the slug's metadata (all locales), the route picks it up, metadata comes
   from `copy[locale].seo`, JSON-LD (BreadcrumbList, SoftwareApplication/CreativeWork, FAQPage) from CaseLayout.

Ids reserved by CaseLayout (do not use for chapters): `hero`, `role`, `stack`, `faq`, `next`, `final`.

## `_shared` components (props)

| Component | Props |
| --- | --- |
| `CaseLayout` | `locale, slug, copy: CaseBase, rail: RailItem[], heroLayout?: 'split'｜'stacked', heroVisual?: ReactNode, sampleDataNote?: boolean, children` |
| `CaseHero` / `CaseFacts` / `CaseRole` / `CaseStack` / `CaseNext` | used by CaseLayout; `CaseRole({ role, id?, tone? })`, `CaseStack({ stack, id?, tone? })` |
| `Chapter` | `id, tone?: 'asphalt'｜'navy'｜'paper', km?, eyebrow?, title, accent?, accentLang?, lead?, head?: ReactNode, bleed?, className?, children` |
| `Surface` | `id?, tone?, as?: 'section'｜'div'｜'header'｜'footer'｜'aside', labelledby?, className?, children` |
| `AccentTitle` | `title, accent?, accentLang?, as?: 'h1'｜'h2'｜'h3'｜'p'｜'span', id?, className? (default 'cine-title')` |
| `FeatureGrid` | `items: {title,text}[], columns?: 2｜3｜4, headingLevel?: 3｜4, className?` |
| `DefinitionRows` | `items: {label,text}[], className?` |
| `TagList` | `tags: string[], label?, className?` |
| `MockFrame` | `variant?: 'browser'｜'phone', title?, label?, decorative?, className?, children` |
| `IntegrationOrbit` | `center: {brand, product?}, nodes: {name}[], highlightEvery?, className?` |
| `FaqList` | `items: {q,a}[], name?, className?` |
| `FinalCta` | `id, tone?, km?, eyebrow?, title, accent?, lead?, primary: CineLinkTarget, sign?: 'road'｜'accent', secondary?, back?, className?, children` |
| `SampleDataNote` | `text, className?` |
| `CinematicPage` | `rail?, railLabel?, progressLabel?, accent?, className?, children` (used by CaseLayout) |
| `CineLink` | anchor props + `href` (`/app/path` → next-intl Link; `#x`, `mailto:`, `https://` → `<a>`), `external?` |
| `labels.ts` | `caseLabels[locale]` (Atlas `work.case` labels, rebranded), `CONTACT_EMAIL` |

Atlas `class` prop → `className` everywhere.

## Verification checklist (per case)

1. `pnpm --filter @aibaycan/web typecheck` passes (strict, no `any`, no `@ts-ignore`).
2. `curl -s -o /dev/null -w "%{http_code}\n" localhost:7301/{az,en,ru}/projects/<slug>` → 200 each; the `<title>` is the
   case's `seo.title`; `grep -i atlas` on the HTML finds nothing.
3. Browser (Playwright is in the pnpm store:
   `/Users/kerimovie/MyJobs/Aibaycan/node_modules/.pnpm/playwright@1.61.1/node_modules/playwright/index.mjs`):
   no console errors/warnings (hydration!), with `reducedMotion: 'reduce'` and `'no-preference'`.
4. Visual parity: serve Atlas' built site read-only (`python3 -m http.server 7399 -d "<atlas>/dist"`, EN at
   `/en/work/<atlas>/`) and screenshot each `.cine > section[id]` of both pages at 1440×900 with reduced motion,
   hiding fixed overlays (`#siteHeader, body>header, .cine-rail, .cine-progress, nextjs-portal, #cookie-consent`).
   Section heights must match (hero is +88px: it runs under Aibaycan's header); pixel-diff should only show copy
   changes (rebrand, e-mail button), the skip link and the `→` glyph (see known differences).
5. With motion on: scenes go live when scrolled to (`data-*-live`/phase attributes change), rail `aria-current`
   follows, progress bar moves, ArrowRight jumps chapters, `[data-inview=pending]` items turn `in`.
6. Check 390px width, and az/ru (Cyrillic, ə/ğ/İ) renders in the display font.
7. `/az/projects` and a not-yet-ported slug still render 200 (DB flow). Don't touch `_shared` — if something is
   truly missing there, report it instead.

## Known differences from Atlas (all cases)

- Hero sits under Aibaycan's floating white header (the `.cine.case` root is pulled up 76px, hero top padding +88px).
- Breadcrumb: Aibaycan's `nav.home` / `nav.projects` labels. Facts band: industry is plain text (no industries page),
  services link to `/services`.
- Final CTA secondary button: e-mail instead of WhatsApp.
- Google's Geologica has no `→` glyph, so arrows set in Geologica use the system face (Atlas self-hosts fontsource).
- Fonts preload all three subsets (next/font), not per-locale subsets as on Atlas.
- Sticky scenes pin 16px lower (`--header-h` 88px vs Atlas 72px).
