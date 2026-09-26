import { Alumni_Sans, Geologica, JetBrains_Mono } from 'next/font/google';

// Fonts of the cinematic case pages, exposed under the same CSS variables as on Atlas (astro.config.mjs), so ported
// CSS keeps using `var(--font-alumni-sans)`, `var(--font-jetbrains-mono)` and `var(--font-geologica)`.
// They are applied on the `.cine` root only (CinematicPage), so no other Aibaycan page downloads them.

/** Display face (condensed, uppercase titles). One weight, as on Atlas. */
export const alumniSans = Alumni_Sans({
  weight: '800',
  subsets: ['latin', 'latin-ext', 'cyrillic'],
  display: 'swap',
  variable: '--font-alumni-sans',
  // Metric-matched fallback face declared in styles/cinematic.css (see the comment there).
  fallback: ['Alumni Metric Fallback', 'sans-serif'],
  adjustFontFallback: false,
});

/** Mono labels. */
export const jetbrainsMono = JetBrains_Mono({
  weight: '500',
  subsets: ['latin', 'latin-ext', 'cyrillic'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
  fallback: ['ui-monospace', 'monospace'],
});

/** UI face of Atlas (headings, mockup screens: `var(--font-geologica)`). Not preloaded: it is rarely above the fold. */
// Variable font (no `weight`): the kit uses 500–800 including 650, like Atlas' `weights: ['500 800']`.
// Known difference: Google's Geologica files carry no U+2192 "→", so arrows set in Geologica fall back to the system
// face (Atlas self-hosts the full fontsource files). Swap to next/font/local with those files if it ever matters.
export const geologica = Geologica({
  subsets: ['latin', 'latin-ext', 'cyrillic'],
  display: 'swap',
  variable: '--font-geologica',
  fallback: ['ui-sans-serif', 'system-ui', 'sans-serif'],
  preload: false,
});

export const caseFontVariables = `${alumniSans.variable} ${jetbrainsMono.variable} ${geologica.variable}`;
