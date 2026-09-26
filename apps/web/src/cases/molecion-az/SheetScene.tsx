import { cx } from '../_shared/cx';
import { sheetRows } from './data';
import type { MolecionCopy } from './i18n';
import './SheetScene.css';

/**
 * Port of Atlas `cases/molecion/SheetScene.astro`.
 * The challenge: supplier lines arriving as one string each, with a masked cost and a question mark where the
 * catalogue match should be. The sheet itself is one image; the question under it is real copy.
 */
export function SheetScene({ t, className }: { t: MolecionCopy; className?: string }) {
  const sheet = t.challenge.sheet;
  const s = t.samples;
  const rows = sheetRows.map((row) => ({ key: row.row, text: s.rows[row.row], move: row.move }));

  return (
    <div className={cx('mo-sheetscene', className)}>
      <div className="mo-sheet mo-sheetscene__sheet" role="img" aria-label={sheet.ariaLabel}>
        <div className="mo-sheet__head">
          <span className="mo-sheet__title">{sheet.title}</span> <span className="mo-sheet__sub">{t.sampleDataLabel}</span>
        </div>
        <table className="mo-table mo-sheetscene__table">
          <thead>
            <tr>
              <th scope="col">{sheet.columnRow}</th>
              <th scope="col">{sheet.columnCost}</th>
              <th scope="col">{sheet.columnMatch}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.key}>
                <td>
                  <span className="mo-line">{row.text}</span>
                </td>
                <td>
                  <span className="mo-mask" data-tone={row.move}>
                    {s.masked}
                  </span>
                </td>
                <td>
                  <span className="mo-sheetscene__q" aria-hidden="true">
                    {sheet.unknown}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mo-sheetscene__aside">
        <p className="mo-sheetscene__question">{sheet.question}</p>
        <p className="mo-sheetscene__byhand">
          <span className="mo-label">{sheet.byHand}</span> <b>{sheet.byHandValue}</b>
        </p>
      </div>
    </div>
  );
}
