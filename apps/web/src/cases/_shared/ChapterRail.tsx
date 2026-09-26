import type { RailItem } from '../types';
import './ChapterRail.css';

/** Port of Atlas `cinematic/ChapterRail.astro`. `aria-current` is set by `scripts/rail.ts`. */
export function ChapterRail({ items, label }: { items: RailItem[]; label: string }) {
  return (
    <nav className="cine-rail" aria-label={label} data-cine-rail="">
      <ol>
        {items.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`}>
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
