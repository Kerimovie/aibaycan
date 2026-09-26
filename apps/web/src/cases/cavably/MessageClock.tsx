import { Fragment } from 'react';
import { cx } from '../_shared/cx';
import { ChannelIcon } from './ChannelIcon';
import type { CavablyCopy, CavChannel } from './i18n';
import './MessageClock.css';

// Port of Atlas `cases/cavably/MessageClock.astro` (entrance via the kit's `data-cine-inview`).

// Sample day: hour of each message per channel (decimal hours). Opening hours are 10:00–19:00.
const OPEN = 10;
const CLOSE = 19;
const day: { channel: CavChannel; hours: number[] }[] = [
  { channel: 'whatsapp', hours: [0.4, 1.3, 7.6, 8.5, 9.2, 9.8, 11.2, 12.6, 13.9, 15.2, 16.5, 18.3, 19.6, 20.4, 21.1, 21.8, 22.5, 23.2] },
  { channel: 'instagram', hours: [0.8, 1.9, 2.7, 8.9, 10.5, 12.9, 14.6, 17.3, 19.2, 20.7, 21.4, 22.1, 22.9, 23.67] },
  { channel: 'messenger', hours: [6.9, 11.8, 15.7, 20.9, 22.4, 23.9] },
  { channel: 'telegram', hours: [0.2, 9.4, 13.2, 18.6, 21.6, 22.8, 23.4] },
  { channel: 'web', hours: [2.2, 8.1, 10.9, 14.2, 16.9, 19.9, 21.3, 22.2] },
];
const HIGHLIGHT = { channel: 'instagram', hour: 23.67 };
const late = (h: number) => h < OPEN || h >= CLOSE;
const bucket = (h: number) => Math.min(7, Math.floor(h / 3));
const round = (n: number) => Math.round(n * 10) / 10;

// Desktop: horizontal day (x = time), one lane per channel.
const W = { x0: 150, x1: 972, top: 44, gap: 56 };
const xOf = (h: number) => round(W.x0 + (h / 24) * (W.x1 - W.x0));
const laneY = (i: number) => W.top + 30 + i * W.gap;
const bandBottom = laneY(day.length - 1) + 30;

// Mobile: vertical day (y = time), one column per channel.
const M = { x0: 70, colW: 58, y0: 58, y1: 540 };
const colX = (i: number) => M.x0 + M.colW / 2 + i * M.colW;
const yOf = (h: number) => round(M.y0 + (h / 24) * (M.y1 - M.y0));
const jitter = (i: number) => ((i * 7) % 5) * 3 - 6;
const ticks = [0, 6, 12, 18, 24];
const label = (h: number) => `${String(h).padStart(2, '0')}:00`;

export function MessageClock({ t, className }: { t: CavablyCopy; className?: string }) {
  const c = t.challenge.clock;
  return (
    <figure className={cx('cav cav-ui cav-clock', className)} data-cine-inview="">
      <figcaption className="cav-clock__head">
        <span className="cav-label">{c.title}</span>
        <span className="cav-clock__legend">
          <span>
            <i className="cav-clock__swatch" />
            {c.hours}
          </span>
          <span>
            <i className="cav-clock__dot" />
            {c.answered}
          </span>
          <span>
            <i className="cav-clock__dot" data-late="" />
            {c.waiting}
          </span>
        </span>
      </figcaption>

      <svg className="cav-clock__wide" viewBox="0 0 1000 385" role="img" aria-label={c.ariaLabel}>
        <rect
          className="cav-clock__band"
          x={xOf(OPEN)}
          y={W.top - 14}
          width={xOf(CLOSE) - xOf(OPEN)}
          height={bandBottom - W.top + 14}
          rx="10"
        />
        <text className="cav-clock__band-label" x={xOf(OPEN) + 12} y={W.top + 4}>
          {c.hours}
        </text>
        {[0, 3, 6, 9, 12, 15, 18, 21, 24].map((h) => (
          <Fragment key={h}>
            <line className="cav-clock__grid" x1={xOf(h)} x2={xOf(h)} y1={W.top + 12} y2={bandBottom} />
            {h % 6 === 0 && (
              <text className="cav-clock__tick" x={xOf(h)} y={bandBottom + 34} textAnchor="middle">
                {label(h)}
              </text>
            )}
          </Fragment>
        ))}
        {day.map((lane, i) => (
          <g key={lane.channel} data-ch={lane.channel}>
            <text className="cav-clock__name" x="0" y={laneY(i) + 5}>
              {t.channels[lane.channel]}
            </text>
            <line className="cav-clock__lane" x1={W.x0} x2={W.x1} y1={laneY(i)} y2={laneY(i)} />
            {lane.hours.map((h) => (
              <circle
                key={h}
                className={cx('cav-clock__msg', `b${bucket(h)}`)}
                data-late={late(h) ? '' : undefined}
                cx={xOf(h)}
                cy={laneY(i)}
                r="7"
              />
            ))}
          </g>
        ))}
        {day.map((lane, i) =>
          lane.channel === HIGHLIGHT.channel ? (
            <g key={lane.channel} className="cav-clock__pin">
              <circle className="cav-clock__ring" cx={xOf(HIGHLIGHT.hour)} cy={laneY(i)} r="15" />
              <line
                className="cav-clock__callout"
                x1={xOf(HIGHLIGHT.hour)}
                x2={xOf(HIGHLIGHT.hour)}
                y1={laneY(i) - 16}
                y2={W.top - 22}
              />
              <text className="cav-clock__pin-label" x={xOf(HIGHLIGHT.hour) - 8} y={W.top - 28} textAnchor="end">
                {c.highlight}
              </text>
            </g>
          ) : null,
        )}
      </svg>

      <ul className="cav-clock__heads" aria-hidden="true">
        {day.map((lane) => (
          <li key={lane.channel}>
            <ChannelIcon channel={lane.channel} chip />
          </li>
        ))}
      </ul>
      <svg className="cav-clock__tall" viewBox="0 40 370 520" role="img" aria-label={c.ariaLabel}>
        <rect
          className="cav-clock__band"
          x={M.x0 - 6}
          y={yOf(OPEN)}
          width={M.colW * day.length + 12}
          height={yOf(CLOSE) - yOf(OPEN)}
          rx="10"
        />
        {ticks.map((h) => (
          <Fragment key={h}>
            <line className="cav-clock__grid" x1={M.x0} x2={M.x0 + M.colW * day.length} y1={yOf(h)} y2={yOf(h)} />
            <text className="cav-clock__tick" x="0" y={yOf(h) + 5}>
              {label(h)}
            </text>
          </Fragment>
        ))}
        {day.map((lane, i) => (
          <g key={lane.channel} data-ch={lane.channel}>
            <line className="cav-clock__lane" x1={colX(i)} x2={colX(i)} y1={M.y0} y2={M.y1} />
            {lane.hours.map((h, k) => (
              <circle
                key={h}
                className={cx('cav-clock__msg', `b${bucket(h)}`)}
                data-late={late(h) ? '' : undefined}
                cx={colX(i) + jitter(k)}
                cy={yOf(h)}
                r="6"
              />
            ))}
            {lane.channel === HIGHLIGHT.channel && (
              <circle
                className="cav-clock__ring"
                cx={colX(i) + jitter(lane.hours.length - 1)}
                cy={yOf(HIGHLIGHT.hour)}
                r="12"
              />
            )}
          </g>
        ))}
      </svg>
    </figure>
  );
}
