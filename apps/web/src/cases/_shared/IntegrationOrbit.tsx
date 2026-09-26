import { cx } from './cx';
import './IntegrationOrbit.css';

export interface IntegrationOrbitProps {
  center: { brand: string; product?: string };
  /** Systems around the hub. Pair it with a visible list: this graphic is decorative (aria-hidden). */
  nodes: { name: string }[];
  /** Every n-th node is outlined in the accent colour. */
  highlightEvery?: number;
  className?: string;
}

const C = 300;
const R = 232;
const H = 17;
const round = (n: number) => Math.round(n * 10) / 10;

/** Port of Atlas `cinematic/IntegrationOrbit.astro`. Its pulse starts on `data-inview` (motion.ts `initInView`). */
export function IntegrationOrbit({ center, nodes, highlightEvery = 3, className }: IntegrationOrbitProps) {
  const pills = nodes.map((node, i) => {
    const angle = -Math.PI / 2 + (i * Math.PI * 2) / nodes.length;
    // Rough text width for a 14px UI font; generous so labels never touch the pill edge.
    const width = Math.max(62, Array.from(node.name).length * 8.2 + 26);
    const x = round(C + Math.cos(angle) * R);
    const y = round(C + Math.sin(angle) * R);
    return { name: node.name, x, y, width: round(width), highlight: i % highlightEvery === 0 };
  });

  return (
    <div className={cx('cine-orbit', className)} data-cine-inview="" aria-hidden="true">
      <svg viewBox="-40 -10 680 620">
        <circle cx={C} cy={C} r={R} fill="none" stroke="#1c2740" strokeWidth="2" />
        <circle cx={C} cy={C} r="150" fill="none" stroke="#18223a" strokeWidth="1" strokeDasharray="3 7" />
        <g className="cine-orbit__spin">
          {pills.map((pill) => (
            <line key={pill.name} className="cine-orbit__spoke" x1={C} y1={C} x2={pill.x} y2={pill.y} />
          ))}
        </g>
        {pills.map((pill) => (
          <g key={pill.name} className="cine-orbit__node" data-highlight={pill.highlight ? '' : undefined}>
            <rect className="cine-orbit__pill" x={pill.x - pill.width / 2} y={pill.y - H} width={pill.width} height={H * 2} rx={H} />
            <circle className="cine-orbit__dot" cx={pill.x} cy={pill.y} r="7" />
            <text className="cine-orbit__name" x={pill.x} y={pill.y + 5} textAnchor="middle">
              {pill.name}
            </text>
          </g>
        ))}
        <circle className="cine-orbit__pulse" cx={C} cy={C} r="80" />
        <circle cx={C} cy={C} r="80" fill="var(--cine-accent)" />
        <text x={C} y={center.product ? C + 4 : C + 12} textAnchor="middle" className="cine-orbit__brand">
          {center.brand}
        </text>
        {center.product && (
          <text x={C} y={C + 28} textAnchor="middle" className="cine-orbit__product" lang="en">
            {center.product}
          </text>
        )}
      </svg>
    </div>
  );
}
