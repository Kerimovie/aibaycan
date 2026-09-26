// "06:00 · the fleet in real time": dispatcher dashboard mockup (status tiles, truck cards, status ring, data
// freshness, attention queue). `scripts/ticker.ts` makes the timers, speeds and GPS age tick.
// Port of Atlas `src/components/cases/sahil-transport/FleetDashboard.astro`.
import { cx } from '../_shared/cx';
import { MockFrame } from '../_shared/MockFrame';
import type { SahilTransportCopy } from './i18n';
import './FleetDashboard.css';

const pin = 'M12 21s-6-5.2-6-10a6 6 0 0 1 12 0c0 4.8-6 10-6 10Zm0-8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z';

// "Customer · 1:12" → the trailing h:mm ticks.
const splitTimer = (status: string) => {
  const match = status.match(/^(.*?)(\d+):(\d{2})$/);
  return match ? { prefix: match[1] ?? '', minutes: Number(match[2]) * 60 + Number(match[3]) } : null;
};

export function FleetDashboard({ screen: s, className }: { screen: SahilTransportCopy['fleet']['screen']; className?: string }) {
  const total = s.tiles.reduce((sum, tile) => sum + Number(tile.value), 0) || 1;
  const share = (value: string) => Math.round((Number(value) / total) * 100);
  // Ring stops are fixed classes (no inline styles under the CSP): widths come from the sample data in 5% steps.
  const step = (value: string) => Math.max(1, Math.round(share(value) / 5));

  return (
    <MockFrame title={s.title} label={s.label} className={cx('st-dash-frame', className)}>
      <div className="st-dash" data-st-ticker="">
        <div className="st-dash__tiles">
          {s.tiles.map((tile) => (
            <div key={tile.tone} className="st-dash__tile" data-tone={tile.tone}>
              <p className="st-dash__tile-label">
                <i />
                {tile.label}
              </p>
              <p className="st-dash__tile-value cine-num">{tile.value}</p>
              <span className="st-dash__bar" data-w={step(tile.value)} />
            </div>
          ))}
        </div>

        <div className="st-dash__main">
          <div className="st-dash__cards">
            {s.cards.map((card) => {
              const timer = splitTimer(card.status);
              return (
                <div key={card.plate} className="st-dash__card" data-tone={card.tone}>
                  <div className="st-dash__card-head">
                    <span className="st-plate">{card.plate}</span>
                    <span className="st-dash__status">
                      {timer ? (
                        <>
                          {timer.prefix}
                          <span data-st-timer={timer.minutes}>{card.status.slice(timer.prefix.length)}</span>
                        </>
                      ) : (
                        card.status
                      )}
                    </span>
                  </div>
                  <p className="st-dash__driver">{card.driver}</p>
                  <p className="st-dash__place">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d={pin} />
                    </svg>
                    <span>{card.place}</span>
                  </p>
                  <dl className="st-dash__metrics">
                    <div>
                      <dt>{s.cardLabels.speed}</dt>
                      <dd className="cine-num" data-st-jitter={card.tone === 'moving' ? '' : undefined}>
                        {card.speed}
                      </dd>
                    </div>
                    <div>
                      <dt>{s.cardLabels.fuel}</dt>
                      <dd className="cine-num">{card.fuel}</dd>
                    </div>
                    <div>
                      <dt>{s.cardLabels.load}</dt>
                      <dd className="cine-num">{card.load}</dd>
                    </div>
                  </dl>
                </div>
              );
            })}
          </div>

          <div className="st-dash__side">
            <div className="st-dash__panel st-dash__ring-panel">
              <p className="st-dash__panel-title">{s.ring.title}</p>
              <div className="st-dash__ring-row">
                <div className="st-dash__ring">
                  <p>
                    <b className="cine-num">{s.ring.total}</b>
                    <span>{s.ring.unit}</span>
                  </p>
                </div>
                <ul className="st-dash__ring-legend">
                  {s.tiles.map((tile) => (
                    <li key={tile.tone} data-tone={tile.tone}>
                      <i />
                      <span className="cine-num">{share(tile.value)}%</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="st-dash__panel st-dash__fresh">
              <p className="st-dash__panel-title">{s.freshness.title}</p>
              <ul>
                {s.freshness.items.map((item, i) => (
                  <li key={item.source} data-tone={item.tone}>
                    <i />
                    <span>{item.source}</span>
                    <b className="cine-num" data-st-age={i === 0 ? '' : undefined}>
                      {item.value}
                    </b>
                  </li>
                ))}
              </ul>
            </div>
            <div className="st-dash__panel st-dash__attention">
              <p className="st-dash__panel-title">
                {s.attention.title}
                <span className="cine-num">{s.attention.items.length}</span>
              </p>
              <ul>
                {s.attention.items.map((item) => (
                  <li key={item.plate} data-tone={item.tone}>
                    <span className="st-plate st-plate--sm">{item.plate}</span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </MockFrame>
  );
}
