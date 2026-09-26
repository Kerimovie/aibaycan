// Kit CSS FIRST: component stylesheets (CaseNext.css, FinalCta.css, …) must come after it, as on Atlas, so their
// equal-specificity rules (e.g. `.case-next` padding over `.cine-surface`) win by source order.
import './styles/cinematic.css';
import type { ReactNode } from 'react';
import { caseMeta } from '../meta';
import type { CaseBase, CaseSlug, Locale, RailItem } from '../types';
import { CaseHero } from './CaseHero';
import { CaseNext } from './CaseNext';
import { CaseRole } from './CaseRole';
import { CaseStack } from './CaseStack';
import { Chapter } from './Chapter';
import { CinematicPage } from './CinematicPage';
import { FaqList } from './FaqList';
import { FinalCta } from './FinalCta';
import { CONTACT_EMAIL, caseLabels } from './labels';
import { SampleDataNote } from './SampleDataNote';
import { breadcrumbNode, caseStudyNode, faqNode, graph } from './schema';
import azMessages from '@/messages/az.json';
import enMessages from '@/messages/en.json';
import ruMessages from '@/messages/ru.json';
import './CaseLayout.css';

/** Aibaycan's own nav labels (messages/<locale>.json → nav), so the breadcrumb matches the site header. */
const navLabels: Record<Locale, { home: string; projects: string }> = {
  az: azMessages.nav,
  en: enMessages.nav,
  ru: ruMessages.nav,
};

export interface CaseLayoutProps {
  locale: Locale;
  slug: CaseSlug;
  /** The case's copy in `locale` (its i18n file). */
  copy: CaseBase;
  /** The builder's own chapters in page order (`{ id, label }`); the first one is the hero's "read the story" target. */
  rail: RailItem[];
  /** `split` (default): hero copy left, visual right from `lg`. `stacked`: the visual runs full width under the copy. */
  heroLayout?: 'split' | 'stacked';
  /** Atlas `slot="hero-visual"`. Omit for a text-only (`solo`) hero. */
  heroVisual?: ReactNode;
  /** The page's one SampleDataNote is rendered in the final CTA. Pass `false` if the page places it itself. */
  sampleDataNote?: boolean;
  /** The chapters. */
  children?: ReactNode;
}

/**
 * Port of Atlas `cases/CaseLayout.astro`: JSON-LD, cinematic root (fonts, accent preset, rail, progress), hero with
 * facts band, then the builder's chapters, then role · stack · FAQ · next project · final CTA.
 * Ids used here (do not reuse them in chapters): hero, role, stack, faq, next, final.
 * SEO title/description are set by the route's `generateMetadata` (see app/[locale]/projects/[slug]/page.tsx).
 */
export function CaseLayout({ locale, slug, copy: t, rail, heroLayout = 'split', heroVisual, sampleDataNote = true, children }: CaseLayoutProps) {
  const labels = caseLabels[locale];
  const entry = caseMeta[slug];
  const item = entry.items[locale];
  const path = `projects/${slug}`;

  // Home › Our work › Project (app paths for the links; the JSON-LD uses the same list).
  const crumbs = [
    { name: navLabels[locale].home, path: '/' },
    { name: navLabels[locale].projects, path: '/projects' },
    { name: item.name, path: `/${path}` },
  ];

  const schema = graph([
    breadcrumbNode(
      locale,
      path,
      crumbs.map((crumb) => ({ name: crumb.name, path: crumb.path.replace(/^\//, '') })),
    ),
    caseStudyNode({
      locale,
      path,
      kind: entry.kind,
      name: item.name,
      headline: `${item.name} — ${t.h1}`,
      description: t.seo.description,
      about: item.category,
      productUrl: entry.url,
      // Only the projects whose facts band names a PWA claim one in JSON-LD.
      operatingSystem: t.facts.platforms.includes('PWA') ? 'Web, PWA' : 'Web',
    }),
    faqNode(locale, path, t.faq.items),
  ]);

  const fullRail: RailItem[] = [
    { id: 'hero', label: labels.rail.start },
    ...rail,
    { id: 'role', label: labels.rail.role },
    { id: 'stack', label: labels.rail.stack },
    { id: 'faq', label: labels.rail.faq },
    { id: 'next', label: labels.rail.next },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />
      <CinematicPage
        rail={fullRail}
        railLabel={labels.railAriaLabel}
        progressLabel={labels.progressAriaLabel}
        accent={entry.accentPreset}
        className="case"
      >
        <CaseHero
          locale={locale}
          slug={slug}
          copy={t}
          crumbs={crumbs}
          layout={heroLayout}
          storyId={rail[0]?.id ?? 'role'}
          visual={heroVisual}
        />

        {children}

        <CaseRole role={t.role} />
        <CaseStack stack={t.stack} />

        <Chapter id="faq" tone="paper" eyebrow={labels.faq} title={t.faq.title}>
          <FaqList items={t.faq.items} name={`${slug}-faq`} className="mt-12 lg:mt-16" />
        </Chapter>

        <CaseNext locale={locale} slug={slug} />

        <FinalCta
          id="final"
          tone="navy"
          eyebrow={labels.final.eyebrow}
          title={labels.final.title}
          accent={labels.final.accent}
          lead={labels.final.lead}
          primary={{ label: labels.discussSimilar, href: '/contact' }}
          sign="accent"
          secondary={{ label: labels.final.email, href: `mailto:${CONTACT_EMAIL}` }}
          back={{ label: labels.final.backToTop, href: '#hero' }}
        >
          {sampleDataNote && <SampleDataNote text={t.sampleDataNote} className="mt-16 max-w-3xl" />}
        </FinalCta>
      </CinematicPage>
    </>
  );
}

