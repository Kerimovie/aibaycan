import { cx } from '../_shared/cx';
import type { Locale } from '../types';
import { activeBand, bands, logRows, marginRules, previewRows } from './data';
import type { MolecionCopy } from './i18n';
import { formatDay } from './scripts/format';
import './PricingScene.css';

/**
 * Port of Atlas `cases/molecion/PricingScene.astro`.
 * Cost becomes price: the chain from a dollar cost to a shelf price with every figure masked, the contest
 * between margin rules of different specificity, cost bands drawn without values, the live preview with its
 * deliberate Save-vs-Apply split, and the history behind every price that moved. The chain is played by
 * `scripts/pricing.ts`.
 */
export function PricingScene({ t, locale, className }: { t: MolecionCopy; locale: Locale; className?: string }) {
  const p = t.pricing;
  const s = t.samples;
  const rule = p.rule;
  const cond = rule.conditions;
  const preview = p.preview;
  const log = p.log;
  const lastStep = p.chain.steps.length - 1;

  const ruleRows = marginRules.map((candidate, i) => ({
    conditions: [
      { label: cond.house, value: candidate.house ? rule.example.house : cond.any, on: candidate.house },
      { label: cond.size, value: candidate.size ? rule.example.size : cond.any, on: candidate.size },
      { label: cond.band, value: candidate.band ? rule.example.band : cond.any, on: candidate.band },
    ],
    count: Number(candidate.house) + Number(candidate.size) + Number(candidate.band),
    winner: i === 0,
  }));

  /** The preview's rule column: the conditions that rule fixes, or "any" for the catalogue-wide fallback. */
  const ruleSummary = (index: number) => {
    const candidate = marginRules[index];
    if (!candidate) return cond.any;
    const parts = [candidate.house && cond.house, candidate.size && cond.size, candidate.band && cond.band].filter(Boolean);
    return parts.length ? parts.join(' · ') : cond.any;
  };

  return (
    <div className={cx('mo-price', className)}>
      {/* ---------- The chain ---------- */}
      <section className="mo-price__block" aria-labelledby="mo-chain-title">
        <h3 id="mo-chain-title" className="mo-price__h3">
          {p.chain.title}
        </h3>
        <ol className="mo-price__chain" aria-label={p.chain.ariaLabel} data-mo-chain="">
          {p.chain.steps.map((step, i) => (
            <li key={step.label} data-step={i + 1} data-final={i === lastStep ? '' : undefined}>
              <p className="mo-price__step-head">
                <span className="mo-label">{step.label}</span> <span className="mo-price__unit">{step.unit}</span>
              </p>
              <p className="mo-price__value mo-mask">
                {step.value}
                {i === lastStep && (
                  <>
                    {' '}
                    <svg
                      className="mo-price__seal"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path d="M7 11V8a5 5 0 0 1 10 0v3"></path>
                      <rect x="5" y="11" width="14" height="9" rx="2"></rect>
                    </svg>
                  </>
                )}
              </p>
              <p className="mo-price__step-text">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ---------- The most specific rule wins + the cost bands ---------- */}
      <div className="mo-price__split">
        <section className="mo-price__block" aria-labelledby="mo-rule-title">
          <h3 id="mo-rule-title" className="mo-price__h3">
            {rule.title}
          </h3>
          <p className="cine-text mo-price__lead">{rule.text}</p>
          <ol className="mo-price__rules" aria-label={rule.ariaLabel}>
            {ruleRows.map((row) => (
              <li key={row.count} data-winner={row.winner ? '' : undefined} data-rank={row.count}>
                <span className="mo-price__ladder" aria-hidden="true">
                  {[0, 1, 2].map((slot) => (
                    <i key={slot} data-on={slot < row.count ? '' : undefined} />
                  ))}
                </span>
                <p className="mo-price__rule-head">
                  <span className="mo-chip" data-tone={row.winner ? 'accent' : undefined}>
                    {row.winner ? rule.winner : rule.loser}
                  </span>{' '}
                  <span className="mo-price__spec">
                    <span className="mo-label">{rule.specificity}</span> <b className="mo-price__count">{`${row.count}/3`}</b>{' '}
                    <span className="mo-price__dots" aria-hidden="true">
                      {[0, 1, 2].map((slot) => (
                        <i key={slot} data-on={slot < row.count ? '' : undefined} />
                      ))}
                    </span>
                  </span>
                </p>
                <ul className="mo-price__conds">
                  {row.conditions.map((condition) => (
                    <li key={condition.label} data-on={condition.on ? '' : undefined}>
                      <span className="mo-label">{condition.label}</span> <b>{condition.value}</b>
                    </li>
                  ))}
                </ul>
                <p className="mo-price__rule-margin">
                  <span className="mo-label">{p.chain.steps[4]?.label}</span> <b className="mo-mask">{rule.example.margin}</b>
                </p>
              </li>
            ))}
          </ol>
          <p className="cine-note mo-price__fallback">{rule.fallback}</p>
        </section>

        <section className="mo-price__block" aria-labelledby="mo-bands-title">
          <h3 id="mo-bands-title" className="mo-price__h3">
            {p.brackets.title}
          </h3>
          <div className="mo-panel mo-price__bands" role="img" aria-label={p.brackets.ariaLabel}>
            <ol className="mo-price__bandlist">
              {bands.map((band, i) => (
                <li key={i} data-active={i === activeBand ? '' : undefined}>
                  <span className="mo-label">{`${p.brackets.bandLabel} ${String(i + 1).padStart(2, '0')}`}</span>{' '}
                  <span className="mo-bar">
                    <i data-w={band.w} />
                  </span>
                  {i === activeBand && (
                    <>
                      {' '}
                      <span className="mo-price__landed">
                        <span aria-hidden="true">▲</span> {p.brackets.landed}
                      </span>
                    </>
                  )}
                </li>
              ))}
            </ol>
          </div>
          <p className="cine-note mo-price__bandnote">{p.brackets.note}</p>
        </section>
      </div>

      {/* ---------- Preview, then apply ---------- */}
      <section className="mo-price__block" aria-labelledby="mo-preview-title">
        <h3 id="mo-preview-title" className="mo-price__h3">
          {preview.title}
        </h3>
        <p className="cine-text mo-price__lead">{preview.text}</p>
        <div className="mo-sheet mo-price__preview" role="img" aria-label={preview.ariaLabel}>
          <div className="mo-sheet__head">
            <span className="mo-sheet__title">{preview.title}</span> <span className="mo-sheet__sub">{t.sampleDataLabel}</span>
          </div>
          <table className="mo-table mo-price__table">
            <thead>
              <tr>
                <th scope="col">{preview.columns.fragrance}</th>
                <th scope="col">{preview.columns.size}</th>
                <th scope="col">{preview.columns.cost}</th>
                <th scope="col">{preview.columns.rule}</th>
                <th scope="col">{preview.columns.delta}</th>
                <th scope="col">{preview.columns.shelf}</th>
              </tr>
            </thead>
            <tbody>
              {previewRows.map((row) => (
                <tr key={`${row.fragrance}-${row.size}`}>
                  <td data-label={preview.columns.fragrance}>
                    {' '}
                    <b>{s.fragrances[row.fragrance]}</b>{' '}
                    <span className="mo-price__house" lang="en">
                      {s.houses[row.house]}
                    </span>
                  </td>
                  <td data-label={preview.columns.size}>{s.sizes[row.size]}</td>
                  <td data-label={preview.columns.cost}>
                    {' '}
                    <span className="mo-mask">{s.masked}</span>
                  </td>
                  <td data-label={preview.columns.rule} className="mo-price__rulecell">
                    {' '}
                    {ruleSummary(row.rule)}
                  </td>
                  <td data-label={preview.columns.delta} className="mo-price__delta">
                    {' '}
                    <span className="mo-price__arrow" data-tone={row.move} aria-hidden="true">
                      {row.move === 'up' ? '▲' : '▼'}
                    </span>{' '}
                    <span className="mo-mask" data-tone={row.move}>
                      {s.masked}
                    </span>
                  </td>
                  <td data-label={preview.columns.shelf}>
                    {' '}
                    <span className="mo-mask" data-weight="payoff">
                      {s.masked}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mo-price__bar">
            <p className="mo-price__action">
              <span className="mo-btn" data-tone="ghost">
                {preview.save}
              </span>{' '}
              <small>{preview.saveNote}</small>
            </p>
            <p className="mo-price__action">
              <span className="mo-btn" data-tone="gold">
                {preview.apply}
              </span>{' '}
              <small>{preview.applyNote}</small>
            </p>
          </div>
        </div>
        <p className="mo-price__why">{preview.why}</p>
      </section>

      {/* ---------- Every price has a history ---------- */}
      <section className="mo-price__block mo-price__logblock" aria-labelledby="mo-log-title">
        <div className="mo-price__logcopy">
          <h3 id="mo-log-title" className="mo-price__h3">
            {log.title}
          </h3>
          <p className="cine-text mo-price__lead">{log.text}</p>
        </div>
        <div className="mo-panel mo-price__log">
          <table className="mo-table mo-price__logtable">
            <thead>
              <tr>
                <th scope="col">{log.columns.when}</th>
                <th scope="col">{log.columns.fragrance}</th>
                <th scope="col">{log.columns.from}</th>
                <th scope="col">{log.columns.to}</th>
                <th scope="col">{log.columns.reason}</th>
              </tr>
            </thead>
            <tbody>
              {logRows.map((row) => (
                <tr key={`${row.day}-${row.fragrance}-${row.size}`}>
                  <td data-label={log.columns.when} className="mo-mono">
                    {' '}
                    {formatDay(row.day, locale)}
                  </td>
                  <td data-label={log.columns.fragrance}>
                    {' '}
                    <b>{s.fragrances[row.fragrance]}</b> <span className="mo-price__house">{s.sizes[row.size]}</span>
                  </td>
                  <td data-label={log.columns.from}>
                    {' '}
                    <span className="mo-mask">{s.masked}</span>
                  </td>
                  <td data-label={log.columns.to}>
                    {' '}
                    <span className="mo-mask" data-tone={row.move}>
                      {s.masked}
                    </span>
                  </td>
                  <td data-label={log.columns.reason}>{log.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
