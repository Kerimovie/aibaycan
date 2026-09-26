import type { ReactNode } from 'react';
import { cx } from '../_shared/cx';

/**
 * Port of Atlas `cases/molecion/Phone.astro` (styles in molecion.css).
 * Handset with a cream screen: the Molecion storefront reads light — cream paper, black chrome, gold hairlines.
 * Decorative by itself; the scene that uses it owns the one `role="img"` label.
 */
export function Phone({ className, children }: { className?: string; children?: ReactNode }) {
  return (
    <div className={cx('mo-phone', className)}>
      <div className="mo-phone__screen">
        <span className="mo-phone__notch"></span>
        {children}
      </div>
    </div>
  );
}
