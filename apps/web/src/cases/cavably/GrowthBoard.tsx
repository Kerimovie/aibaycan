import { cx } from '../_shared/cx';
import { ChannelIcon } from './ChannelIcon';
import type { CavablyCopy } from './i18n';
import './GrowthBoard.css';

// Port of Atlas `cases/cavably/GrowthBoard.astro`. The pipeline is driven by `scripts/pipeline.ts` (via CavablyEffects).

const amount = (value: string) => Number(value.replace(/\D/g, ''));
const format = (n: number) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
const RING = 2 * Math.PI * 52;

export function GrowthBoard({ t, className }: { t: CavablyCopy; className?: string }) {
  const { pipeline: p, campaign: c, loyalty: l } = t.growth;

  const sumOf = (stages: number[]) => p.deals.filter((d) => stages.includes(d.stage)).reduce((sum, d) => sum + amount(d.value), 0);
  const open = sumOf([0, 1, 2]);
  const won = sumOf([3]);
  const mover = p.deals[p.mover];

  const [before, after] = c.message.split(c.variable);
  const ratio = Number(l.points) / Number(l.goal);

  return (
    <div className={cx('cav cav-growth', className)}>
      <div
        className="cav-ui cav-pipe"
        role="img"
        aria-label={p.ariaLabel}
        data-cav-pipeline=""
        data-open={open}
        data-won={won}
        data-move={mover ? amount(mover.value) : 0}
      >
        <div className="cav-ui__head cav-pipe__head">
          <span className="cav-pipe__title">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
              <path d="M5 5h3.5v14H5zM10.25 5h3.5v9h-3.5zM15.5 5H19v6h-3.5z" />
            </svg>
            {p.title}
          </span>
          <span className="cav-pipe__stats">
            <span>
              <em>{p.valueLabel}</em>
              <b>
                <span data-cav-open="">{format(open)}</span>
                {` ${p.currency}`}
              </b>
            </span>
            <span data-tone="won">
              <em>{p.wonLabel}</em>
              <b>
                <span data-cav-won="">{format(won)}</span>
                {` ${p.currency}`}
              </b>
            </span>
          </span>
        </div>
        <div className="cav-pipe__cols">
          {p.stages.map((stage, s) => (
            <div key={s} className="cav-pipe__col" data-stage={s} data-cav-stage={s}>
              <p className="cav-pipe__col-head">
                <span>{stage}</span>
                <em>{p.deals.filter((d) => d.stage === s).length}</em>
              </p>
              {p.deals.map((deal, i) =>
                deal.stage === s ? (
                  <div key={i} className="cav-pipe__card" data-cav-mover={i === p.mover ? '' : undefined}>
                    <p className="cav-pipe__deal">
                      <b>{deal.name}</b>
                      <ChannelIcon channel={deal.channel} chip />
                    </p>
                    <p className="cav-pipe__who">{deal.who}</p>
                    <p className="cav-pipe__foot">
                      <span className="cav-pipe__value">{`${deal.value} ${p.currency}`}</span>
                      {i === 0 && <span className="cav-pipe__tag">{p.fromChat}</span>}
                      {i === 3 && (
                        <span className="cav-pipe__tag" data-tone="warn">
                          {p.silent}
                        </span>
                      )}
                    </p>
                  </div>
                ) : null,
              )}
            </div>
          ))}
        </div>
        <div className="cav-pipe__lost">
          <span className="cav-label">{p.lostTitle}</span>
          {p.lostReasons.map((reason, i) => (
            <span key={i} className="cav-pipe__reason" data-active={i === 0 ? '' : undefined}>
              {reason}
            </span>
          ))}
        </div>
      </div>

      <div className="cav-growth__row">
        <div className="cav-ui cav-camp" role="img" aria-label={c.ariaLabel} data-cine-inview="">
          <div className="cav-ui__head">
            <span className="cav-pipe__title">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 10v4h3l6 4V6L7 10zM17 9a4 4 0 0 1 0 6" />
              </svg>
              {c.title} <small>{`· ${c.name}`}</small>
            </span>
            <ChannelIcon channel="whatsapp" chip />
          </div>
          <div className="cav-camp__body">
            <p className="cav-camp__row">
              <span className="cav-label">{c.segmentLabel}</span>
              {c.segment.map((chip) => (
                <span key={chip} className="cav-camp__seg">
                  {chip}
                </span>
              ))}
            </p>
            <p className="cav-label mt-4">{c.templateLabel}</p>
            <p className="cav-camp__bubble">
              {before}
              <span className="cav-camp__var">{c.variable}</span>
              {after} <small>{c.stop}</small>
            </p>
            <ul className="cav-camp__log">
              {c.log.map((entry, i) => (
                <li key={i} data-stop={i === c.log.length - 1 ? '' : undefined}>
                  <span className="cav-avatar">{entry.name.charAt(0)}</span>
                  <b>{entry.name}</b>
                  <span>{entry.status}</span>
                </li>
              ))}
            </ul>
            <div className="cav-camp__send">
              <span className="cav-camp__progress">
                <span className="cav-label">{c.progress}</span>
                <span className="cav-camp__bar">
                  <i />
                </span>
              </span>
              <span className="cav-camp__btn">
                {c.send}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 4L3 11l6 2.3M21 4l-3 16-6.5-5.2M21 4L9 13.3" />
                </svg>
              </span>
            </div>
          </div>
        </div>

        <div className="cav-ui cav-loyal" role="img" aria-label={l.ariaLabel} data-cine-inview="">
          <div className="cav-ui__head">
            <span className="cav-pipe__title">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
                <path d="M12 3.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L12 16.9l-5.3 2.7 1-5.8-4.2-4.1 5.9-.9z" />
              </svg>
              {l.title}
            </span>
          </div>
          <div className="cav-loyal__body">
            <svg className="cav-loyal__ring" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="52" className="cav-loyal__track" />
              <circle
                cx="60"
                cy="60"
                r="52"
                className="cav-loyal__fill"
                strokeDasharray={`${(RING * ratio).toFixed(1)} ${RING.toFixed(1)}`}
                transform="rotate(-90 60 60)"
              />
              <text x="60" y="60" textAnchor="middle" className="cav-loyal__points">
                {l.points}
              </text>
              <text x="60" y="80" textAnchor="middle" className="cav-loyal__goal">
                {`/ ${l.goal} ${l.pointsLabel}`}
              </text>
            </svg>
            <p className="cav-loyal__name">
              <span className="cav-avatar">{l.name.charAt(0)}</span>
              <b>{l.name}</b>
            </p>
            <p className="cav-loyal__reward">{l.reward}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
