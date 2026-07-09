import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { getCaseStudies, getPosts } from '@/lib/api';

const SITE_URL = process.env.SITE_URL ?? 'https://aibaycan.az';

/**
 * Sitemap — statik səhifələr (hər locale) + dinamik case-study-lər.
 * Locale-prefiksli (docs/18): /az, /en, /ru.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPaths = ['', '/projects', '/blog', '/about', '/contact'];

  const staticEntries: MetadataRoute.Sitemap = routing.locales.flatMap((locale) =>
    staticPaths.map((path) => ({
      url: `${SITE_URL}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: path === '' ? 1 : 0.8,
    })),
  );

  // Dinamik case-study-lər + blog məqalələri
  const [caseStudies, posts] = await Promise.all([getCaseStudies(), getPosts()]);

  const caseStudyEntries: MetadataRoute.Sitemap = (caseStudies?.items ?? []).flatMap((cs) =>
    routing.locales.map((locale) => ({
      url: `${SITE_URL}/${locale}/projects/${cs.slug}`,
      lastModified: cs.completedAt ? new Date(cs.completedAt) : new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  );

  const postEntries: MetadataRoute.Sitemap = (posts?.items ?? []).flatMap((post) =>
    routing.locales.map((locale) => ({
      url: `${SITE_URL}/${locale}/blog/${post.slug}`,
      lastModified: post.publishedAt ? new Date(post.publishedAt) : new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  );

  return [...staticEntries, ...caseStudyEntries, ...postEntries];
}
