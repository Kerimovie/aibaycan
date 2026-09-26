import { cx } from '../_shared/cx';
import type { MolecionCopy } from './i18n';
import './ScaleBand.css';

/**
 * Port of Atlas `cases/molecion/ScaleBand.astro`.
 * The catalogue we built and loaded, as five near-black plates on cream paper. The figures are the only real
 * numbers on the page; everything commercial stays masked.
 */
export function ScaleBand({ scale, className }: { scale: MolecionCopy['challenge']['scale']; className?: string }) {
  return (
    <div className={cx('mo-scale', className)}>
      <h3 className="mo-scale__title">{scale.title}</h3>
      <ul className="mo-scale__grid" aria-label={scale.ariaLabel}>
        {scale.items.map((item) => (
          <li key={item.label}>
            <span className="mo-scale__value">{item.value}</span>
            <span className="mo-scale__label">{item.label}</span>
          </li>
        ))}
      </ul>
      <p className="cine-text mo-scale__note">{scale.note}</p>
    </div>
  );
}
