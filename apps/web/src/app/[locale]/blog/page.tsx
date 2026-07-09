import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { getPosts } from '@/lib/api';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'blog' });
  return { title: t('title'), description: t('subtitle') };
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('blog');

  const result = await getPosts();
  const posts = result?.items ?? [];

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl font-bold">{t('title')}</h1>
      <p className="mb-10 mt-2 text-text-secondary">{t('subtitle')}</p>

      {posts.length === 0 ? (
        <p className="text-text-tertiary">{t('empty')}</p>
      ) : (
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={`/blog/${post.slug}`} className="group block">
                <div className="overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-md">
                  {post.coverImage ? (
                    <img
                      src={post.coverImage.url}
                      alt={post.coverImage.alt ?? post.title}
                      className="aspect-video w-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="aspect-video w-full bg-surface-2" />
                  )}
                  <div className="p-5">
                    {post.categories.length > 0 && (
                      <div className="mb-2 flex flex-wrap gap-1.5">
                        {post.categories.map((cat) => (
                          <span
                            key={cat.id}
                            className="rounded-full bg-primary-50 px-2 py-0.5 text-xs text-primary"
                          >
                            {cat.name}
                          </span>
                        ))}
                      </div>
                    )}
                    <h2 className="font-medium group-hover:text-primary">{post.title}</h2>
                    <p className="mt-2 text-sm text-text-secondary">{post.excerpt}</p>
                    <div className="mt-3 flex items-center gap-2 text-xs text-text-tertiary">
                      {post.author && <span>{post.author.name}</span>}
                      {post.publishedAt && (
                        <time dateTime={post.publishedAt}>
                          {new Date(post.publishedAt).toLocaleDateString(locale)}
                        </time>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
