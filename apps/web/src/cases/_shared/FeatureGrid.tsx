import { cx } from './cx';

export interface FeatureGridProps {
  items: { title: string; text: string }[];
  /** Columns from `lg` (2 from `sm`). */
  columns?: 2 | 3 | 4;
  /** Heading level of item titles. */
  headingLevel?: 3 | 4;
  className?: string;
}

/** Port of Atlas `cinematic/FeatureGrid.astro` (styles in cinematic.css). */
export function FeatureGrid({ items, columns = 3, headingLevel = 3, className }: FeatureGridProps) {
  const Heading = headingLevel === 4 ? 'h4' : 'h3';
  return (
    <ul className={cx('cine-features', className)} data-cols={columns}>
      {items.map((item) => (
        <li key={item.title} className="cine-feature">
          <Heading className="cine-feature__title">{item.title}</Heading>
          <p className="cine-feature__text">{item.text}</p>
        </li>
      ))}
    </ul>
  );
}
