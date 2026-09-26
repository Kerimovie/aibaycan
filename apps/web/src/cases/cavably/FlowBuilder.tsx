import { cx } from '../_shared/cx';
import type { CavablyCopy } from './i18n';
import './FlowBuilder.css';

// Port of Atlas `cases/cavably/FlowBuilder.astro`. Driven by `scripts/flow.ts` (via CavablyEffects).

type NodeId = keyof CavablyCopy['flows']['builder']['nodes'];
// Canvas topology (edge paths in a 300 × 400 box; node centres on a 3-column, 4-row grid).
const nodes: { id: NodeId; kind: string }[] = [
  { id: 'trigger', kind: 'trigger' },
  { id: 'intent', kind: 'ai' },
  { id: 'ask', kind: 'ask' },
  { id: 'answer', kind: 'ai' },
  { id: 'hours', kind: 'logic' },
  { id: 'deal', kind: 'crm' },
  { id: 'assign', kind: 'agent' },
];
const edges = [
  'M150 50 L150 150',
  'M150 150 C150 200 50 200 50 250',
  'M150 150 L150 250',
  'M150 150 C150 200 250 200 250 250',
  'M50 250 L50 350',
  'M250 250 L250 350',
];
// One simulated run per branch: nodes lit in order and the edges between them.
const runs: { nodes: NodeId[]; edges: number[]; branch: number }[] = [
  { nodes: ['trigger', 'intent', 'ask', 'deal'], edges: [0, 1, 4], branch: 0 },
  { nodes: ['trigger', 'intent', 'answer'], edges: [0, 2], branch: 1 },
  { nodes: ['trigger', 'intent', 'hours', 'assign'], edges: [0, 3, 5], branch: 2 },
];
const first = runs[0] ?? { nodes: [], edges: [], branch: -1 };
const kindOfLibrary = ['send', 'ask', 'logic', 'logic', 'logic', 'logic', 'crm', 'ai', 'agent', 'crm', 'crm', 'send'];

export function FlowBuilder({ t, className }: { t: CavablyCopy; className?: string }) {
  const b = t.flows.builder;
  return (
    <div className={cx('cav cav-ui cav-flow', className)} role="img" aria-label={b.ariaLabel} data-cav-flow="" data-runs={JSON.stringify(runs)}>
      <div className="cav-flow__bar">
        <span className="cav-flow__name">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 4.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM18 15.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM8 6.5h5a3 3 0 0 1 3 3v6" />
          </svg>
          {b.title}
        </span>
        <span className="cav-flow__status">
          <i /> {b.status}
        </span>
        <span className="cav-flow__templates">
          <span className="cav-label">{b.templatesTitle}</span>
          {b.templates.map((name) => (
            <span key={name} className="cav-flow__tpl">
              {name}
            </span>
          ))}
        </span>
      </div>

      <div className="cav-flow__body">
        <div className="cav-flow__library">
          <p className="cav-label">{b.libraryTitle}</p>
          <ul>
            {b.library.map((item, i) => (
              <li key={i} data-kind={kindOfLibrary[i]}>
                <i /> {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="cav-flow__canvas">
          <div className="cav-flow__board">
            <svg className="cav-flow__edges" viewBox="0 0 300 400" preserveAspectRatio="none">
              {edges.map((d, i) => (
                <g key={i} data-edge={i} data-lit={first.edges.includes(i) ? '' : undefined}>
                  <path className="cav-flow__edge" d={d} />
                  <path className="cav-flow__pulse" d={d} pathLength={100} />
                </g>
              ))}
            </svg>
            {b.branches.map((label, i) => (
              <span key={i} className="cav-flow__branch" data-branch={i} data-lit={first.branch === i ? '' : undefined}>
                {label}
              </span>
            ))}
            {nodes.map((node) => (
              <span
                key={node.id}
                className="cav-flow__node"
                data-node={node.id}
                data-kind={node.kind}
                data-lit={first.nodes.includes(node.id) ? '' : undefined}
              >
                <span className="cav-flow__type">
                  <i /> {b.nodes[node.id].type}
                </span>
                <span className="cav-flow__text">{b.nodes[node.id].text}</span>
              </span>
            ))}
          </div>
        </div>

        <div className="cav-flow__sim">
          <p className="cav-flow__sim-head">
            <span className="cav-label">{b.simulatorTitle}</span>
            <span className="cav-flow__play">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5.5v13l10-6.5z" />
              </svg>
            </span>
          </p>
          {b.runs.map((run, r) => (
            <div key={r} className="cav-flow__run" data-run={r} data-active={r === 0 ? '' : undefined}>
              <p className="cav-flow__sample">{run.message}</p>
              <ol>
                {run.steps.map((step, k) => (
                  <li key={k} data-step={k} data-done={r === 0 ? '' : undefined}>
                    <i /> {step}
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
