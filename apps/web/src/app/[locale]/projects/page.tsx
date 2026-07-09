import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { getCaseStudies } from '@/lib/api';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'projects' });
  return { title: t('title') };
}

export default async function ProjectsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('projects');

  const result = await getCaseStudies();
  const items = result?.items ?? [];

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="mb-8 text-3xl font-bold">{t('title')}</h1>

      {items.length === 0 ? (
        <p className="text-text-tertiary">{t('empty')}</p>
      ) : (
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((cs) => (
            <li key={cs.id}>
              <Link href={`/projects/${cs.slug}`} className="group block">
                <div className="overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-md">
                  {cs.coverImage ? (
                    <img
                      src={cs.coverImage.url}
                      alt={cs.coverImage.alt ?? cs.title}
                      className="aspect-video w-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="aspect-video w-full bg-surface-2" />
                  )}
                  <div className="p-5">
                    <h2 className="font-medium group-hover:text-primary">{cs.title}</h2>
                    {cs.tagline && (
                      <p className="mt-1 text-sm text-text-tertiary">{cs.tagline}</p>
                    )}
                    <p className="mt-2 text-sm text-text-secondary">{cs.summary}</p>
                    {cs.categories.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {cs.categories.map((cat) => (
                          <span
                            key={cat.id}
                            className="rounded-full bg-primary-50 px-2 py-0.5 text-xs text-primary"
                          >
                            {cat.name}
                          </span>
                        ))}
                      </div>
                    )}
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
