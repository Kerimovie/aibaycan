import { cx } from '../_shared/cx';
import type { MolecionCopy } from './i18n';
import './IdentityScene.css';

/**
 * Port of Atlas `cases/molecion/IdentityScene.astro`.
 * The identity rule: four fields lock into one fragrance, the size branches to "update this price" or "add this
 * size", and the eau de toilette twin slides past stamped "different fragrance — price untouched".
 * The entrance is pure CSS on the kit's `data-cine-inview`, so there is no script on this scene at all.
 */
export function IdentityScene({ t, className }: { t: MolecionCopy; className?: string }) {
  const id = t.identity;
  const s = t.samples;
  const card = id.card;
  const reject = id.reject;
  const noKey = id.noKey;
  const keyFields = [...card.fields.map((field) => field.label), card.sizeLabel];

  return (
    <div className={cx('mo-id', className)}>
      <div className="mo-id__top">
        <div className="mo-id__cardwrap" data-cine-inview="">
          <div className="mo-id__card mo-panel" role="img" aria-label={card.ariaLabel}>
            <div className="mo-panel__head">
              <span className="mo-panel__title">{card.title}</span>{' '}
              <span className="mo-chip mo-id__locked" data-tone="accent">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
                  <path d="M6 11V8a6 6 0 0 1 12 0v3"></path>
                  <rect x="4" y="11" width="16" height="10" rx="2"></rect>
                </svg>{' '}
                {card.locked}
              </span>
            </div>
            <dl className="mo-id__fields">
              {card.fields.map((field) => (
                <div key={field.label} className="mo-id__field">
                  <dt className="mo-label">{field.label}</dt>
                  <dd>{field.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mo-id__plus" aria-hidden="true">
              {card.andSize}
            </p>
            <p className="mo-id__size">
              <span className="mo-label">{card.sizeLabel}</span> <b>{s.sizes.ml90}</b>
            </p>
          </div>
          <p className="cine-note mo-id__note">{card.note}</p>
        </div>

        <ol className="mo-id__branches">
          {id.branches.map((branch) => (
            <li key={branch.title}>
              <p className="mo-id__branch-head">
                <span className="mo-chip" data-tone="accent">
                  {branch.badge}
                </span>{' '}
                <span className="mo-id__branch-size mo-mono">{branch.size}</span>
              </p>
              <h3 className="mo-id__branch-title">{branch.title}</h3>
              <p className="cine-text mt-2">{branch.text}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="mo-id__reject">
        <div className="mo-id__stampwrap" data-cine-inview="">
          <div className="mo-id__twin mo-panel" role="img" aria-label={reject.ariaLabel}>
            <div className="mo-panel__body mo-id__twin-body">
              <p className="mo-label">{reject.badge}</p>
              <p className="mo-id__twin-line mo-line">{s.rows.nuitEdt90}</p>
              <ul className="mo-id__twin-fields">
                <li>
                  <span className="mo-label">{card.fields[2]?.label}</span> <b>{s.concentrationNames.edt}</b>
                </li>
                <li>
                  <span className="mo-label">{card.sizeLabel}</span> <b>{s.sizes.ml90}</b>
                </li>
              </ul>
            </div>
            <p className="mo-id__stamp" aria-hidden="true">
              {reject.stamp}
            </p>
          </div>
        </div>

        <div className="mo-id__reject-copy">
          <h3 className="cine-h3">{reject.title}</h3>
          <p className="cine-text mt-4">{reject.text}</p>
          <dl className="mo-id__reject-rows">
            <div>
              <dt className="mo-label">{reject.infoLabel}</dt>
              <dd>{reject.info}</dd>
            </div>
            <div>
              <dt className="mo-label" data-tone="accent">
                {reject.decisionLabel}
              </dt>
              <dd>{`${s.fragrances.nuit} · ${s.concentrations.edt}`}</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="mo-id__nokey">
        <div className="mo-id__nokey-copy">
          <h3 className="cine-h3">{noKey.title}</h3>
          <p className="cine-text mt-4">{noKey.text}</p>
          <p className="cine-note mo-id__tradeoff">{noKey.tradeoff}</p>
        </div>
        <ol className="mo-id__swap">
          <li data-state="before">
            <p className="mo-label">{noKey.before}</p>
            <p className="mo-id__code mo-line" aria-hidden="true">
              ████ ██ ███████
            </p>
          </li>
          <li data-state="after">
            <p className="mo-label" data-tone="accent">
              {noKey.after}
            </p>
            <ul className="mo-id__keys">
              {keyFields.map((label) => (
                <li key={label} className="mo-chip">
                  {label}
                </li>
              ))}
            </ul>
          </li>
        </ol>
      </div>
    </div>
  );
}
