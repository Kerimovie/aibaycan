import { cx } from '../_shared/cx';
import { ChannelIcon } from './ChannelIcon';
import type { CavablyCopy } from './i18n';
import './AnalyticsBoard.css';

// Port of Atlas `cases/cavably/AnalyticsBoard.astro` (entrance via the kit's `data-cine-inview`).

const round = (n: number) => Math.round(n * 10) / 10;
const digits = (value: string) => Number(value.replace(/\D/g, ''));
// First response sparkline (seconds per week, sample).
const spark = [140, 118, 121, 96, 88, 90, 79, 72];
const sparkPath = spark.map((v, i) => `${i ? 'L' : 'M'}${round((i * 120) / 7)} ${round(36 - ((v - 60) / 90) * 30)}`).join(' ');

export function AnalyticsBoard({ t, className }: { t: CavablyCopy; className?: string }) {
  const d = t.analytics.dashboard;

  const funnelMax = digits(d.funnel.stages[0]?.value ?? '1');
  const funnel = d.funnel.stages.map((stage) => ({ ...stage, pct: round((digits(stage.value) / funnelMax) * 100) }));

  // Revenue line in a 700 × 210 box (plot area x 10…690, y 20…200); week labels are HTML under it.
  const pts = d.revenue.points;
  const lo = Math.min(...pts) * 0.8;
  const hi = Math.max(...pts) * 1.04;
  const px = (i: number) => round(10 + (i * 680) / (pts.length - 1));
  const py = (v: number) => round(200 - ((v - lo) / (hi - lo)) * 180);
  const line = pts.map((v, i) => `${i ? 'L' : 'M'}${px(i)} ${py(v)}`).join(' ');
  const area = `${line} L${px(pts.length - 1)} 200 L${px(0)} 200 Z`;

  const channelMax = Math.max(...d.channels.items.map((item) => item.value));
  const csatMax = Math.max(...d.csat.bars);

  return (
    <div className={cx('cav cav-sheet cav-dash', className)} role="img" aria-label={d.ariaLabel} data-cine-inview="">
      <div className="cav-sheet__head">
        <span className="cav-dash__title">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M4 20h16M7 16v-5M12 16V6M17 16v-8" />
          </svg>
          {d.title}
        </span>
        <span className="cav-dash__range">{d.range}</span>
      </div>

      <div className="cav-dash__grid">
        <section className="cav-dash__card cav-dash__funnel">
          <p className="cav-label">{d.funnel.title}</p>
          <ol>
            {funnel.map((stage, i) => (
              <li key={i}>
                <span className="cav-dash__row">
                  <span>{stage.label}</span>
                  <b>{stage.value}</b>
                </span>
                <svg className="cav-dash__bar" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <rect width="100" height="10" className="cav-dash__bar-bg" />
                  <rect width={stage.pct} height="10" className="cav-dash__bar-fill" />
                </svg>
              </li>
            ))}
          </ol>
        </section>

        <section className="cav-dash__card cav-dash__revenue">
          <p className="cav-dash__row">
            <span className="cav-label">{d.revenue.title}</span>
            <b className="cav-dash__big">{d.revenue.total}</b>
          </p>
          <svg className="cav-dash__chart" viewBox="0 0 700 210">
            <defs>
              <linearGradient id="cav-dash-area" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" className="cav-dash__stop" stopOpacity="0.28" />
                <stop offset="1" className="cav-dash__stop" stopOpacity="0" />
              </linearGradient>
            </defs>
            {[20, 80, 140, 200].map((y) => (
              <line key={y} x1="10" x2="690" y1={y} y2={y} className="cav-dash__gridline" />
            ))}
            <path d={area} fill="url(#cav-dash-area)" className="cav-dash__area" />
            <path d={line} className="cav-dash__line" pathLength={1} />
            {pts.map((v, i) => (
              <circle
                key={i}
                cx={px(i)}
                cy={py(v)}
                r={i === pts.length - 1 ? 7 : 4.5}
                className="cav-dash__point"
                data-last={i === pts.length - 1 ? '' : undefined}
              />
            ))}
          </svg>
          <p className="cav-dash__axis">
            {d.revenue.labels.map((label, i) => (
              <span key={i}>{label}</span>
            ))}
          </p>
        </section>

        <section className="cav-dash__card cav-dash__channels">
          <p className="cav-label">{d.channels.title}</p>
          <ul>
            {d.channels.items.map((item) => (
              <li key={item.channel}>
                <ChannelIcon channel={item.channel} chip />
                <span className="cav-dash__name">{t.channels[item.channel]}</span>
                <svg className="cav-dash__bar" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <rect width={round((item.value / channelMax) * 100)} height="10" className="cav-dash__bar-fill" data-ch={item.channel} />
                </svg>
                <b>{item.value}</b>
              </li>
            ))}
          </ul>
        </section>

        <section className="cav-dash__card cav-dash__response">
          <p className="cav-label">{d.response.title}</p>
          <b className="cav-dash__big">{d.response.value}</b>
          <svg className="cav-dash__spark" viewBox="-4 -4 128 48">
            <path d={sparkPath} className="cav-dash__spark-line" pathLength={1} />
          </svg>
          <p className="cav-dash__note">{d.response.note}</p>
        </section>

        <section className="cav-dash__card cav-dash__csat">
          <p className="cav-label">{d.csat.title}</p>
          <p className="cav-dash__score">
            <b className="cav-dash__big">{d.csat.value}</b>
            <span>{d.csat.scale}</span>
          </p>
          <div className="cav-dash__stars">
            {d.csat.bars.map((value, i) => (
              <span key={i}>
                <svg viewBox="0 0 10 40" preserveAspectRatio="none">
                  <rect
                    y={40 - round((value / csatMax) * 40)}
                    width="10"
                    height={round((value / csatMax) * 40)}
                    className="cav-dash__col"
                    data-low={i < 2 ? '' : undefined}
                  />
                </svg>
                <em>{i + 1}</em>
              </span>
            ))}
          </div>
          <p className="cav-dash__alert">
            <b>{d.csat.alertTitle}</b> {d.csat.alert}
          </p>
        </section>
      </div>
    </div>
  );
}
