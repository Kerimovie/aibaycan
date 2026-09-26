import { cx } from './cx';

/** Port of Atlas `cinematic/DefinitionRows.astro` (mono label + text rows; styles in cinematic.css). */
export function DefinitionRows({ items, className }: { items: { label: string; text: string }[]; className?: string }) {
  return (
    <dl className={cx('cine-rows', className)}>
      {items.map((item) => (
        <div key={item.label}>
          <dt>{item.label}</dt>
          <dd>{item.text}</dd>
        </div>
      ))}
    </dl>
  );
}
