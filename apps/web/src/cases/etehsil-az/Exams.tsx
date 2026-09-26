import { FeatureGrid } from '../_shared/FeatureGrid';
import type { EtehsilCopy } from './i18n';
import './Exams.css';

// Question ids drawn from a sample bank: 4 variants × 8 visible questions, no id repeats across variants.
function questionIds(): number[][] {
  const ids: number[][] = [];
  let seed = 7;
  const used = new Set<number>();
  for (let v = 0; v < 4; v++) {
    const row: number[] = [];
    while (row.length < 8) {
      seed = (seed * 9301 + 49297) % 233280;
      const id = 100 + (seed % 600);
      if (!used.has(id)) {
        used.add(id);
        row.push(id);
      }
    }
    ids.push(row);
  }
  return ids;
}
const ids = questionIds();
const variants = ['A', 'B', 'C', 'D'];
// Score distribution (share of students per 10-point band) and difficulty mix per subject, sample data.
const histogram = [1, 2, 4, 6, 9, 12, 10, 7, 4, 2];
const mix = [
  [30, 50, 20],
  [40, 40, 20],
  [20, 50, 30],
];
const letters = ['A', 'B', 'C', 'D', 'E'];

/** Port of Atlas `cases/etehsil/Exams.astro`. */
export function Exams({ c }: { c: EtehsilCopy['exams'] }) {
  const b = c.builder;
  const k = c.taking;
  const r = c.results;
  return (
    <>
      <div className="et-exam mt-14 lg:mt-20">
        <div
          className="et-screen et-builder"
          role="img"
          aria-label={b.label}
          data-et-scene=""
          data-et-phases="8"
          data-et-tempo="2200 2200 900 700 700 700 1200 4200"
          data-et-phase="7"
        >
          <div className="et-builder__head">
            <p className="et-builder__title">{b.title}</p>
            <ol className="et-stepper">
              {b.steps.map((step, i) => (
                <li
                  key={step}
                  data-et-at={i === 0 ? undefined : String(i)}
                  data-et-until={i === 2 ? undefined : String(i + 1)}
                  data-et-on={i === 2 ? '' : undefined}
                >
                  <b>
                    <span className="et-stepper__no">{i + 1}</span>
                    {i < 2 && (
                      <span className="et-stepper__done" data-et-at={String(i + 1)} data-et-on="">
                        ✓
                      </span>
                    )}
                  </b>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <div className="et-builder__body">
            <div className="et-builder__panel" data-et-until="1">
              <p className="et-label">1 · {b.steps[0]}</p>
              <dl className="et-builder__basics">
                {b.basics.map((item) => (
                  <div key={item.label}>
                    <dt>{item.label}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="et-builder__panel" data-et-at="1" data-et-until="2">
              <p className="et-label">2 · {b.steps[1]}</p>
              <ul className="et-builder__subjects">
                {b.subjects.map((subject, i) => (
                  <li key={subject.name}>
                    <p>
                      <b>{subject.name}</b>
                      <span className="et-num">{subject.count}</span>
                    </p>
                    <small>{subject.mix}</small>
                    <span className="et-builder__mix" aria-hidden="true">
                      {(mix[i] ?? []).map((share, d) => (
                        <i key={d} data-d={d} data-share={share} />
                      ))}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="et-builder__legend">
                {b.difficulty.map((level, d) => (
                  <span key={level} data-d={d}>
                    {level}
                  </span>
                ))}
              </p>
            </div>

            <div className="et-builder__panel" data-et-at="2" data-et-on="">
              <p className="et-builder__qhead">
                <span className="et-label">3 · {b.steps[2]}</span>
                <span className="et-chip" data-tone="info">
                  ⟳ {b.autofill}
                </span>
              </p>
              <ul className="et-variants">
                {ids.map((row, v) => (
                  <li key={v}>
                    <b>
                      {b.variant} {variants[v]}
                    </b>
                    <span>
                      {row.map((id) => (
                        <i key={id} data-et-at={String(v + 2)} data-et-on="">
                          {id}
                        </i>
                      ))}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="et-builder__status">
                <span className="et-chip" data-tone="ok" data-et-at="6" data-et-on="">
                  ✓ {b.progress}
                </span>
                <span className="et-chip" data-tone="ok" data-et-at="6" data-et-on="">
                  ✓ {b.noRepeat}
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="et-exam__row">
          <div className="et-phone et-taking" role="img" aria-label={k.label}>
            <span className="et-phone__notch" />
            <div className="et-screen et-taking__screen">
              <p className="et-taking__section">{k.section}</p>
              <div className="et-taking__timer" data-et-countdown="3600">
                <svg viewBox="0 0 120 120" aria-hidden="true">
                  <circle cx="60" cy="60" r="52" pathLength={100} />
                  <circle className="et-taking__ring" cx="60" cy="60" r="52" pathLength={100} />
                </svg>
                <p>
                  <b className="et-num" data-et-clock="">
                    42:18
                  </b>
                  <span>{k.left}</span>
                </p>
              </div>
              <p className="et-taking__q">{k.question}</p>
              <ul className="et-taking__options">
                {k.options.map((option, i) => (
                  <li key={option} data-chosen={i === k.chosen ? '' : undefined}>
                    <b>{letters[i]}</b>
                    {option}
                  </li>
                ))}
              </ul>
              <p className="et-taking__flags">
                <span className="et-chip" data-tone="warn">
                  ⚠ {k.tabSwitch}
                </span>
                <span className="et-chip">{k.autoSubmit}</span>
              </p>
            </div>
          </div>

          <div className="et-screen et-results" role="img" aria-label={r.label} data-cine-inview="">
            <p className="et-results__title">{r.title}</p>
            <p className="et-results__summary">
              {r.summary.map((item) => (
                <span key={item} className="et-chip" data-tone="info">
                  {item}
                </span>
              ))}
            </p>
            <p className="et-label mt-4">{r.distribution}</p>
            <div className="et-results__hist">
              {histogram.map((value, i) => (
                <i key={i} data-h={value} data-i={i} />
              ))}
            </div>
            <p className="et-results__scale">
              {r.scale.map((mark) => (
                <span key={mark}>{mark}</span>
              ))}
            </p>
            <p className="et-label mt-5">{r.weak}</p>
            <ul className="et-results__topics">
              {r.topics.map((topic) => (
                <li key={topic.name}>
                  <span>{topic.name}</span>
                  <b className="et-num">{topic.value}%</b>
                  <i data-v={Math.round(topic.value / 5) * 5} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <FeatureGrid items={c.features} columns={4} className="mt-16 lg:mt-20" />
    </>
  );
}
