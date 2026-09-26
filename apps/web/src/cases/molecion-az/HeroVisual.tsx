import { cx } from '../_shared/cx';
import type { MolecionCopy } from './i18n';
import { peelLine } from './line';
import './HeroVisual.css';

/**
 * Port of Atlas `cases/molecion/HeroVisual.astro`.
 * Hero: one printed supplier line read from the right into five fields, locked into a single fragrance, then
 * turned into a shelf price through a chain whose every figure is masked. `role="img"`, so the label carries it.
 * Server-rendered in its final state (6); `scripts/hero.ts` plays the states.
 */
export function HeroVisual({ t, className }: { t: MolecionCopy; className?: string }) {
  const v = t.heroVisual;
  const s = t.samples;
  const { segments } = peelLine(s.rows.nuitEdp90, t.parse.steps);

  // The card fills from the bottom up, exactly as the parser reads: size first, house last.
  const fields = [
    { step: 5, label: v.fields.house, value: s.houses.maison },
    { step: 4, label: v.fields.name, value: s.fragrances.nuit },
    { step: 3, label: v.fields.concentration, value: s.concentrationNames.edp },
    { step: 2, label: v.fields.gender, value: s.genders.women },
  ];
  const chain = [v.steps.cost, v.steps.rate, v.steps.coefficient, v.steps.margin];

  return (
    <div className={cx('mo-hero', className)} role="img" aria-label={v.ariaLabel} data-mo-hero="" data-state={6}>
      <div className="mo-hero__panel mo-panel">
        <div className="mo-hero__row">
          <p className="mo-label">{v.rowLabel}</p>
          <p className="mo-hero__line mo-line">
            {segments.map((segment) => (
              <span key={segment.step} data-step={segment.step}>
                {segment.text}
              </span>
            ))}
          </p>
          <p className="mo-hero__dir mo-label" data-tone="accent">
            <span aria-hidden="true">←</span> {t.parse.row.direction}
          </p>
        </div>

        <div className="mo-hero__card">
          <p className="mo-hero__card-head">
            <span className="mo-label">{v.identityLabel}</span>{' '}
            <span className="mo-chip" data-tone="accent" data-step="5">
              {t.identity.card.locked}
            </span>
          </p>
          <dl className="mo-hero__fields">
            {fields.map((field) => (
              <div key={field.step} data-step={field.step}>
                <dt className="mo-label">{field.label}</dt>
                <dd>{field.value}</dd>
              </div>
            ))}
          </dl>
          <p className="mo-hero__size" data-step="1">
            <span className="mo-label">{v.fields.size}</span> <b>{s.sizes.ml90}</b>
          </p>
          <p className="mo-hero__verdict" data-step="5">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" aria-hidden="true">
              <path d="M5 12.5l4.5 4.5L19 7.5"></path>
            </svg>{' '}
            {v.verdict}
          </p>
        </div>

        <div className="mo-hero__chain" data-step="6">
          <p className="mo-label">{v.chainLabel}</p>
          <ol className="mo-hero__steps">
            {chain.map((label) => (
              <li key={label}>
                <span className="mo-label">{label}</span> <b className="mo-mask">{s.masked}</b>
              </li>
            ))}
          </ol>
          <p className="mo-hero__price">
            <span className="mo-label">{v.priceLabel}</span> <b className="mo-mask">{s.masked}</b>
          </p>
        </div>
      </div>
    </div>
  );
}
