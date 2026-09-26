import { cx } from './cx';
import './FaqList.css';

export interface FaqListProps {
  items: { q: string; a: string }[];
  /** Shared `name` makes the disclosures exclusive (one open at a time). */
  name?: string;
  className?: string;
}

/** Port of Atlas `cinematic/FaqList.astro`. */
export function FaqList({ items, name = 'cine-faq', className }: FaqListProps) {
  return (
    <div className={cx('cine-faq', className)}>
      {items.map((item, i) => (
        <details key={item.q} name={name} open={i === 0}>
          <summary>
            <h3>{item.q}</h3>
            <span className="cine-faq__icon" aria-hidden="true" />
          </summary>
          <p>{item.a}</p>
        </details>
      ))}
    </div>
  );
}
