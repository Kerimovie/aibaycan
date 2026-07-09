import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { getCaseStudies } from '@/lib/api';

const SITE_URL = process.env.SITE_URL ?? 'https://aibaycan.az';

/**
 * Sitemap — statik səhifələr (hər locale) + dinamik case-study-lər.
 * Locale-prefiksli (docs/18): /az, /en, /ru.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPaths = ['', '/projects', '/about', '/contact'];

  const staticEntries: MetadataRoute.Sitemap = routing.locales.flatMap((locale) =>
    staticPaths.map((path) => ({
      url: `${SITE_URL}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: path === '' ? 1 : 0.8,
    })),
  );

  // Dinamik case-study-lər
  const result = await getCaseStudies();
  const caseStudyEntries: MetadataRoute.Sitemap = (result?.items ?? []).flatMap((cs) =>
    routing.locales.map((locale) => ({
      url: `${SITE_URL}/${locale}/projects/${cs.slug}`,
      lastModified: cs.completedAt ? new Date(cs.completedAt) : new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  );

  return [...staticEntries, ...caseStudyEntries];
}
