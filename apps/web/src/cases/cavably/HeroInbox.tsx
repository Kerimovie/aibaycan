import { ChannelIcon } from './ChannelIcon';
import type { CavablyCopy, CavChannel } from './i18n';
import './HeroInbox.css';

// Port of Atlas `cases/cavably/HeroInbox.astro`. Driven by `scripts/hero.ts` (via CavablyEffects).

const channels: CavChannel[] = ['whatsapp', 'instagram', 'messenger', 'telegram', 'web'];
// Five wires from the channel badges (x = 50…450 in a 500-wide box) converge on the inbox below.
const wires = channels.map((channel, i) => {
  const x = 50 + i * 100;
  return { channel, d: `M${x} 0 C ${x} 58, 250 42, 250 100` };
});

export function HeroInbox({ t }: { t: CavablyCopy }) {
  const h = t.heroInbox;
  return (
    <div className="cav cav-hero" role="img" aria-label={h.ariaLabel} data-cav-hero="" data-typing={t.states.typing}>
      <div className="cav-hero__glow" />

      <ul className="cav-hero__channels">
        {channels.map((channel) => (
          <li key={channel} data-cav-hero-channel={channel}>
            <ChannelIcon channel={channel} chip />
            <span>{t.channels[channel]}</span>
          </li>
        ))}
      </ul>

      <svg className="cav-hero__wires" viewBox="0 0 500 100" preserveAspectRatio="none">
        {wires.map((wire) => (
          <g key={wire.channel} data-ch={wire.channel}>
            <path className="cav-hero__wire" d={wire.d} />
            <path className="cav-hero__comet" d={wire.d} pathLength={100} data-cav-comet={wire.channel} />
          </g>
        ))}
      </svg>

      <div className="cav-ui cav-hero__inbox">
        <div className="cav-ui__head">
          <span className="cav-hero__title">
            <span className="cav-hero__logo">C</span>
            <span>
              {h.inbox} <small>{h.business}</small>
            </span>
          </span>
          <span className="cav-hero__online">
            <i /> {h.online}
          </span>
        </div>
        <ul className="cav-hero__list" data-cav-hero-list="">
          {h.conversations.map((c, i) => (
            <li key={i} className="cav-hero__row" data-channel={c.channel}>
              <span className="cav-avatar">
                {c.name.charAt(0)}
                <ChannelIcon channel={c.channel} chip />
              </span>
              <span className="cav-hero__body">
                <b>{c.name}</b>
                <span>{c.text}</span>
              </span>
              <span className="cav-hero__side">
                <time>{c.time}</time>
                <span className="cav-state" data-state={c.state} data-label={t.states[c.state]}>
                  {t.states[c.state]}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="cav-hero__reply">
        <p className="cav-msg" data-from="ai">
          <span className="cav-msg__who">
            <span className="cav-hero__spark">✦</span> {h.reply.from}
          </span>
          <span className="block">{h.reply.text}</span>
          <span className="cav-msg__meta">
            <span className="cav-source">{h.reply.source}</span>
            <span>23:40</span>
          </span>
        </p>
      </div>
    </div>
  );
}
