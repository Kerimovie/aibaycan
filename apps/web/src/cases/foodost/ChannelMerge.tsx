import { cx } from '../_shared/cx';
import type { Foodost } from './data';
import './ChannelMerge.css';

// Four order channels converge into the kitchen display. Real list + caption; the curves are decoration.
// Port of Atlas `ChannelMerge.astro`.
const tones = ['hall', 'qr', 'wolt', 'bolt'];

export function ChannelMerge({ merge, className }: { merge: Foodost['kitchen']['merge']; className?: string }) {
  const rows = merge.sources.map((name, i) => ({ name, tone: tones[i] ?? 'hall', y: ((i + 0.5) / merge.sources.length) * 100 }));
  return (
    <figure className={cx('fd-merge', className)}>
      <figcaption className="cine-eyebrow">{merge.title}</figcaption>
      <div className="fd-merge__flow">
        <ul className="fd-merge__sources">
          {rows.map((row) => (
            <li key={row.name} data-tone={row.tone}>
              {row.name}
            </li>
          ))}
        </ul>
        <svg className="fd-merge__lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          {rows.map((row) => (
            <path key={`p-${row.name}`} className="fd-merge__path" d={`M0 ${row.y} C 55 ${row.y}, 45 50, 100 50`} />
          ))}
          {rows.map((row) => (
            <path
              key={`c-${row.name}`}
              className="fd-merge__comet"
              data-tone={row.tone}
              d={`M0 ${row.y} C 55 ${row.y}, 45 50, 100 50`}
              pathLength={100}
            />
          ))}
        </svg>
        <p className="fd-merge__target">
          <i aria-hidden="true" />
          {merge.target}
        </p>
      </div>
      <p className="cine-text fd-merge__note">{merge.note}</p>
    </figure>
  );
}
