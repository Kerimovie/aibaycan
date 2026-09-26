import { MockFrame } from '../_shared/MockFrame';
import type { Foodost } from './data';
import { money, percent, whole } from './scripts/format';
import './BranchBoard.css';

// The owner's morning: branches side by side with the weakest cells flagged, the chain P&L as a waterfall and
// a central menu update landing in every branch. Bars grow when the screen scrolls into view (CSS only).
// Port of Atlas `BranchBoard.astro`.
export function BranchBoard({ t, locale, label }: { t: Foodost; locale: string; label: string }) {
  const { board } = t.owner;
  const format = (kind: string, value: number) =>
    kind === 'pct' ? percent(locale, value) : value >= 1000 ? whole(locale, value) : money(locale, value);
  const metrics = board.metrics.map((metric) => {
    const max = Math.max(...metric.values);
    const worst = metric.worse === 'low' ? Math.min(...metric.values) : Math.max(...metric.values);
    return {
      ...metric,
      cells: metric.values.map((value) => ({
        text: format(metric.kind, value),
        width: (value / max) * 100,
        worst: value === worst,
      })),
    };
  });
  const revenue = board.pnl[0]?.value ?? 1;
  let running = 0;
  const pnl = board.pnl.map((row) => {
    let start: number;
    let end: number;
    if (row.total) {
      start = 0;
      end = row.value;
    } else if (row.value >= 0) {
      start = running;
      end = running + row.value;
      running = end;
    } else {
      end = running;
      start = running + row.value;
      running = start;
    }
    return {
      ...row,
      x: (start / revenue) * 100,
      w: ((end - start) / revenue) * 100,
      tone: row.total ? 'net' : row.value >= 0 ? 'in' : 'out',
    };
  });
  const weakIndex = board.branches.length - 1;
  const prime = (Math.abs(board.pnl.filter((row) => row.prime).reduce((sum, row) => sum + row.value, 0)) / revenue) * 100;

  return (
    <MockFrame title={board.window} label={label} className="fd-chain-frame">
      <div className="fd-chain" data-cine-inview="">
        <div className="fd-chain__top">
          <p className="fd-chain__heading">
            <b>{board.compareTitle}</b>
            <span>{board.period}</span>
          </p>
          <p className="fd-chain__push">
            <span>{board.push}</span>
            <span className="fd-chain__pushed">
              <i />
              <i />
              <i />
              {board.pushed}
            </span>
          </p>
        </div>

        <div className="fd-chain__grid">
          <div className="fd-chain__compare">
            <table className="fd-chain__table">
              <thead>
                <tr>
                  <td />
                  {board.branches.map((branch, i) => (
                    <th key={branch} data-weak={i === weakIndex ? '' : undefined}>
                      {branch}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {metrics.map((metric) => (
                  <tr key={metric.label}>
                    <th>{metric.label}</th>
                    {metric.cells.map((cell, i) => (
                      <td key={i} data-worst={cell.worst ? '' : undefined}>
                        <span>{cell.text}</span>
                        <svg viewBox="0 0 100 4" preserveAspectRatio="none">
                          <rect className="fd-chain__cell-bar" width={cell.width.toFixed(1)} height="4" rx="2" />
                        </svg>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="fd-chain__signal">
              <b>{board.signal}</b>
              <span>{board.signalText}</span>
            </p>
          </div>

          <div className="fd-chain__pnl">
            <p className="fd-chain__pnl-title">{board.pnlTitle}</p>
            <ul>
              {pnl.map((row) => (
                <li key={row.label} data-tone={row.tone}>
                  <span className="fd-chain__pnl-label">{row.label}</span>
                  <svg viewBox="0 0 100 10" preserveAspectRatio="none">
                    <rect className="fd-chain__pnl-track" width="100" height="10" />
                    <rect className="fd-chain__pnl-bar" x={row.x.toFixed(2)} width={row.w.toFixed(2)} height="10" rx="1.5" />
                  </svg>
                  <span className="fd-chain__pnl-value">{whole(locale, row.value)}</span>
                </li>
              ))}
            </ul>
            <p className="fd-chain__prime">
              <span>{board.primeCost}</span>
              <svg viewBox="0 0 100 6" preserveAspectRatio="none">
                <rect className="fd-chain__pnl-track" width="100" height="6" rx="3" />
                <rect className="fd-chain__prime-bar" width={prime.toFixed(1)} height="6" rx="3" />
              </svg>
              <b>{percent(locale, prime)}</b>
            </p>
          </div>
        </div>
      </div>
    </MockFrame>
  );
}
