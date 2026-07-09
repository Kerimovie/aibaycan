const SITE_URL = process.env.SITE_URL ?? 'https://aibaycan.az';

/**
 * JSON-LD structured data — SEO (Google rich results).
 * Server komponent, script tag kimi render olunur.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger -- JSON.stringify təhlükəsizdir (data quraşdırılmışdır)
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** Organization schema — brand identifikasiyası (ana səhifə) */
export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'aibaycan.az',
    url: SITE_URL,
  };
}

/** Article schema — blog məqaləsi (SEO rich results) */
export function articleJsonLd(post: {
  title: string;
  excerpt: string;
  slug: string;
  coverImage: { url: string } | null;
  author: { name: string } | null;
  publishedAt: string | null;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    url: `${SITE_URL}/blog/${post.slug}`,
    ...(post.coverImage ? { image: post.coverImage.url } : {}),
    ...(post.author ? { author: { '@type': 'Person', name: post.author.name } } : {}),
    ...(post.publishedAt ? { datePublished: post.publishedAt } : {}),
    publisher: { '@type': 'Organization', name: 'aibaycan.az' },
  };
}

/** CreativeWork schema — case-study detal */
export function caseStudyJsonLd(cs: {
  title: string;
  summary: string;
  slug: string;
  coverImage: { url: string } | null;
  completedAt: string | null;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: cs.title,
    description: cs.summary,
    url: `${SITE_URL}/projects/${cs.slug}`,
    ...(cs.coverImage ? { image: cs.coverImage.url } : {}),
    ...(cs.completedAt ? { dateCreated: cs.completedAt } : {}),
  };
}
