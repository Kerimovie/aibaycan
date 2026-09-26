import type { WorkKind } from '../types';

// JSON-LD of a case page (port of the case bits of Atlas `src/lib/schema.ts`), pointed at aibaycan.az.

export const SITE_URL = process.env.SITE_URL ?? 'https://aibaycan.az';
const ORG_ID = `${SITE_URL}/#organization`;

type Node = Record<string, unknown>;

/** Absolute URL of a locale page; `path` is locale-agnostic, e.g. `projects/etehsil-az` or `''` for home. */
export function absoluteHref(locale: string, path = ''): string {
  return `${SITE_URL}/${locale}${path ? `/${path}` : ''}`;
}

export function organizationRef(): Node {
  return { '@type': 'Organization', '@id': ORG_ID, name: 'Aibaycan', url: SITE_URL };
}

export function breadcrumbNode(locale: string, path: string, items: { name: string; path: string }[]): Node {
  return {
    '@type': 'BreadcrumbList',
    '@id': `${absoluteHref(locale, path)}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteHref(locale, item.path),
    })),
  };
}

/**
 * Main entity of a case page. Our own platforms/products become a SoftwareApplication (no offers or ratings);
 * client projects become a CreativeWork created by Aibaycan.
 */
export function caseStudyNode(opts: {
  locale: string;
  path: string;
  kind: WorkKind;
  name: string;
  headline: string;
  description: string;
  about: string;
  productUrl?: string;
  operatingSystem?: string;
}): Node {
  const url = absoluteHref(opts.locale, opts.path);
  const shared = { description: opts.description, inLanguage: opts.locale };
  if (opts.kind !== 'client') {
    return {
      '@type': 'SoftwareApplication',
      '@id': `${url}#software`,
      name: opts.name,
      applicationCategory: 'BusinessApplication',
      applicationSubCategory: opts.about,
      operatingSystem: opts.operatingSystem ?? 'Web',
      ...(opts.productUrl ? { url: opts.productUrl } : {}),
      ...shared,
      publisher: { '@id': ORG_ID },
    };
  }
  return {
    '@type': 'CreativeWork',
    '@id': `${url}#project`,
    name: opts.name,
    headline: opts.headline,
    about: opts.about,
    url,
    ...shared,
    creator: { '@id': ORG_ID },
  };
}

export function faqNode(locale: string, path: string, faq: { q: string; a: string }[]): Node {
  return {
    '@type': 'FAQPage',
    '@id': `${absoluteHref(locale, path)}#faq`,
    inLanguage: locale,
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}

/** Serialised `@graph`, safe to inline in a `<script>` (escapes `<`). */
export function graph(nodes: Node[]): string {
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': nodes }).replace(/</g, '\\u003c');
}
