import { FeatureGrid } from '../_shared/FeatureGrid';
import type { EtehsilCopy } from './i18n';
import './Schedule.css';

// October 2026 starts on a Thursday; the course runs Mon · Wed · Fri from the 5th (12 lessons this month).
const leading = 3;
const daysInMonth = 31;

function monthCells() {
  let lessonNo = 0;
  return [
    ...Array.from({ length: leading }, () => ({ day: 0, lesson: 0 })),
    ...Array.from({ length: daysInMonth }, (_, i) => {
      const day = i + 1;
      const weekday = (leading + i) % 7; // 0 = Monday
      const lesson = day >= 5 && [0, 2, 4].includes(weekday) ? ++lessonNo : 0;
      return { day, lesson };
    }),
  ];
}

/** Port of Atlas `cases/etehsil/Schedule.astro`. The scene is driven by `scenes.ts` (steps from `lg`, else a timer). */
export function Schedule({ c }: { c: EtehsilCopy['schedule'] }) {
  const s = c.screen;
  return (
    <>
      <div className="et-sched mt-14 lg:mt-20">
        <div className="et-sched__stage">
          <div
            className="et-sched__visual et-grid-paper"
            role="img"
            aria-label={s.label}
            data-et-scene=""
            data-et-drive="steps"
            data-et-phases="4"
            data-et-tempo="1200 1800 3200 5600"
            data-et-phase="3"
          >
            <div className="et-screen et-pattern">
              <p className="et-pattern__head">
                <span className="et-label">{s.patternTitle}</span>
                <span className="et-pattern__go" data-et-until="2">
                  {s.generate}
                </span>
                <span className="et-pattern__done et-chip" data-tone="ok" data-et-at="2" data-et-on="">
                  ✓ {s.generated}
                </span>
              </p>
              <dl>
                {s.fields.map((field) => (
                  <div key={field.label}>
                    <dt className="et-label">{field.label}</dt>
                    <dd data-et-at="1" data-et-on="">
                      {field.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="et-sched__panels">
              <div className="et-screen et-month">
                <p className="et-month__head">
                  <b>{s.month}</b>
                  <span className="et-chip" data-tone="info">
                    {s.newGroup}
                  </span>
                </p>
                <div className="et-month__grid">
                  {s.weekdays.map((day) => (
                    <span key={day} className="et-month__wd">
                      {day}
                    </span>
                  ))}
                  {monthCells().map((cell, i) =>
                    cell.day === 0 ? (
                      <span key={`blank-${i}`} />
                    ) : (
                      <span key={cell.day} className="et-month__day">
                        {cell.day}
                        {cell.lesson > 0 && (
                          <b data-et-at="2" data-et-on="" data-stagger={cell.lesson}>
                            {cell.lesson}
                          </b>
                        )}
                      </span>
                    ),
                  )}
                </div>
                <p className="et-month__more" data-et-at="2" data-et-on="">
                  {s.more}
                </p>
              </div>

              <div className="et-screen et-rooms">
                <p className="et-rooms__head">
                  <b>{s.boardTitle}</b>
                </p>
                <div className="et-rooms__grid">
                  <span />
                  {s.rooms.map((room, i) => (
                    <span key={room} className="et-rooms__room" data-col={i}>
                      {room}
                    </span>
                  ))}
                  {s.times.map((time, i) => (
                    <span key={time} className="et-rooms__time" data-row={i}>
                      {time}
                    </span>
                  ))}
                  {s.times.map((_, row) =>
                    s.rooms.map((__, col) => <span key={`${row}-${col}`} className="et-rooms__slot" data-col={col} data-row={row} />),
                  )}
                  {s.booked.map((lesson) => (
                    <span
                      key={lesson.group}
                      className="et-rooms__lesson"
                      data-col={lesson.room}
                      data-row={lesson.time}
                      data-room={lesson.room}
                    >
                      {lesson.group}
                    </span>
                  ))}
                  <span className="et-rooms__lesson et-rooms__new" data-col="1" data-row="1" data-room="1" data-et-at="2" data-et-on="">
                    {s.newGroup}
                  </span>
                  <span className="et-rooms__lesson et-rooms__clash" data-col="1" data-row="1" data-et-at="3" data-et-on="">
                    {s.clashGroup}
                  </span>
                  <span className="et-rooms__lesson et-rooms__moved" data-col="2" data-row="1" data-room="2" data-et-at="3" data-et-on="">
                    {s.clashGroup}
                  </span>
                </div>
                <p className="et-rooms__note" data-et-at="3" data-et-on="">
                  <span className="et-chip et-rooms__busy" data-tone="bad">
                    ✕ {s.clashMessage}
                  </span>
                  <span className="et-chip et-rooms__ok" data-tone="ok">
                    → {s.resolved}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <ol className="et-sched__steps">
          {c.steps.map((step, index) => (
            <li key={step.title} data-et-step={index + 1}>
              <span className="et-sched__no" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="et-sched__title">{step.title}</h3>
              <p className="cine-text mt-3">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>

      <FeatureGrid items={c.features} columns={4} className="mt-16 lg:mt-20" />
    </>
  );
}
