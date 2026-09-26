// "23:00 · three-way reconciliation": trip, invoice and finance record slide together and match field by field, then
// the mismatch queue. Played step by step by `scripts/sequence.ts`; the markup is the final step.
// Port of Atlas `src/components/cases/sahil-transport/ReconcileMatch.astro`.
import { cx } from '../_shared/cx';
import type { SahilTransportCopy } from './i18n';
import './ReconcileMatch.css';

const EMPTY = '—';
// Steps: 0 apart · 1 aligned · 2 fields matched · 3 stamped · 4 mismatch queue.
const durations = [1100, 1300, 2300, 1500, 4600].join(',');

export function ReconcileMatch({ board: b, className }: { board: SahilTransportCopy['reconcile']['board']; className?: string }) {
  // A wire joins a cell to the next column when both hold the same value.
  const links = b.rows.map((row) =>
    row.values.map((value, c) => c < row.values.length - 1 && value !== EMPTY && value === row.values[c + 1]),
  );

  return (
    <div className={cx('st-rec', className)} role="img" aria-label={b.label} data-st-seq="" data-durations={durations} data-step="4">
      <div className="st-rec__board">
        <div className="st-rec__labels">
          <span className="st-rec__spacer"></span>
          {b.rows.map((row) => (
            <span key={row.label} className="st-rec__label">
              {row.label}
            </span>
          ))}
        </div>
        {b.columns.map((column, c) => (
          <div key={column.code} className="st-rec__col" data-col={c}>
            <div className="st-rec__head">
              <b>{column.title}</b>
              <span>
                {column.source} · <em>{column.code}</em>
              </span>
            </div>
            {b.rows.map((row, r) => (
              <span
                key={row.label}
                className="st-rec__cell"
                data-empty={row.values[c] === EMPTY ? '' : undefined}
                data-link={links[r]?.[c] ? '' : undefined}
                data-row={r}
                data-label={row.label}
              >
                {row.values[c]}
              </span>
            ))}
          </div>
        ))}
        <span className="st-rec__stamp">✓ {b.stamp}</span>
      </div>

      <div className="st-rec__queue">
        <div className="st-rec__queue-head">
          <span className="st-rec__check" data-on=""></span>
          <b>{b.queue.title}</b>
          <span className="st-rec__count">{b.queue.count}</span>
          <span className="st-rec__select">{b.queue.selectAll}</span>
        </div>
        <ul>
          {b.queue.rows.map((row) => (
            <li key={row.trip}>
              <span className="st-rec__check" />
              <span className="st-rec__trip">
                <b>{row.trip}</b> <small>{row.plate}</small>
              </span>
              <span className="st-rec__reason">{row.reason}</span>
              <span className="st-rec__detail">{row.detail}</span>
              <span className="st-rec__actions">
                <i data-kind="ok">{b.queue.approve}</i>
                <i data-kind="no">{b.queue.reject}</i>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
