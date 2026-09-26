import { Fragment } from 'react';
import type { EtehsilCopy } from './i18n';
import './HeroVisual.css';

// Week timetable of the sample centre: [day, time slot, group index, room index]. Wednesday matches the schedule chapter.
const lessons: [number, number, number, number][] = [
  [0, 0, 0, 0],
  [0, 1, 1, 1],
  [0, 3, 3, 0],
  [0, 4, 6, 1],
  [1, 0, 5, 1],
  [1, 2, 2, 2],
  [1, 4, 4, 2],
  [2, 0, 0, 0],
  [2, 1, 1, 1],
  [2, 1, 2, 2],
  [2, 2, 6, 0],
  [2, 2, 5, 2],
  [2, 4, 4, 2],
  [3, 0, 5, 1],
  [3, 2, 2, 2],
  [3, 3, 3, 0],
  [4, 0, 0, 0],
  [4, 1, 1, 1],
  [4, 3, 3, 0],
];

// The display face draws ₼ oddly; the sign is set in the UI face instead.
const money = (value: string) => value.replace(/\s*₼\s*/, '');

/** Port of Atlas `cases/etehsil/HeroVisual.astro`. */
export function HeroVisual({ t }: { t: EtehsilCopy }) {
  const s = t.heroScreen;
  const cells = s.times.map((time, slot) => ({
    time,
    days: s.days.map((_, day) => lessons.filter(([d, sl]) => d === day && sl === slot)),
  }));
  let order = 0;
  const toastCount = s.toasts.length + 1;

  return (
    <div
      className="et-hero"
      role="img"
      aria-label={s.label}
      data-et-scene=""
      data-et-phases={toastCount}
      data-et-tempo="2800"
      data-et-phase={toastCount - 1}
    >
      <div className="et-hero__window et-screen">
        <div className="et-chrome">
          <i />
          <i />
          <i />
          <span>{s.url}</span>
        </div>
        <div className="et-hero__app">
          <div className="et-hero__side">
            <p className="et-hero__logo">
              <b>e</b>Təhsil
            </p>
            <ul>
              {s.nav.map((item, i) => (
                <li key={item} data-active={i === 1 ? '' : undefined}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="et-hero__main">
            <div className="et-hero__bar">
              <b>{s.centre}</b>
              <span className="et-chip" data-tone="info">
                {s.view}
              </span>
              <span className="et-hero__rooms">
                {s.rooms.map((room, i) => (
                  <span key={room} data-room={i}>
                    <i />
                    {room}
                  </span>
                ))}
              </span>
            </div>
            <div className="et-week">
              <span />
              {s.days.map((day, i) => (
                <span key={day} className="et-week__day" data-day={i}>
                  {day}
                </span>
              ))}
              {cells.map((row) => (
                <Fragment key={row.time}>
                  <span className="et-week__time">{row.time}</span>
                  {row.days.map((items, day) => (
                    <span key={day} className="et-week__cell" data-day={day}>
                      {items.map(([, , group, room]) => (
                        <span key={group} className="et-week__lesson" data-room={room} data-order={order++ % 8}>
                          {s.groups[group]}
                        </span>
                      ))}
                    </span>
                  ))}
                </Fragment>
              ))}
              <span className="et-week__now">
                <b>{s.now}</b>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="et-hero__sat et-hero__sat--debt">
        <p className="et-label">{s.debt.label}</p>
        <p className="et-hero__value et-num">
          {money(s.debt.value)}
          <small>₼</small>
        </p>
        <p className="et-hero__meta">{s.debt.meta}</p>
        <span className="et-hero__bar-mini">
          <i />
        </span>
      </div>
      <div className="et-hero__sat et-hero__sat--exam">
        <svg viewBox="0 0 44 44" aria-hidden="true">
          <circle cx="22" cy="22" r="18" pathLength={100} />
          <circle className="et-hero__ring" cx="22" cy="22" r="18" pathLength={100} />
        </svg>
        <div>
          <p className="et-label">{s.exam.label}</p>
          <p className="et-hero__value et-num">{s.exam.value}</p>
          <p className="et-hero__meta">{s.exam.meta}</p>
        </div>
      </div>

      <ol className="et-hero__toasts">
        <li className="et-toast" data-toast="0">
          <i data-tone="ok">✓</i>
          <span>
            <b>{s.attendance.label}</b>
            {s.attendance.meta} · {s.attendance.value}
          </span>
        </li>
        {s.toasts.map((toast, i) => (
          <li key={toast} className="et-toast" data-toast={i + 1}>
            <i data-tone={i === 0 ? 'warn' : 'info'}>{i === 0 ? '!' : '✓'}</i>
            <span>{toast}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
