import type { Locale } from '@/i18n/routing';

export type { Locale };

/** Aibaycan slugs (URL `/[locale]/projects/<slug>`) of the bespoke case-study pages. Order = CaseNext order. */
export const caseSlugs = ['sahil-transport', 'etehsil-az', 'cavably', 'foodost', 'molecion-az'] as const;
export type CaseSlug = (typeof caseSlugs)[number];

export function isCaseSlug(value: string): value is CaseSlug {
  return (caseSlugs as readonly string[]).includes(value);
}

/** `platform` = our own live product · `product` = our own product, not open yet · `client` = built for a client. */
export type WorkKind = 'client' | 'platform' | 'product';

/** Cinematic accent presets (`data-accent` in `_shared/styles/cinematic.css`). */
export type AccentPreset = 'orange' | 'teal' | 'azure' | 'blue' | 'violet' | 'rose' | 'gold' | 'lime';

/** Service ids the five cases name in their facts band (labels in `_shared/labels.ts`). */
export type ServiceId = 'logistics-software' | 'erp' | 'ai-automation' | 'data-analytics' | 'saas-development';

/** Industry ids the five cases name in their facts band (labels in `_shared/labels.ts`). */
export type IndustryId = 'logistics' | 'education' | 'services' | 'hospitality' | 'retail';

/**
 * Contract of a case-study dictionary (`cases/<slug>/i18n/en.ts`). Port of Atlas `src/i18n/cases-contract.ts`.
 * The EN file `satisfies CaseBase` and is the type source for its slug; AZ/RU are typed with that EN type.
 * These keys are what the shared case components render (`cases/_shared/*`). Builders add any number of
 * project-specific chapter keys on top.
 *
 * Project name, category, type, industry and services come from the registry (`cases/meta.ts`), not from here.
 */
export interface CaseBase {
  /** `title` ≤ 60 characters, `description` 130–160 characters. */
  seo: { title: string; description: string };
  /** Search-term heading rendered in the page's only `<h1>` right after the project wordmark. */
  h1: string;
  hero: {
    /** Category line above the wordmark (mono, uppercase). */
    eyebrow: string;
    /** Display statement under the H1. */
    title: string;
    /** Exact substring of `hero.title` shown in the accent colour. */
    accent: string;
    lead: string;
    /** Primary button → contact page, e.g. “Discuss a similar project”. */
    primaryCta: string;
    /** Overrides the secondary button label (default: “Visit the live product” with a public URL, else “Read the story”). */
    secondaryCta?: string;
  };
  /** Facts band values; type, industry and services are added from the registry. */
  facts: { platforms: string; languages: string };
  /** “What Aibaycan did”. */
  role: { eyebrow: string; title: string; items: { title: string; text: string }[] };
  /** Short, framework-level stack only. */
  stack: { eyebrow: string; title: string; groups: { label: string; items: string[] }[] };
  /** 3–5 questions; also emitted as FAQPage JSON-LD. */
  faq: { title: string; items: { q: string; a: string }[] };
  /** Rail labels of the builder's own chapters, keyed by chapter id (hero and page-ending labels are shared). */
  railLabels: Record<string, string>;
  /** The page's one sample-data footnote. */
  sampleDataNote: string;
  /** Accessible name for `role="img"` mockups. */
  mockupAriaLabel: string;
  /** Project-specific chapters and mockup data (any shape); `satisfies CaseBase` keeps their exact types. */
  [chapter: string]: unknown;
}

/** Registry entry of one case (port of Atlas `config/work.ts` + the `items` of `i18n/<locale>/work.ts`). */
export interface CaseEntry {
  kind: WorkKind;
  services: ServiceId[];
  industry: IndustryId;
  /** Public product website, if any. */
  url?: string;
  accentPreset: AccentPreset;
  /** `lang` of the project name where az uppercasing would misspell it (MOLECİON). */
  nameLang?: string;
  /** A built product whose public launch has not happened yet. */
  launching?: boolean;
  /** Localised card copy. */
  items: Record<Locale, { name: string; category: string; tagline: string }>;
}

/** A chapter of the page rail. */
export interface RailItem {
  id: string;
  label: string;
}
