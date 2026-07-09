import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { BlockRenderer } from '@/components/block-renderer';
import { articleJsonLd, JsonLd } from '@/components/json-ld';
import { ViewTracker } from '@/components/view-tracker';
import { Link } from '@/i18n/navigation';
import { getPost } from '@/lib/api';

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return {
    title: post.metaTitle ?? post.title,
    description: post.metaDescription ?? post.excerpt,
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      images: post.coverImage ? [post.coverImage.url] : [],
      ...(post.publishedAt ? { publishedTime: post.publishedAt } : {}),
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('blog');

  const post = await getPost(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <JsonLd data={articleJsonLd(post)} />
      <ViewTracker type="post" slug={post.slug} />

      <Link href="/blog" className="text-sm text-primary hover:underline">
        ← {t('backToList')}
      </Link>

      <header className="mt-6">
        {post.categories.length > 0 && (
          <div className="mb-3 flex flex-wrap gap-1.5">
            {post.categories.map((cat) => (
              <span key={cat.id} className="rounded-full bg-primary-50 px-2 py-0.5 text-xs text-primary">
                {cat.name}
              </span>
            ))}
          </div>
        )}
        <h1 className="text-4xl font-bold">{post.title}</h1>
        <div className="mt-4 flex flex-wrap gap-x-4 text-sm text-text-tertiary">
          {post.author && (
            <span>
              {t('by')}: <span className="text-text-primary">{post.author.name}</span>
            </span>
          )}
          {post.publishedAt && (
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString(locale)}
            </time>
          )}
        </div>
      </header>

      {post.coverImage && (
        <img
          src={post.coverImage.url}
          alt={post.coverImage.alt ?? post.title}
          className="mt-8 w-full rounded-lg"
        />
      )}

      <div className="mt-10">
        <BlockRenderer blocks={post.blocks} />
      </div>
    </article>
  );
}
