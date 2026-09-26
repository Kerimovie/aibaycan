import { cx } from './cx';

/** Port of Atlas `cinematic/TagList.astro` (styles in cinematic.css). */
export function TagList({ tags, label, className }: { tags: string[]; label?: string; className?: string }) {
  return (
    <ul className={cx('cine-tags', className)} aria-label={label}>
      {tags.map((tag) => (
        <li key={tag} className="cine-tag">
          {tag}
        </li>
      ))}
    </ul>
  );
}
