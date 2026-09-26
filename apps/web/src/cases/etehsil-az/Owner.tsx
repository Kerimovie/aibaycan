import { FeatureGrid } from '../_shared/FeatureGrid';
import type { EtehsilCopy } from './i18n';
import './Owner.css';

// Revenue sparkline, January to October (sample data), drawn on the server.
const revenue = [5200, 5600, 5900, 6100, 5800, 4300, 3900, 4600, 6700, 7100];
const w = 220;
const h = 56;
const min = Math.min(...revenue) - 400;
const max = Math.max(...revenue) + 200;
const points = revenue.map((v, i) => [(i / (revenue.length - 1)) * w, h - ((v - min) / (max - min)) * h] as const);
const line = points.map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`).join(' ');
const area = `${line} L${w} ${h} L0 ${h} Z`;

const format = (value: number) => `${value < 0 ? '−' : '+'}${Math.abs(value).toLocaleString('en-US').replace(/,/g, ' ')} ₼`;

/** Port of Atlas `cases/etehsil/Owner.astro`. */
export function Owner({ c }: { c: EtehsilCopy['owner'] }) {
  const d = c.dashboard;
  const p = c.pnl;
  const pay = c.payroll;

  // Waterfall: every row starts where the previous one ended; the net bar starts at zero.
  let running = 0;
  const steps = p.rows.map((row) => {
    const from = running;
    running += row.value;
    return { ...row, from, to: running };
  });
  const top = Math.max(...steps.map((s) => Math.max(s.from, s.to)));
  const bars = [
    ...steps.map((s) => ({
      label: s.label,
      value: format(s.value),
      x: (Math.min(s.from, s.to) / top) * 100,
      width: (Math.abs(s.value) / top) * 100,
      tone: s.value >= 0 ? 'in' : 'out',
    })),
    { label: p.net, value: `${running.toLocaleString('en-US').replace(/,/g, ' ')} ₼`, x: 0, width: (running / top) * 100, tone: 'net' },
  ];

  // Payroll: row i is approved at phase 2i+1 and accepted at 2i+2; the last row stops at approved.
  const payPhases = pay.rows.length * 2;

  return (
    <>
      <div className="et-own mt-14 lg:mt-20">
        <div className="et-screen et-dash" role="img" aria-label={d.label} data-cine-inview="">
          <div className="et-chrome">
            <i />
            <i />
            <i />
            <span>etehsil.az</span>
          </div>
          <div className="et-dash__body">
            <div className="et-dash__head">
              <p className="et-dash__title">{d.title}</p>
              <p className="et-dash__periods">
                {d.periods.map((period, i) => (
                  <span key={period} data-active={i === 0 ? '' : undefined}>
                    {period}
                  </span>
                ))}
              </p>
            </div>
            <div className="et-dash__grid">
              <div className="et-dash__tile et-dash__tile--revenue">
                <p className="et-label">{d.revenue.label}</p>
                <p className="et-dash__value et-num">{d.revenue.value}</p>
                <p className="et-chip" data-tone="ok">
                  ↑ {d.revenue.meta}
                </p>
                <svg className="et-dash__spark" viewBox={`0 -4 ${w} ${h + 8}`} preserveAspectRatio="none" aria-hidden="true">
                  <path className="et-dash__area" d={area} />
                  <path className="et-dash__line" d={line} />
                </svg>
              </div>
              <div className="et-dash__tile">
                <p className="et-label">{d.debt.label}</p>
                <p className="et-dash__value et-num" data-tone="bad">
                  {d.debt.value}
                </p>
                <p className="et-dash__meta">{d.debt.meta}</p>
              </div>
              <div className="et-dash__tile">
                <p className="et-label">{d.risk.label}</p>
                <p className="et-dash__value et-num" data-tone="warn">
                  {d.risk.value}
                </p>
                <p className="et-dash__meta">{d.risk.meta}</p>
              </div>
              {d.gauges.map((gauge, i) => (
                <div key={gauge.label} className="et-dash__tile et-dash__gauge" data-g={i}>
                  <svg viewBox="0 0 64 64" aria-hidden="true">
                    <circle cx="32" cy="32" r="26" pathLength={100} />
                    <circle className="et-dash__arc" cx="32" cy="32" r="26" pathLength={100} strokeDasharray={`${gauge.value} 100`} />
                  </svg>
                  <p>
                    <span className="et-label">{gauge.label}</span>
                    <b className="et-num">{gauge.value}%</b>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="et-own__row">
          <div className="et-screen et-pnl" role="img" aria-label={p.label} data-cine-inview="">
            <p className="et-pnl__title">{p.title}</p>
            <ul>
              {bars.map((bar) => (
                <li key={bar.label} data-tone={bar.tone}>
                  <span className="et-pnl__label">{bar.label}</span>
                  <svg viewBox="0 0 100 10" preserveAspectRatio="none" aria-hidden="true">
                    <rect x={bar.x.toFixed(2)} y="0" width={Math.max(bar.width, 0.6).toFixed(2)} height="10" rx="1" />
                  </svg>
                  <b className="et-num">{bar.value}</b>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="et-screen et-payroll"
            role="img"
            aria-label={pay.label}
            data-et-scene=""
            data-et-phases={payPhases}
            data-et-tempo="1700 1200 1500 1200 1500 4400"
            data-et-phase={payPhases - 1}
          >
            <p className="et-payroll__title">{pay.title}</p>
            <div className="et-payroll__table">
              <p className="et-payroll__cols">
                {pay.columns.map((col) => (
                  <span key={col}>{col}</span>
                ))}
              </p>
              {pay.rows.map((row, i) => {
                const approvedAt = 2 * i + 1;
                const acceptedAt = 2 * i + 2;
                const last = i === pay.rows.length - 1;
                return (
                  <div key={row.name} className="et-payroll__row">
                    <b>{row.name}</b>
                    <span className="et-num">{row.groups}</span>
                    <span className="et-num">{row.lessons}</span>
                    <b className="et-num">{row.amount}</b>
                    <span className="et-payroll__status">
                      <span className="et-payroll__pending" data-et-until={String(approvedAt)}>
                        <span className="et-button">{pay.approve}</span>
                      </span>
                      <span
                        className="et-chip"
                        data-tone="info"
                        data-et-at={String(approvedAt)}
                        data-et-until={last ? undefined : String(acceptedAt)}
                        data-et-on={last ? '' : undefined}
                      >
                        {pay.approved}
                      </span>
                      {!last && (
                        <span className="et-chip" data-tone="ok" data-et-at={String(acceptedAt)} data-et-on="">
                          ✓ {pay.accepted}
                        </span>
                      )}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <FeatureGrid items={c.features} columns={4} className="mt-16 lg:mt-20" />
    </>
  );
}
