import type { ReactNode } from 'react';
import { cx } from './cx';

export type SurfaceTone = 'asphalt' | 'navy' | 'paper';

export interface SurfaceProps {
  id?: string;
  /** asphalt `#0a0f1a` · navy (asphalt + radial glow) · paper `#eee8da` with ink text. */
  tone?: SurfaceTone;
  as?: 'section' | 'div' | 'header' | 'footer' | 'aside';
  labelledby?: string;
  className?: string;
  children?: ReactNode;
}

/** Port of Atlas `cinematic/Surface.astro`. */
export function Surface({ id, tone = 'asphalt', as: Tag = 'section', labelledby, className, children }: SurfaceProps) {
  return (
    <Tag id={id} className={cx('cine-surface', `cine-surface--${tone}`, className)} aria-labelledby={labelledby}>
      {children}
    </Tag>
  );
}
