import { cx } from '../_shared/cx';
import { Bottle } from './Bottle';
import { grantedSection, profile as geometry, searchQuery, shelf } from './data';
import type { MolecionCopy } from './i18n';
import { Phone } from './Phone';
import './ProductScene.css';

const shapes = ['tall', 'squat'] as const;

/**
 * Port of Atlas `cases/molecion/ProductScene.astro`.
 * The shop and the back office: the storefront on a phone, one fragrance's profile drawn as type and bars
 * (never a photograph), and the fourteen-section back office seen through a staff account that opens only one.
 */
export function ProductScene({ t, className }: { t: MolecionCopy; className?: string }) {
  const p = t.product;
  const s = t.samples;
  const store = p.storefront;
  const prof = p.profile;
  const admin = p.admin;
  const staff = admin.staff;
  const cards = shelf.map((card, i) => ({
    key: `${card.fragrance}-${card.concentration}-${card.size}`,
    house: s.houses[card.house],
    name: s.fragrances[card.fragrance],
    meta: `${s.concentrations[card.concentration]} · ${s.sizes[card.size]}`,
    shape: shapes[i % shapes.length] ?? 'tall',
  }));
  const suggestions = [s.fragrances.nuit, s.fragrances.absolu];

  return (
    <div className={cx('mo-prod', className)}>
      {/* ---------- The storefront ---------- */}
      <div className="mo-prod__store">
        <div className="mo-prod__phonewrap">
          <Phone className="mo-prod__phone">
            <div className="mo-prod__app" role="img" aria-label={store.ariaLabel}>
              <p className="mo-prod__brandbar">
                <span className="mo-mark">M</span> <b>MOLECION</b>{' '}
                <span className="mo-prod__langs" aria-hidden="true">
                  EN · AZ · RU
                </span>
              </p>
              <p className="mo-prod__search">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <circle cx="11" cy="11" r="7"></circle>
                  <path d="M20 20l-4-4"></path>
                </svg>{' '}
                <span className="mo-prod__query">{searchQuery}</span>{' '}
                <span className="mo-prod__caret" aria-hidden="true"></span>
              </p>
              <ul className="mo-prod__suggest">
                {suggestions.map((name) => (
                  <li key={name}>
                    <span>{name}</span> <em aria-hidden="true">↵</em>
                  </li>
                ))}
              </ul>
              <ul className="mo-prod__cards">
                {cards.map((card) => (
                  <li key={card.key}>
                    <span className="mo-prod__shot">
                      <Bottle shape={card.shape} />
                    </span>{' '}
                    <span className="mo-prod__house" lang="en">
                      {card.house}
                    </span>{' '}
                    <span className="mo-prod__name">{card.name}</span> <span className="mo-prod__meta">{card.meta}</span>{' '}
                    <span className="mo-prod__price mo-mask">{s.masked}</span>
                  </li>
                ))}
              </ul>
              <p className="mo-prod__install">
                <span className="mo-mark">M</span> <span>{store.groups[3]?.items[0]}</span>
              </p>
              <nav className="mo-prod__tabs" aria-hidden="true">
                <span data-active="">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M3 10.5 12 4l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"></path>
                  </svg>
                </span>
                <span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M4 5h16M4 12h16M4 19h10"></path>
                  </svg>
                </span>
                <span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <circle cx="11" cy="11" r="7"></circle>
                    <path d="M20 20l-4-4"></path>
                  </svg>
                </span>
                <span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 20s-7-4.5-7-9a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 4.5-7 9-7 9z"></path>
                  </svg>
                </span>
                <span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M5 7h14l-1.2 11a2 2 0 0 1-2 1.8H8.2a2 2 0 0 1-2-1.8z"></path>
                    <path d="M9 7V5a3 3 0 0 1 6 0v2"></path>
                  </svg>
                </span>
              </nav>
            </div>
          </Phone>
        </div>

        <div className="mo-prod__groups">
          <h3 className="mo-prod__h3">{store.title}</h3>
          <dl className="mo-prod__grouplist">
            {store.groups.map((group) => (
              <div key={group.label}>
                <dt className="mo-label" data-tone="accent">
                  {group.label}
                </dt>
                <dd>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* ---------- The scent is data, not a picture ---------- */}
      <div className="mo-prod__profile">
        <div className="mo-prod__profilecopy">
          <h3 className="mo-prod__h3">{prof.title}</h3>
          <p className="cine-text mt-4">{prof.text}</p>
          <p className="cine-note mo-prod__profilenote">{prof.note}</p>
        </div>
        <div className="mo-sheet mo-prod__profilecard" role="img" aria-label={prof.ariaLabel} data-cine-inview="">
          <div className="mo-sheet__head">
            <span className="mo-sheet__title">{s.fragrances.nuit}</span>{' '}
            <span className="mo-sheet__sub">{`${s.concentrations.edp} · ${s.sizes.ml90}`}</span>
          </div>
          <div className="mo-prod__profilebody">
            <section className="mo-prod__bars">
              <p className="mo-prod__blocklabel">{prof.accordsLabel}</p>
              <ul>
                {prof.accords.map((accord, i) => (
                  <li key={accord}>
                    <span>{accord}</span>{' '}
                    <span className="mo-bar">
                      <i data-w={geometry.accords[i]} />
                    </span>
                  </li>
                ))}
              </ul>
            </section>
            <section className="mo-prod__pyramid">
              <p className="mo-prod__blocklabel">{prof.pyramidLabel}</p>
              <ol>
                {prof.levels.map((level, i) => (
                  <li key={level.label} data-tier={i + 1}>
                    <span className="mo-prod__tier">{level.label}</span>{' '}
                    <span className="mo-prod__notes">
                      {level.notes.map((note) => (
                        <em key={note}>{note}</em>
                      ))}
                    </span>
                  </li>
                ))}
              </ol>
            </section>
            <section className="mo-prod__bars mo-prod__wear">
              <p className="mo-prod__blocklabel">{prof.wearLabel}</p>
              <ul>
                {prof.seasons.map((season, i) => (
                  <li key={season}>
                    <span>{season}</span>{' '}
                    <span className="mo-bar">
                      <i data-w={geometry.seasons[i]} />
                    </span>
                  </li>
                ))}
                {prof.times.map((time, i) => (
                  <li key={time} data-time="">
                    <span>{time}</span>{' '}
                    <span className="mo-bar">
                      <i data-w={geometry.times[i]} />
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>

      {/* ---------- Fourteen sections, one permission each ---------- */}
      <div className="mo-prod__admin">
        {/* The sticky sidebar and the section list share one row, so the sticky travel ends with that row. */}
        <div className="mo-prod__adminrow">
          <div className="mo-prod__adminleft">
            <div className="mo-prod__adminhead">
              <h3 className="mo-prod__h3">{admin.title}</h3>
              <p className="cine-text mt-4">{admin.text}</p>
            </div>

            <div className="mo-sheet mo-prod__sidebar" role="img" aria-label={admin.ariaLabel}>
              <div className="mo-sheet__head">
                <span className="mo-sheet__title">{staff.exampleLabel}</span>{' '}
                <span className="mo-sheet__sub">{staff.exampleGranted}</span>
              </div>
              <ol className="mo-prod__sections">
                {admin.sections.map((section, i) => (
                  <li key={section.label} data-on={i === grantedSection ? '' : undefined}>
                    <span className="mo-prod__secno">{String(i + 1).padStart(2, '0')}</span>{' '}
                    <span className="mo-prod__secname">{section.label}</span>{' '}
                    {i === grantedSection ? (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" aria-hidden="true">
                        <path d="M5 12.5l4.5 4.5L19 7.5"></path>
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                        <path d="M7 11V8a5 5 0 0 1 10 0v3"></path>
                        <rect x="5" y="11" width="14" height="9" rx="2"></rect>
                      </svg>
                    )}
                  </li>
                ))}
              </ol>
              <p className="mo-prod__hidden">{staff.exampleHidden}</p>
            </div>
          </div>

          <dl className="mo-prod__seclist">
            {admin.sections.map((section) => (
              <div key={section.label}>
                <dt>{section.label}</dt>
                <dd>{section.text}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mo-prod__blocks">
          <section>
            <h4 className="mo-prod__h4">{staff.title}</h4>
            <p className="cine-text mt-3">{staff.text}</p>
          </section>
          <section>
            <h4 className="mo-prod__h4">{admin.languages.title}</h4>
            <p className="cine-text mt-3">{admin.languages.text}</p>
            <dl className="mo-prod__layers">
              {admin.languages.layers.map((layer) => (
                <div key={layer.label}>
                  <dt className="mo-label" data-tone="accent">
                    {layer.label}
                  </dt>
                  <dd>{layer.text}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>
      </div>
    </div>
  );
}
