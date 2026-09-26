// "Before" chapter: fleet scale, three data silos that never meet, four pains.
// Port of Atlas `src/components/cases/sahil-transport/ChallengeScene.astro`.
import { cx } from '../_shared/cx';
import type { SahilTransportCopy } from './i18n';
import './ChallengeScene.css';

const icons = [
  // GPS pin
  'M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Zm0-8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z',
  // Chat with photo
  'M4 5h16v11H9l-5 4V5Zm4 8 3-3.5 2.5 2.5L15 10l3 3',
  // Ledger
  'M6 3h12v18H6zM9 7h6M9 11h6M9 15h3',
];

export function ChallengeScene({ challenge: c, className }: { challenge: SahilTransportCopy['challenge']; className?: string }) {
  return (
    <div className={cx('st-challenge', className)}>
      <div className="st-challenge__top">
        <div className="st-scale" data-cine-inview="">
          <p className="st-scale__value cine-rise">
            <span>{c.scale.value}</span>
            <small>{c.scale.unit}</small>
          </p>
          <p className="st-scale__text cine-rise">{c.scale.text}</p>
        </div>

        <div className="st-silos">
          <h3 className="cine-eyebrow">{c.sourcesTitle}</h3>
          <div className="st-silos__grid">
            <ul className="st-silos__list">
              {c.sources.map((source, i) => (
                <li key={source.name}>
                  <div className="st-silos__card">
                    <svg className="st-silos__icon" viewBox="0 0 24 24" aria-hidden="true">
                      <path d={icons[i] ?? ''} />
                    </svg>
                    <div className="min-w-0">
                      <p className="st-silos__name">{source.name}</p>
                      <p className="st-silos__detail">{source.detail}</p>
                      <p className="st-silos__sample" aria-hidden="true">
                        {source.sample}
                      </p>
                    </div>
                  </div>
                  <span className="st-silos__wire" aria-hidden="true">
                    <i />
                  </span>
                </li>
              ))}
            </ul>
            <p className="st-silos__gap">
              <span className="st-silos__void" aria-hidden="true">
                ?
              </span>
              <span>{c.gap}</span>
            </p>
          </div>
        </div>
      </div>

      <ol className="st-pains">
        {c.pains.map((pain, i) => (
          <li key={pain.title}>
            <span className="st-pains__no" aria-hidden="true">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="st-pains__title">{pain.title}</h3>
            <p className="cine-text mt-2">{pain.text}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
