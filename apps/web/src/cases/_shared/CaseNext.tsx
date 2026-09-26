import { caseMeta } from '../meta';
import { caseSlugs, type CaseSlug, type Locale } from '../types';
import { CineLink } from './CineLink';
import { caseLabels } from './labels';
import { Surface } from './Surface';
import './CaseNext.css';

/** Port of Atlas `cases/CaseNext.astro`: a card for the next case in `caseSlugs` (wrapping around). */
export function CaseNext({ locale, slug, id = 'next' }: { locale: Locale; slug: CaseSlug; id?: string }) {
  const labels = caseLabels[locale];
  const nextSlug = caseSlugs[(caseSlugs.indexOf(slug) + 1) % caseSlugs.length] ?? slug;
  const next = caseMeta[nextSlug];
  const item = next.items[locale];
  const titleId = `${id}-title`;

  return (
    <Surface id={id} tone="asphalt" labelledby={titleId} className="case-next">
      <div className="container-page">
        <div className="case-next__head">
          <h2 id={titleId} className="case-next__label">
            {labels.nextProject}
          </h2>
          <CineLink className="case-next__all" href="/projects">
            {labels.allProjects}
            <span aria-hidden="true">→</span>
          </CineLink>
        </div>

        <CineLink className="case-next__card" href={`/projects/${nextSlug}`} data-accent={next.accentPreset}>
          <span className="case-next__glow" aria-hidden="true" />
          <span className="case-next__meta">
            <span className="case-next__mark" aria-hidden="true">
              {item.name.charAt(0).toUpperCase()}
            </span>
            <span>{item.category}</span>
          </span>
          <span className="case-next__name">
            {item.name}
          </span>
          <span className="case-next__foot">
            <span className="case-next__tagline">{item.tagline}</span>
            <span className="case-next__go" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </span>
        </CineLink>
      </div>
    </Surface>
  );
}
