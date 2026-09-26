// "How it is built": sources → platform stages → results, joined by animated buses.
// Port of Atlas `src/components/cases/sahil-transport/SignalFlow.astro`.
import { cx } from '../_shared/cx';
import type { SahilTransportCopy } from './i18n';
import './SignalFlow.css';

export function SignalFlow({ flow: f, className }: { flow: SahilTransportCopy['engineering']['flow']; className?: string }) {
  return (
    <div className={cx('st-flow', className)}>
      <div className="st-flow__group" data-kind="sources">
        <h3 className="cine-eyebrow">{f.sourcesTitle}</h3>
        <ul>
          {f.sources.map((source) => (
            <li key={source}>{source}</li>
          ))}
        </ul>
      </div>

      <span className="st-flow__bus" aria-hidden="true">
        <i></i>
        <i></i>
        <i></i>
      </span>

      <div className="st-flow__group" data-kind="core">
        <h3 className="cine-eyebrow">{f.coreTitle}</h3>
        <ol>
          {f.core.map((stage, i) => (
            <li key={stage}>
              <b aria-hidden="true">{String(i + 1).padStart(2, '0')}</b>
              {stage}
            </li>
          ))}
        </ol>
      </div>

      <span className="st-flow__bus" aria-hidden="true">
        <i></i>
        <i></i>
        <i></i>
      </span>

      <div className="st-flow__group" data-kind="outputs">
        <h3 className="cine-eyebrow">{f.outputsTitle}</h3>
        <ul>
          {f.outputs.map((output) => (
            <li key={output}>{output}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
