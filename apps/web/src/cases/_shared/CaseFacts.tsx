import { caseMeta } from '../meta';
import type { CaseBase, CaseSlug, Locale } from '../types';
import { CineLink } from './CineLink';
import { cx } from './cx';
import { caseLabels } from './labels';
import './CaseFacts.css';

export interface CaseFactsProps {
  locale: Locale;
  slug: CaseSlug;
  facts: CaseBase['facts'];
  className?: string;
}

/**
 * Port of Atlas `cases/CaseFacts.astro`. Differences: Aibaycan has no industries page, so the industry is plain
 * text; services link to Aibaycan's single `/services` page.
 */
export function CaseFacts({ locale, slug, facts, className }: CaseFactsProps) {
  const entry = caseMeta[slug];
  const labels = caseLabels[locale];
  return (
    <div className={cx('case-facts', className)}>
      <h2 className="sr-only">{labels.factsAriaLabel}</h2>
      <dl>
        <div>
          <dt>{labels.type}</dt>
          <dd className="case-facts__type">
            <i aria-hidden="true" />
            {entry.kind === 'platform' ? labels.typePlatform : entry.kind === 'product' ? labels.typeProduct : labels.typeClient}
          </dd>
        </div>
        <div>
          <dt>{labels.industry}</dt>
          <dd>{labels.industryNames[entry.industry]}</dd>
        </div>
        <div className="case-facts__services">
          <dt>{labels.services}</dt>
          <dd>
            <ul>
              {entry.services.map((service) => (
                <li key={service}>
                  <CineLink href="/services">{labels.serviceNames[service]}</CineLink>
                </li>
              ))}
            </ul>
          </dd>
        </div>
        <div>
          <dt>{labels.platforms}</dt>
          <dd>{facts.platforms}</dd>
        </div>
        <div>
          <dt>{labels.languages}</dt>
          <dd>{facts.languages}</dd>
        </div>
      </dl>
    </div>
  );
}
