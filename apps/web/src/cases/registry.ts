import type { ComponentType } from 'react';
import CavablyCase from './cavably/Case';
import { cavablyCopy } from './cavably/i18n';
import EtehsilCase from './etehsil-az/Case';
import { etehsilCopy } from './etehsil-az/i18n';
import FoodostCase from './foodost/Case';
import { foodostCopy } from './foodost/i18n';
import MolecionCase from './molecion-az/Case';
import { molecionCopy } from './molecion-az/i18n';
import { caseMeta } from './meta';
import SahilTransportCase from './sahil-transport/Case';
import { sahilTransportCopy } from './sahil-transport/i18n';
import { isCaseSlug, type CaseBase, type CaseEntry, type CaseSlug, type Locale } from './types';

/** A bespoke case page: its root component and its copy per locale (for metadata). */
export interface BespokeCase {
  Component: ComponentType<{ locale: Locale }>;
  copy: Record<Locale, CaseBase>;
}

/**
 * Slug → bespoke page. A slug listed here is rendered by `app/[locale]/projects/[slug]/page.tsx` instead of the
 * DB-driven BlockRenderer flow. Metadata of all five slugs lives in `./meta.ts` (CaseNext cycles through all five).
 */
const bespokeCases: Partial<Record<CaseSlug, BespokeCase>> = {
  'etehsil-az': { Component: EtehsilCase, copy: etehsilCopy },
  'sahil-transport': { Component: SahilTransportCase, copy: sahilTransportCopy },
  cavably: { Component: CavablyCase, copy: cavablyCopy },
  foodost: { Component: FoodostCase, copy: foodostCopy },
  'molecion-az': { Component: MolecionCase, copy: molecionCopy },
};

/** The bespoke case for a URL slug, or `null` when the slug should use the DB-driven page. */
export function getBespokeCase(slug: string): (BespokeCase & { slug: CaseSlug; entry: CaseEntry }) | null {
  if (!isCaseSlug(slug)) return null;
  const bespoke = bespokeCases[slug];
  return bespoke ? { ...bespoke, slug, entry: caseMeta[slug] } : null;
}
