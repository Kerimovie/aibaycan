import type { ReactNode } from 'react';
import { AccentTitle } from './AccentTitle';
import { cx } from './cx';
import { Surface, type SurfaceTone } from './Surface';
import './Chapter.css';

export interface ChapterProps {
  /** Anchor id; also used by ChapterRail. */
  id: string;
  tone?: SurfaceTone;
  /** Mono badge, e.g. `KM 0` or `07:45`. */
  km?: string;
  eyebrow?: string;
  title: string;
  /** Substring of `title` rendered in the accent colour. */
  accent?: string;
  /** `lang` of the accent (see AccentTitle). */
  accentLang?: string;
  /** Intro paragraph (keep it ≤ 62ch per line; the column is capped). */
  lead?: string;
  /** Extra content at the end of the chapter header (Atlas `slot="head"`). */
  head?: ReactNode;
  /** `true` renders the children outside `.container-page`, edge to edge. One chapter per page at most. */
  bleed?: boolean;
  className?: string;
  children?: ReactNode;
}

/** Port of Atlas `cinematic/Chapter.astro`. */
export function Chapter({ id, tone = 'asphalt', km, eyebrow, title, accent, accentLang, lead, head, bleed = false, className, children }: ChapterProps) {
  const titleId = `${id}-title`;
  return (
    <Surface id={id} tone={tone} labelledby={titleId} className={cx('cine-chapter', className)}>
      <div className="container-page">
        <header className="cine-chapter__head">
          {(km || eyebrow) && (
            <p className="cine-km">
              {km && <b>{km}</b>}
              {eyebrow && <span>{eyebrow}</span>}
            </p>
          )}
          <AccentTitle as="h2" id={titleId} title={title} accent={accent} accentLang={accentLang} className="cine-title mt-5" />
          {lead && <p className="cine-lead mt-6">{lead}</p>}
          {head}
        </header>
        {!bleed && children}
      </div>
      {bleed && <div className="cine-chapter__bleed">{children}</div>}
    </Surface>
  );
}
