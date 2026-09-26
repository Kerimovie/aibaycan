import { cx } from '../_shared/cx';
import type { MolecionCopy } from './i18n';
import { peelLine } from './line';
import './ParseScene.css';

/**
 * Port of Atlas `cases/molecion/ParseScene.astro`.
 * Reading the line: the printed string is peeled from the right — size, gender, concentration — until only the
 * name is left, with the forwards attempt failing beside it because the first PARFUM is inside the name.
 * Server-rendered finished (state = last step); `scripts/parse.ts` drives it.
 */
export function ParseScene({ t, className }: { t: MolecionCopy; className?: string }) {
  const p = t.parse;
  const s = t.samples;
  const f = p.failure;
  const { segments } = peelLine(s.rows.nuitEdp90, p.steps);
  const last = p.steps.length;
  /** The three fields taken off the right, shown as chips under the line; the name is the headline result. */
  const taken = p.steps.slice(0, last - 1).map((step, i) => ({ ...step, step: i + 1 }));
  const result = p.steps[last - 1];
  const wrong = [
    { label: p.steps[3]?.field ?? '', value: f.wrongName, unread: false },
    { label: p.steps[2]?.field ?? '', value: f.wrongConcentration, unread: false },
    { label: '?', value: f.leftover, unread: true },
  ];
  /** The same four fields the reader just watched peel off, so the winning panel shows its work too. */
  const right = p.steps.map((step) => ({ label: step.field, value: step.value }));

  return (
    <div className={cx('mo-parse', className)}>
      <div className="mo-parse__stage" data-mo-parse="" data-state={last}>
        <div className="mo-parse__panel mo-panel" role="img" aria-label={p.row.ariaLabel}>
          <div className="mo-panel__head">
            <span className="mo-panel__title">{p.row.label}</span>{' '}
            <span className="mo-label" data-tone="accent">
              {p.row.direction} <span aria-hidden="true">←</span>
            </span>
          </div>
          <div className="mo-panel__body">
            <p className="mo-parse__line mo-line">
              {segments.map((segment) => (
                <span
                  key={segment.step}
                  data-step={Math.min(segment.step, last)}
                  data-keep={segment.step === last ? '' : undefined}
                >
                  {segment.text}
                </span>
              ))}
            </p>
            <span className="mo-parse__ruler" aria-hidden="true"></span>
            <ul className="mo-parse__taken">
              {taken.map((step) => (
                <li key={step.step} data-step={step.step}>
                  <span className="mo-label">{step.field}</span> <b>{step.value}</b>
                </li>
              ))}
            </ul>
            <p className="mo-parse__result" data-step={last}>
              <span className="mo-label">{result?.field}</span> <b lang="en">{result?.value}</b>
            </p>
          </div>
        </div>

        <ol className="mo-parse__steps">
          {p.steps.map((step, i) => (
            <li key={step.field} data-step={i + 1}>
              <span className="mo-parse__no" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="mo-parse__step-body">
                <p className="mo-label">{step.field}</p>
                <p className="mo-parse__token">
                  <span className="mo-line">{step.token}</span> <span aria-hidden="true">→</span> <b>{step.value}</b>
                </p>
                <p className="cine-text mo-parse__step-text">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="mo-parse__failure">
        <div className="mo-parse__failure-copy">
          <h3 className="cine-h3">{f.title}</h3>
          <p className="cine-text mo-parse__failure-text">{f.text}</p>
        </div>
        <div className="mo-parse__compare" role="img" aria-label={f.ariaLabel}>
          <div className="mo-parse__side" data-side="wrong">
            <p className="mo-label">
              <span aria-hidden="true">→</span> {f.wrongLabel}
            </p>
            <ul className="mo-parse__tokens">
              {wrong.map((item) => (
                <li key={item.label} data-unread={item.unread ? '' : undefined}>
                  <span className="mo-label">{item.label}</span>{' '}
                  <b className="mo-line" lang="en">
                    {item.value}
                  </b>
                </li>
              ))}
            </ul>
            <p className="mo-parse__verdict" data-tone="bad">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18"></path>
              </svg>{' '}
              {f.wrongVerdict}
            </p>
          </div>
          <div className="mo-parse__side" data-side="right">
            <p className="mo-label" data-tone="accent">
              <span aria-hidden="true">←</span> {f.rightLabel}
            </p>
            <ul className="mo-parse__tokens mo-parse__tokens--right">
              {right.map((item) => (
                <li key={item.label}>
                  <span className="mo-label">{item.label}</span> <b>{item.value}</b>{' '}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
                    <path d="M5 12.5l4.5 4.5L19 7.5"></path>
                  </svg>
                </li>
              ))}
            </ul>
            <p className="mo-parse__resolved">{f.rightVerdict}</p>
            <p className="mo-parse__verdict" data-tone="ok">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" aria-hidden="true">
                <path d="M5 12.5l4.5 4.5L19 7.5"></path>
              </svg>{' '}
              {s.fragrances.nuit}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
