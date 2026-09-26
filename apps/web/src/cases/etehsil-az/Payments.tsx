import { FeatureGrid } from '../_shared/FeatureGrid';
import type { EtehsilCopy } from './i18n';
import './Payments.css';

// Phases: 1–3 select the three latest payers · 4–6 reminders go out · 7 the fourth student pays at the desk.
const paidRow = 3;

/** Port of Atlas `cases/etehsil/Payments.astro`. */
export function Payments({ c }: { c: EtehsilCopy['payments'] }) {
  const s = c.screen;
  return (
    <>
      <div className="et-pay mt-14 lg:mt-20" data-et-scene="" data-et-phases="9" data-et-tempo="1200 800 800 1000 1100 900 900 1500 4200" data-et-phase="8">
        <div className="et-screen et-desk-screen" role="img" aria-label={s.label}>
          <div className="et-chrome">
            <i />
            <i />
            <i />
            <span>etehsil.az</span>
          </div>
          <div className="et-desk-screen__body">
            <p className="et-desk-screen__title">{s.title}</p>
            <div className="et-desk-screen__kpis">
              {s.kpis.map((kpi, i) => (
                <p key={kpi.label} data-kpi={i}>
                  <span className="et-label">{kpi.label}</span>
                  <b className="et-num">
                    <span data-et-until="7">{kpi.before}</span>
                    <span data-et-at="7" data-et-on="">
                      {kpi.after}
                    </span>
                  </b>
                  <small>{kpi.meta}</small>
                </p>
              ))}
            </div>
            <p className="et-desk-screen__filters">
              {s.filters.map((filter, i) => (
                <span key={filter} data-active={i === 0 ? '' : undefined}>
                  {filter}
                </span>
              ))}
            </p>
            <ul className="et-desk-screen__rows">
              {s.rows.map((row, i) => (
                <li key={row.name}>
                  <span className="et-check" data-et-at={i < 3 ? String(i + 1) : undefined} data-et-on={i < 3 ? '' : undefined} />
                  <span className="et-desk-screen__who">
                    <b>{row.name}</b>
                    <small>{row.group}</small>
                  </span>
                  {i === paidRow ? (
                    <span className="et-desk-screen__state">
                      <span className="et-chip" data-tone="warn" data-et-until="7">
                        {row.late}
                      </span>
                      <span className="et-chip" data-tone="ok" data-et-at="7" data-et-on="">
                        ✓ {s.paidUp} · {s.receipt}
                      </span>
                    </span>
                  ) : (
                    <span className="et-desk-screen__state">
                      <span className="et-chip" data-tone="bad">
                        {row.late}
                      </span>
                    </span>
                  )}
                  <span className="et-desk-screen__amount et-num">{row.amount}</span>
                </li>
              ))}
            </ul>
            <p className="et-desk-screen__bar" data-et-at="3" data-et-on="">
              <span>{s.selected}</span>
              <span className="et-button" data-et-at="4" data-et-on="">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4 20l1.3-3.9A8 8 0 1 1 8 19.1z" />
                </svg>
                {s.remind}
              </span>
            </p>
          </div>
        </div>

        <div className="et-wa" role="img" aria-label={c.chat.label}>
          <p className="et-wa__head">
            <i />
            {c.chat.title}
          </p>
          <ul>
            {c.chat.messages.map((message, i) => (
              <li key={message.to} data-et-at={String(i + 4)} data-et-on="">
                <b>{message.to}</b>
                {message.text}
                <small>10:{String(12 + i).padStart(2, '0')} ✓✓</small>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <FeatureGrid items={c.features} columns={4} className="mt-16 lg:mt-20" />
    </>
  );
}
