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
  const tHome = await getTranslations('home');

  const cs = await getCaseStudy(slug);
  if (!cs) notFound();

  const meta = [
    cs.clientName ? { label: t('client'), value: cs.clientName } : null,
    cs.projectYear ? { label: t('year'), value: String(cs.projectYear) } : null,
  ].filter((x): x is { label: string; value: string } => x !== null);

  return (
    <article className="px-6 py-14">
      <JsonLd data={caseStudyJsonLd(cs)} />
      <ViewTracker type="caseStudy" slug={cs.slug} />

      {/* ── Başlıq ───────────────────────────────────────────── */}
      <header className="mx-auto max-w-3xl">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-text-secondary transition-colors hover:text-primary"
        >
          <span aria-hidden>←</span> {t('backToList')}
        </Link>

        {cs.categories.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-1.5">
            {cs.categories.map((cat) => (
              <span
                key={cat.id}
                className="rounded-full bg-primary-50 px-2.5 py-0.5 text-xs font-medium text-primary"
              >
                {cat.name}
              </span>
            ))}
          </div>
        )}

        <h1 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight text-text-primary sm:text-5xl">
          {cs.title}
        </h1>
        {cs.tagline && <p className="mt-4 text-xl text-text-secondary">{cs.tagline}</p>}

        {meta.length > 0 && (
          <dl className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-2 text-sm">
            {meta.map((m) => (
              <div key={m.label} className="flex items-center gap-2">
                <dt className="text-text-tertiary">{m.label}:</dt>
                <dd className="font-medium text-text-primary">{m.value}</dd>
              </div>
            ))}
          </dl>
        )}
      </header>

      {/* ── Cover ────────────────────────────────────────────── */}
      {cs.coverImage && (
        <div className="mx-auto mt-10 max-w-5xl">
          <img
            src={cs.coverImage.url}
            alt={cs.coverImage.alt ?? cs.title}
            className="aspect-[16/9] w-full rounded-2xl object-cover ring-1 ring-black/5"
          />
        </div>
      )}

      {/* ── Kontent blokları ─────────────────────────────────── */}
      <div className="mx-auto mt-14 max-w-3xl">
        <BlockRenderer blocks={cs.blocks} />
      </div>

      {/* ── Xarici linklər ───────────────────────────────────── */}
      {(cs.liveUrl || cs.repoUrl) && (
        <div className="mx-auto mt-12 flex max-w-3xl flex-wrap gap-3">
          {cs.liveUrl && (
            <a
              href={cs.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-primary px-5 py-2.5 font-semibold text-white transition hover:bg-primary-700"
            >
              {t('viewLive')} ↗
            </a>
          )}
          {cs.repoUrl && (
            <a
              href={cs.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-border px-5 py-2.5 font-semibold text-text-primary transition hover:border-primary/40 hover:text-primary"
            >
              {t('viewRepo')} ↗
            </a>
          )}
        </div>
      )}

      {/* ── Yekun CTA ────────────────────────────────────────── */}
      <div className="mx-auto mt-16 max-w-3xl">
        <div className="flex flex-col items-center gap-4 rounded-2xl border border-border bg-surface-1 px-8 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-lg font-semibold text-text-primary">{tHome('cta.title')}</p>
          <Link
            href="/contact"
            className="shrink-0 rounded-xl bg-primary px-6 py-3 font-semibold text-white transition hover:bg-primary-700"
          >
            {tHome('cta.button')}
          </Link>
        </div>
      </div>
    </article>
  );
}
