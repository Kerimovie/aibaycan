import type { ReactNode } from 'react';
import { AccentTitle } from './AccentTitle';
import { CineLink, type CineLinkTarget } from './CineLink';
import { cx } from './cx';
import { Surface, type SurfaceTone } from './Surface';
import './FinalCta.css';

export interface FinalCtaProps {
  id: string;
  tone?: SurfaceTone;
  km?: string;
  eyebrow?: string;
  title: string;
  accent?: string;
  lead?: string;
  /** Rendered as a green road sign (`sign="road"`) or as a sign in the page accent (`sign="accent"`). */
  primary: CineLinkTarget;
  sign?: 'road' | 'accent';
  secondary?: CineLinkTarget;
  /** “Back to the start” link, usually `#hero`. */
  back?: CineLinkTarget;
  className?: string;
  children?: ReactNode;
}

/** Port of Atlas `cinematic/FinalCta.astro`. */
export function FinalCta({ id, tone = 'asphalt', km, eyebrow, title, accent, lead, primary, sign = 'road', secondary, back, className, children }: FinalCtaProps) {
  const titleId = `${id}-title`;
  return (
    <Surface id={id} tone={tone} labelledby={titleId} className={cx('cine-final', className)}>
      <div className="container-page">
        {(km || eyebrow) && (
          <p className="cine-km">
            {km && <b>{km}</b>}
            {eyebrow && <span>{eyebrow}</span>}
          </p>
        )}
        <AccentTitle as="h2" id={titleId} title={title} accent={accent} className="cine-title cine-final__title mt-5" />
        {lead && <p className="cine-lead mt-6">{lead}</p>}
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <SignLink link={primary} sign={sign} />
          {secondary && (
            <CineLink href={secondary.href} external={secondary.external} className="cine-btn">
              {secondary.label}
            </CineLink>
          )}
        </div>
        {children}
        {back && (
          <CineLink href={back.href} external={back.external} className="cine-final__back">
            {back.label}
            <span aria-hidden="true">↑</span>
          </CineLink>
        )}
      </div>
    </Surface>
  );
}

function SignLink({ link, sign }: { link: CineLinkTarget; sign: 'road' | 'accent' }) {
  return (
    <CineLink className="cine-sign" data-sign={sign} href={link.href} external={link.external}>
      {link.label}
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </CineLink>
  );
}
