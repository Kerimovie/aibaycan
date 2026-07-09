import { getPosts } from '@/lib/api';

const SITE_URL = process.env.SITE_URL ?? 'https://aibaycan.az';

/** XML mətn qaçırma (entity escape) */
function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

/**
 * RSS feed — blog məqalələri (docs/28 Faza 3).
 * Default locale (az) üzərindən; sadə RSS 2.0.
 */
export async function GET(): Promise<Response> {
  const result = await getPosts();
  const posts = result?.items ?? [];

  const items = posts
    .map(
      (post) => `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${SITE_URL}/az/blog/${post.slug}</link>
      <guid isPermaLink="true">${SITE_URL}/az/blog/${post.slug}</guid>
      <description>${escapeXml(post.excerpt)}</description>
      ${post.publishedAt ? `<pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>` : ''}
    </item>`,
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>aibaycan.az — Bloq</title>
    <link>${SITE_URL}/az/blog</link>
    <description>Fikirlərimiz və təcrübəmiz</description>
    <language>az</language>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'content-type': 'application/xml; charset=utf-8',
      'cache-control': 'public, max-age=3600',
    },
  });
}
