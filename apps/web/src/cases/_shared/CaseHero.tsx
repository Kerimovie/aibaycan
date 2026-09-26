import type { ReactNode } from 'react';
import { caseMeta } from '../meta';
import type { CaseBase, CaseSlug, Locale } from '../types';
import { AccentTitle } from './AccentTitle';
import { CaseFacts } from './CaseFacts';
import { CineLink } from './CineLink';
import { caseLabels } from './labels';
import './CaseHero.css';

export interface CaseHeroProps {
  locale: Locale;
  slug: CaseSlug;
  copy: CaseBase;
  /** Home › Our work › Project; `path` is a locale-agnostic app path (`/`, `/projects`, `/projects/<slug>`). */
  crumbs: { name: string; path: string }[];
  /** `split`: copy left, visual right from `lg` · `stacked`: visual full width under the copy. */
  layout?: 'split' | 'stacked';
  /** Chapter id the secondary button scrolls to when the project has no public URL. */
  storyId: string;
  /** Atlas `slot="visual"`. */
  visual?: ReactNode;
}

/** Port of Atlas `cases/CaseHero.astro` (root class renamed `.cine-case-hero`, see CaseHero.css). */
export function CaseHero({ locale, slug, copy: t, crumbs, layout = 'split', storyId, visual }: CaseHeroProps) {
  const entry = caseMeta[slug];
  const item = entry.items[locale];
  const labels = caseLabels[locale];
  const host = entry.url ? new URL(entry.url).hostname : undefined;
  const secondaryLabel = t.hero.secondaryCta ?? (entry.url ? labels.visitLive : labels.readStory);
  const hasVisual = visual !== undefined && visual !== null;

  return (
    <section id="hero" className="cine-case-hero" data-layout={hasVisual ? layout : 'solo'} aria-labelledby="hero-title">
      <div className="case-hero__backdrop" aria-hidden="true" />
      <div className="container-page">
        <nav className="case-hero__crumbs" aria-label={labels.breadcrumbAriaLabel}>
          <ol>
            {crumbs.map((crumb, index) => (
              <li key={crumb.path}>
                {index < crumbs.length - 1 ? (
                  <CineLink href={crumb.path}>{crumb.name}</CineLink>
                ) : (
                  <span aria-current="page" lang={entry.nameLang}>
                    {crumb.name}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <div className="case-hero__grid">
          <div className="case-hero__copy">
            <p className="case-hero__eyebrow">
              <span className="case-hero__mark" aria-hidden="true">
                {item.name.charAt(0).toUpperCase()}
              </span>
              <span>{t.hero.eyebrow}</span>
              {entry.kind === 'platform' && (
                <span className="case-hero__live">
                  <i aria-hidden="true" />
                  {labels.liveProduct}
                </span>
              )}
            </p>
            <h1 id="hero-title" className="case-hero__h1">
              <span className="case-hero__wordmark" data-long={item.name.length > 10 ? '' : undefined}>
                {item.name}
              </span>
              <span className="sr-only"> — </span>
              <span className="case-hero__seo">{t.h1}</span>
            </h1>
            <AccentTitle as="p" title={t.hero.title} accent={t.hero.accent} className="case-hero__title" />
            <p className="cine-lead case-hero__lead">{t.hero.lead}</p>
            <div className="case-hero__ctas">
              <CineLink className="cine-btn cine-btn--primary" href="/contact">
                {t.hero.primaryCta}
                <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </CineLink>
              {entry.url ? (
                <a className="cine-btn" href={entry.url} target="_blank" rel="noopener">
                  {secondaryLabel}
                  <span className="case-hero__host">{host}</span>
                  <span className="sr-only"> ({labels.newTab})</span>
                  <span aria-hidden="true">↗</span>
                </a>
              ) : (
                <a className="cine-btn" href={`#${storyId}`}>
                  {secondaryLabel}
                  <span aria-hidden="true">↓</span>
                </a>
              )}
            </div>
          </div>
          {hasVisual && <div className="case-hero__visual">{visual}</div>}
        </div>

        <CaseFacts locale={locale} slug={slug} facts={t.facts} className="case-hero__facts" />
      </div>
    </section>
  );
}
