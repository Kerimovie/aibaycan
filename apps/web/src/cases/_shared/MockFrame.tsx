import type { ReactNode } from 'react';
import { cx } from './cx';
import './MockFrame.css';

export interface MockFrameProps {
  /** `browser`: window chrome with an address bar · `phone`: handset with a notch. */
  variant?: 'browser' | 'phone';
  /** Address-bar text (browser only). */
  title?: string;
  /** Accessible name; the mock is exposed as one image. Pass `decorative` to hide it instead. */
  label?: string;
  decorative?: boolean;
  className?: string;
  children?: ReactNode;
}

/** Port of Atlas `cinematic/MockFrame.astro`. */
export function MockFrame({ variant = 'browser', title, label, decorative = false, className, children }: MockFrameProps) {
  const a11y = decorative ? { 'aria-hidden': true as const } : { role: 'img' as const, 'aria-label': label };
  if (variant === 'browser') {
    return (
      <div className={cx('cine-frame', className)} {...a11y}>
        <div className="cine-frame__chrome">
          <i />
          <i />
          <i />
          {title && <span className="cine-frame__url">{title}</span>}
        </div>
        <div className="cine-frame__body">{children}</div>
      </div>
    );
  }
  return (
    <div className={cx('cine-handset', className)} {...a11y}>
      <div className="cine-handset__screen">
        <span className="cine-handset__notch" />
        {children}
      </div>
    </div>
  );
}
