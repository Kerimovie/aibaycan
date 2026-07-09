import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { BlockRenderer } from '@/components/block-renderer';
import { caseStudyJsonLd, JsonLd } from '@/components/json-ld';
import { ViewTracker } from '@/components/view-tracker';
import { Link } from '@/i18n/navigation';
import { getCaseStudy } from '@/lib/api';

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cs = await getCaseStudy(slug);
  if (!cs) return {};
  return {
    title: cs.title,
    description: cs.summary,
    openGraph: {
      title: cs.title,
      description: cs.summary,
      images: cs.coverImage ? [cs.coverImage.url] : [],
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('projects');

  const cs = await getCaseStudy(slug);
  if (!cs) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <JsonLd data={caseStudyJsonLd(cs)} />
      <ViewTracker type="caseStudy" slug={cs.slug} />
      <Link href="/projects" className="text-sm text-primary hover:underline">
        ← {t('backToList')}
      </Link>

      <header className="mt-6">
        <h1 className="text-4xl font-bold">{cs.title}</h1>
        {cs.tagline && <p className="mt-2 text-lg text-text-secondary">{cs.tagline}</p>}

        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-text-tertiary">
          {cs.clientName && (
            <span>
              {t('client')}: <span className="text-text-primary">{cs.clientName}</span>
            </span>
          )}
          {cs.projectYear && (
            <span>
              {t('year')}: <span className="text-text-primary">{cs.projectYear}</span>
            </span>
          )}
        </div>

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
      </header>

      {cs.coverImage && (
        <img
          src={cs.coverImage.url}
          alt={cs.coverImage.alt ?? cs.title}
          className="mt-8 w-full rounded-lg"
        />
      )}

      <div className="mt-10">
        <BlockRenderer blocks={cs.blocks} />
      </div>

      {(cs.liveUrl || cs.repoUrl) && (
        <div className="mt-10 flex gap-4">
          {cs.liveUrl && (
            <a
              href={cs.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-primary px-5 py-2.5 font-medium text-white hover:bg-primary-700"
            >
              {t('viewLive')}
            </a>
          )}
          {cs.repoUrl && (
            <a
              href={cs.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-border px-5 py-2.5 font-medium hover:bg-surface-2"
            >
              {t('viewRepo')}
            </a>
          )}
        </div>
      )}
    </article>
  );
}
