import { cx } from '../_shared/cx';
import { newRuleIndex } from './data';
import type { MolecionCopy } from './i18n';
import './RulesScene.css';

/**
 * Port of Atlas `cases/molecion/RulesScene.astro`.
 * The importer that learns: an unreadable line, the four ways to resolve it, and the stored rules it becomes —
 * each with a counter of the lines it has caught since. Counters tick up once the panel comes into view
 * (`scripts/rules.ts`).
 */
export function RulesScene({ t, className }: { t: MolecionCopy; className?: string }) {
  const panel = t.rules.panel;
  const cols = panel.columns;
  const s = t.samples;
  const actions = [panel.actions.fix, panel.actions.link, panel.actions.skip, panel.actions.undo];

  return (
    <div className={cx('mo-rules', className)}>
      <div className="mo-rules__fix" data-cine-inview="">
        <div className="mo-panel mo-rules__unmatched">
          <div className="mo-panel__body">
            <p className="mo-label" data-tone="accent">
              {t.review.screen.flags.decision}
            </p>
            <p className="mo-rules__unmatched-line mo-line">{s.rows.vitrineTester}</p>
            <ul className="mo-rules__actions">
              {actions.map((action, i) => (
                <li key={action} className="mo-chip" data-tone={i === 0 ? 'accent' : undefined}>
                  {action}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mo-rules__arrow" aria-hidden="true">
          ↓
        </p>
      </div>

      <div className="mo-panel mo-rules__panel" role="img" aria-label={panel.ariaLabel} data-mo-rules="">
        <div className="mo-panel__head">
          <span className="mo-panel__title">{panel.title}</span> <span className="mo-label">{t.sampleDataLabel}</span>
        </div>
        <div className="mo-rules__table-wrap">
          <table className="mo-table mo-rules__table">
            <thead>
              <tr>
                <th scope="col">{cols.rule}</th>
                <th scope="col">{cols.target}</th>
                <th scope="col">{cols.hits}</th>
              </tr>
            </thead>
            <tbody>
              {panel.types.map((type, i) => (
                <tr key={type.label} data-new={i === newRuleIndex ? '' : undefined}>
                  <td data-label={cols.rule}>
                    {' '}
                    <span className="mo-rules__kind mo-label">{type.label}</span>{' '}
                    <span className="mo-line mo-rules__source">{type.source}</span>{' '}
                    <span className="mo-rules__why">{type.text}</span>
                  </td>
                  <td data-label={cols.target}>
                    {' '}
                    <b>{type.target}</b>
                  </td>
                  <td data-label={cols.hits} className="mo-rules__hits">
                    {' '}
                    <b className="mo-mono" data-mo-count={type.hits}>
                      {type.hits}
                    </b>{' '}
                    <span className="mo-label">{panel.hitsUnit}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <p className="cine-note mo-rules__note">{panel.hitsNote}</p>
    </div>
  );
}
