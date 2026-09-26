import { cx } from '../_shared/cx';
import { bucketTone, reviewRows, type BucketId } from './data';
import type { MolecionCopy } from './i18n';
import './ReviewScene.css';

/**
 * A skipped line is matched to nothing, so it carries no identity: the House · Name, Concentration · Gender,
 * Size and Shelf-price cells print an em dash, the way the row that is missing from the file prints one in
 * its line cell. The page's claim is that the importer never invents a match, so the screen must not show one.
 */
const dash = '—';

/**
 * Port of Atlas `cases/molecion/ReviewScene.astro`.
 * Review before anything is written: the file's lines resolve into buckets, each row shows a masked movement
 * and its flags, and the apply bar keeps saying that nothing has been written yet.
 * The buckets are real copy; the screen beside them is one image.
 */
export function ReviewScene({ t, className }: { t: MolecionCopy; className?: string }) {
  const screen = t.review.screen;
  const cols = screen.columns;
  const s = t.samples;
  const buckets = new Map(screen.buckets.map((bucket) => [bucket.id, bucket]));
  const rows = reviewRows.map((row, index) => ({
    key: `${row.row ?? 'none'}-${index}`,
    line: row.row ? s.rows[row.row] : screen.noLine,
    hasLine: Boolean(row.row),
    resolved: row.resolved !== false,
    house: s.houses[row.house],
    name: s.fragrances[row.fragrance],
    details: `${s.concentrations[row.concentration]} · ${s.genders[row.gender]}`,
    size: s.sizes[row.size],
    move: row.move,
    bucket: buckets.get(row.bucket)?.label ?? '',
    tone: bucketTone[row.bucket],
    flags: row.flags.map((flag) => screen.flags[flag]),
    selected: row.selected,
  }));
  const none = (
    <span className="mo-review__none" aria-hidden="true">
      {dash}
    </span>
  );

  return (
    <div className={cx('mo-review', className)}>
      <div className="mo-review__lanes">
        <p className="mo-review__file">
          <span className="mo-label">{screen.file}</span> <b>{s.listRef}</b>
        </p>
        <ol className="mo-review__buckets">
          {screen.buckets.map((bucket) => (
            <li key={bucket.id} data-tone={bucketTone[bucket.id as BucketId]}>
              <span className="mo-review__tick" aria-hidden="true"></span>
              <div>
                <h3 className="mo-review__bucket-label">{bucket.label}</h3>
                <p className="cine-text mo-review__bucket-text">{bucket.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="mo-sheet mo-review__screen" role="img" aria-label={screen.ariaLabel}>
        <div className="mo-sheet__head">
          <span className="mo-sheet__title">{screen.title}</span> <span className="mo-sheet__sub">{screen.subtitle}</span>
        </div>
        <div className="mo-review__scroll">
          <table className="mo-table mo-review__table">
            <thead>
              <tr>
                <th scope="col">
                  <span aria-hidden="true">✓</span> <span className="sr-only">{screen.select}</span>
                </th>
                <th scope="col">{cols.row}</th>
                <th scope="col">{`${cols.house} · ${cols.name}`}</th>
                <th scope="col" data-hide="wide">
                  {cols.details}
                </th>
                <th scope="col">{cols.size}</th>
                <th scope="col">{cols.cost}</th>
                <th scope="col" data-hide="">
                  {cols.shelf}
                </th>
                <th scope="col">{cols.status}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.key} data-state={row.selected ? 'on' : undefined}>
                  <td className="mo-review__pick">
                    <span className="mo-review__box" data-on={row.selected ? '' : undefined} aria-hidden="true">
                      {row.selected ? '✓' : ''}
                    </span>
                  </td>
                  <td className="mo-review__line" data-full="">
                    {row.hasLine ? <span className="mo-line">{row.line}</span> : <em className="mo-review__noline">{row.line}</em>}
                  </td>
                  <td data-label={cols.name} className="mo-review__name">
                    {' '}
                    {row.resolved ? (
                      <>
                        <b>{row.name}</b>{' '}
                        <span className="mo-review__house" lang="en">
                          {row.house}
                        </span>
                      </>
                    ) : (
                      none
                    )}
                  </td>
                  <td data-hide="wide" data-label={cols.details}>
                    {' '}
                    {row.resolved ? row.details : none}
                  </td>
                  <td data-label={cols.size} className="mo-review__size">
                    {' '}
                    {row.resolved ? row.size : none}
                  </td>
                  <td data-label={cols.cost} className="mo-review__cost">
                    {' '}
                    <span className="mo-mask" data-tone={row.move}>
                      {s.masked}
                    </span>
                    {row.move && (
                      <>
                        {' '}
                        <em data-tone={row.move}>
                          <span aria-hidden="true">{row.move === 'up' ? '▲' : '▼'}</span>{' '}
                          {row.move === 'up' ? screen.up : screen.down}
                        </em>
                      </>
                    )}
                  </td>
                  <td data-hide="" data-label={cols.shelf}>
                    {' '}
                    {row.resolved ? <span className="mo-mask">{s.masked}</span> : none}
                  </td>
                  <td data-label={cols.status} className="mo-review__status">
                    {' '}
                    <span className="mo-review__chips">
                      <span className="mo-chip" data-tone={row.tone === 'mute' ? undefined : row.tone}>
                        {row.bucket}
                      </span>
                      {row.flags.map((flag) => (
                        <span key={flag} className="mo-review__flag">
                          {flag}
                        </span>
                      ))}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mo-review__bar">
          <p className="mo-review__nothing">
            <span aria-hidden="true">●</span> {screen.nothingYet}
          </p>
          <p className="mo-review__actions">
            <span className="mo-btn" data-tone="ghost">
              {screen.reanalyse}
            </span>{' '}
            <span className="mo-btn" data-tone="gold">
              {screen.confirm}
            </span>
          </p>
          <p className="mo-review__legend">
            <span className="mo-review__box" data-on="" aria-hidden="true">
              ✓
            </span>{' '}
            {screen.select}
          </p>
          <p className="mo-review__recompute">{screen.recompute}</p>
        </div>
      </div>
    </div>
  );
}
