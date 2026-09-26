// "09:40 · stop classification": one sample day of a truck (weight line + state bar), the four checks and the day's
// log. `scripts/stop-timeline.ts` scrubs the playhead as the log scrolls past.
// Port of Atlas `src/components/cases/sahil-transport/StopTimeline.astro`.
import { cx } from '../_shared/cx';
import type { SahilTransportCopy } from './i18n';
import './StopTimeline.css';

// Chart runs 06:00–18:00 (720 min) in SVG user units: 1 unit = 1 minute.
const START = 6 * 60;
const minutes = (hhmm: string) => {
  const [h = 0, m = 0] = hhmm.split(':').map(Number);
  return h * 60 + m - START;
};
const DAY_START = 10; // 06:10 the truck leaves
const DAY_END = 690; // 17:30 back at the yard

// Net weight in tonnes (sample): loading finishes late in the first customer stop, unloading mid-way through the second.
const WEIGHT_TOP = 10;
const WEIGHT_BASE = 58;
const weightPoints: [number, number][] = [
  [0, 0],
  [290, 0],
  [350, 24.1],
  [530, 24.1],
  [580, 0],
  [720, 0],
];
const wy = (tonnes: number) => WEIGHT_BASE - (tonnes / 24.1) * (WEIGHT_BASE - WEIGHT_TOP);
const weightLine = weightPoints.map(([x, w], i) => `${i ? 'L' : 'M'}${x} ${wy(w)}`).join('');
const weightArea = `${weightLine}L720 ${WEIGHT_BASE}L0 ${WEIGHT_BASE}Z`;

// Check outcomes per stop, in log order (zone · trip · load · contract), used by the script to light up the checks.
const paths = [
  'fail skip skip skip',
  'pass pass load bill',
  'pass fail skip skip',
  'fail skip skip skip',
  'pass pass unload free',
];

const bar = { y: 70, h: 26 };

export function StopTimeline({ stops: s, className }: { stops: SahilTransportCopy['stops']; className?: string }) {
  const stopsInDay = s.log.map((entry, index) => ({ ...entry, index, a: minutes(entry.from), b: minutes(entry.to) }));
  const drives: { a: number; b: number }[] = [];
  let cursor = DAY_START;
  for (const stop of stopsInDay) {
    if (stop.a > cursor) drives.push({ a: cursor, b: stop.a });
    cursor = stop.b;
  }
  if (cursor < DAY_END) drives.push({ a: cursor, b: DAY_END });

  const ends = stopsInDay.map((stop) => stop.b);
  const clocks = s.log.map((entry) => entry.to);

  return (
    <div className={cx('st-stops', className)} data-st-stops="" data-ends={JSON.stringify(ends)} data-clocks={JSON.stringify(clocks)}>
      <div className="st-stops__aside">
        <div className="st-tl" data-st-timeline="">
          <div className="st-tl__head">
            <p className="st-tl__title">{s.timeline.title}</p>
            <p className="st-tl__clock cine-num" aria-hidden="true" data-st-clock="">
              {s.log[s.log.length - 1]?.to}
            </p>
          </div>
          <ul className="st-tl__legend">
            <li data-tone="drive">{s.timeline.legend.drive}</li>
            <li data-tone="waiting">{s.timeline.legend.waiting}</li>
            <li data-tone="operational">{s.timeline.legend.operational}</li>
          </ul>
          <div className="st-tl__chart" aria-hidden="true">
            <p className="st-tl__axis">
              {s.timeline.weight} · {s.timeline.weightMax}
            </p>
            <div className="st-tl__stage">
              {['base', 'live'].map((layer) => (
                <div key={layer} className={cx('st-tl__layer', `st-tl__layer--${layer}`)}>
                  <svg viewBox="0 0 720 124" preserveAspectRatio="xMidYMid meet">
                    {[120, 240, 360, 480, 600].map((x) => (
                      <line key={x} x1={x} x2={x} y1="0" y2="124" className="st-tl__grid" />
                    ))}
                    <path d={weightArea} className="st-tl__weight-area" />
                    <path d={weightLine} className="st-tl__weight" />
                    <rect x="0" y={bar.y} width="720" height={bar.h} rx="4" className="st-tl__track" />
                    {drives.map((d) => (
                      <rect key={d.a} x={d.a} y={bar.y + 9} width={d.b - d.a} height={bar.h - 18} rx="2" className="st-tl__drive" />
                    ))}
                    {stopsInDay.map((stop) => (
                      <g key={stop.index} className="st-tl__stop" data-tone={stop.tone}>
                        <rect x={stop.a} y={bar.y} width={Math.max(stop.b - stop.a, 8)} height={bar.h} rx="3" />
                        <circle cx={stop.a + Math.max(stop.b - stop.a, 8) / 2} cy="112" r="10" />
                        <text x={stop.a + Math.max(stop.b - stop.a, 8) / 2} y="116.5" textAnchor="middle">
                          {stop.index + 1}
                        </text>
                      </g>
                    ))}
                  </svg>
                </div>
              ))}
              <span className="st-tl__playhead"></span>
            </div>
            <ul className="st-tl__hours">
              {s.timeline.hours.map((hour) => (
                <li key={hour}>{hour}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="st-checks">
          <h3 className="cine-eyebrow">{s.checksTitle}</h3>
          <ol className="st-checks__list" data-st-checks="">
            {s.checks.map((check, i) => (
              <li key={check.name}>
                <span className="st-checks__mark" aria-hidden="true">
                  {i + 1}
                </span>
                <div>
                  <p className="st-checks__name">
                    {check.name}
                    <span>{check.question}</span>
                  </p>
                  <p className="st-checks__outcome">{check.outcome}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="st-log">
        <h3 className="cine-eyebrow">{s.logTitle}</h3>
        <ol className="st-log__list">
          {s.log.map((entry, i) => (
            <li key={entry.from} className="st-log__item" data-tone={entry.tone} data-st-stop={i} data-path={paths[i]}>
              <p className="st-log__time">
                <span className="st-log__no" aria-hidden="true">
                  {i + 1}
                </span>
                <b className="cine-num">
                  {entry.from}–{entry.to}
                </b>
                <span>{entry.duration}</span>
              </p>
              <dl className="st-log__checks">
                <div>
                  <dt>{s.logLabels.zone}</dt>
                  <dd>{entry.zone}</dd>
                </div>
                <div>
                  <dt>{s.logLabels.trip}</dt>
                  <dd>{entry.trip}</dd>
                </div>
                <div>
                  <dt>{s.logLabels.load}</dt>
                  <dd className="cine-num">{entry.load}</dd>
                </div>
              </dl>
              <p className="st-log__result">
                <strong>{entry.result}</strong>
                <span>{entry.reason}</span>
              </p>
            </li>
          ))}
        </ol>
        <p className="cine-note mt-8">{s.note}</p>
      </div>
    </div>
  );
}
