// "11:40 · demurrage": a 4-hour dial with the free-time and excess arcs, the stop's event log and the fee receipt.
// `scripts/waiting-clock.ts` sweeps the hand while the scene is on screen; the markup is the final frame.
// Port of Atlas `src/components/cases/sahil-transport/WaitingClock.astro`.
import { cx } from '../_shared/cx';
import type { SahilTransportCopy } from './i18n';
import './WaitingClock.css';

// Dial = 4 hours (1 minute = 1.5°). Sample stop: free time 120 min, 145 min in the zone.
const toMinutes = (hhmm: string) => {
  const [h = 0, m = 0] = hhmm.split(':').map(Number);
  return h * 60 + m;
};
const R = 142;
const C = 2 * Math.PI * R;
const arc = (from: number, to: number) => {
  const length = (C * Math.max(0, to - from)) / 240;
  return { dash: `${length.toFixed(2)} ${C.toFixed(2)}`, rotate: -90 + from * 1.5 };
};
const ticks = Array.from({ length: 48 }, (_, i) => i * 5);
// Hour labels sit outside the ring (top, right, bottom, left), so they never collide with the readout.
const labelSpots = [
  { x: 180, y: 12, anchor: 'middle' },
  { x: 348, y: 184, anchor: 'start' },
  { x: 180, y: 362, anchor: 'middle' },
  { x: 12, y: 184, anchor: 'end' },
] as const;

export function WaitingClock({ waiting: w, className }: { waiting: SahilTransportCopy['waiting']; className?: string }) {
  const t0 = toMinutes(w.events[0]?.time ?? '0:00');
  const events = w.events.map((event) => ({ ...event, at: toMinutes(event.time) - t0 }));
  const last = events[events.length - 1];
  const TOTAL = last?.at ?? 0;
  // The free time ends at the event flagged `bad` (fee starts running).
  const FREE = (events.find((event) => event.tone === 'bad') ?? last)?.at ?? 0;
  const free = arc(0, Math.min(TOTAL, FREE));
  const over = arc(FREE, TOTAL);
  const hourLabels = w.clock.hours.slice(0, 4).flatMap((label, i) => {
    const spot = labelSpots[i];
    return spot ? [{ label, ...spot }] : [];
  });

  return (
    <div
      className={cx('st-wait', className)}
      data-st-wait=""
      data-total={TOTAL}
      data-free={FREE}
      data-events={JSON.stringify(events.map((event) => event.at))}
      data-phase="done"
    >
      <div className="st-wait__dial-col">
        <div className="st-wait__dial">
          <svg viewBox="-60 -4 480 372" aria-hidden="true">
            <circle cx="180" cy="180" r={R} className="st-wait__track"></circle>
            {ticks.map((minute) => (
              <line
                key={minute}
                x1="180"
                y1={minute % 60 === 0 ? 20 : minute % 30 === 0 ? 24 : 28}
                x2="180"
                y2="34"
                transform={`rotate(${minute * 1.5} 180 180)`}
                className={cx('st-wait__tick', minute % 60 === 0 && 'st-wait__tick--hour')}
              />
            ))}
            {hourLabels.map((hour) => (
              <text key={hour.label} x={hour.x} y={hour.y} textAnchor={hour.anchor} className="st-wait__hour">
                {hour.label}
              </text>
            ))}
            <circle
              cx="180"
              cy="180"
              r={R}
              className="st-wait__free"
              strokeDasharray={free.dash}
              transform={`rotate(${free.rotate} 180 180)`}
              data-st-arc="free"
              data-rotate={free.rotate}
            ></circle>
            <circle
              cx="180"
              cy="180"
              r={R}
              className="st-wait__over"
              strokeDasharray={over.dash}
              transform={`rotate(${over.rotate} 180 180)`}
              data-st-arc="over"
              data-rotate={over.rotate}
            ></circle>
            <g className="st-wait__hand" transform={`rotate(${TOTAL * 1.5} 180 180)`} data-st-hand="">
              <line x1="180" y1="22" x2="180" y2="92"></line>
              <circle cx="180" cy="92" r="5"></circle>
            </g>
          </svg>
          <div className="st-wait__readout" aria-hidden="true">
            <p className="st-wait__elapsed cine-num" data-st-elapsed="">
              {w.clock.elapsed}
            </p>
            <p className="st-wait__in">{w.clock.inZone}</p>
          </div>
        </div>
        <dl className="st-wait__split">
          <div data-kind="free">
            <dt>{w.clock.free}</dt>
            <dd className="cine-num">{w.clock.freeValue}</dd>
          </div>
          <div data-kind="over">
            <dt>{w.clock.excess}</dt>
            <dd className="cine-num">{w.clock.excessValue}</dd>
          </div>
        </dl>
      </div>

      <div className="st-wait__story">
        <h3 className="cine-eyebrow">{w.eventsTitle}</h3>
        <ol className="st-wait__events">
          {events.map((event) => (
            <li key={event.time} data-tone={event.tone} data-st-event="">
              <b className="cine-num">{event.time}</b>
              <span>{event.text}</span>
            </li>
          ))}
        </ol>

        <div className="st-receipt">
          <p className="st-receipt__head">
            <span>{w.receipt.title}</span>
            <span>{w.receipt.code}</span>
          </p>
          <dl className="st-receipt__rows">
            {w.receipt.rows.map((row) => (
              <div key={row.label}>
                <dt>{row.label}</dt>
                <dd className="cine-num">{row.value}</dd>
              </div>
            ))}
          </dl>
          <p className="st-receipt__total">
            <span>{w.receipt.totalLabel}</span>
            <b className="cine-num">{w.receipt.total}</b>
          </p>
          <p className="st-receipt__evidence">{w.receipt.evidence}</p>
        </div>
      </div>
    </div>
  );
}
