import { cx } from '../_shared/cx';
import { ChannelIcon } from './ChannelIcon';
import type { CavablyCopy, CavChannel } from './i18n';
import './IntegrationHub.css';

// Port of Atlas `cases/cavably/IntegrationHub.astro` (CSS-only comets).

const channels: CavChannel[] = ['whatsapp', 'instagram', 'messenger', 'telegram', 'web'];
// Same converging wires as the hero: five channel columns (x = 50…450) meet the core at x = 250.
const wires = channels.map((channel, i) => {
  const x = 50 + i * 100;
  return { channel, d: `M${x} 0 C ${x} 58, 250 42, 250 100` };
});

export function IntegrationHub({ t, className }: { t: CavablyCopy; className?: string }) {
  const hub = t.engineering.hub;
  return (
    <div className={cx('cav cav-hub', className)}>
      <h3 className="cine-eyebrow">{hub.title}</h3>
      <div className="cav-hub__body">
        <p className="cav-label cav-hub__caption" id="cav-hub-channels">
          {hub.channelsLabel}
        </p>
        <ul className="cav-hub__channels" aria-labelledby="cav-hub-channels">
          {channels.map((channel) => (
            <li key={channel}>
              <ChannelIcon channel={channel} chip />
              <span>{t.channels[channel]}</span>
            </li>
          ))}
        </ul>

        <svg className="cav-hub__wires" viewBox="0 0 500 100" preserveAspectRatio="none" aria-hidden="true">
          {wires.map((wire) => (
            <g key={wire.channel} data-ch={wire.channel}>
              <path className="cav-hub__wire" d={wire.d} />
              <path className="cav-hub__comet" d={wire.d} pathLength={100} />
            </g>
          ))}
        </svg>

        <div className="cav-hub__core" aria-hidden="true">
          <span className="cav-hub__logo">C</span>
          <b>Cavably</b>
          <span className="cav-hub__parts">
            {hub.core.map((part) => (
              <span key={part}>{part}</span>
            ))}
          </span>
        </div>

        <span className="cav-hub__stem" aria-hidden="true" />

        <ul className="cav-hub__systems" aria-labelledby="cav-hub-systems">
          {hub.systems.map((system) => (
            <li key={system}>{system}</li>
          ))}
        </ul>
        <p className="cav-label cav-hub__caption" id="cav-hub-systems">
          {hub.systemsLabel}
        </p>
      </div>
    </div>
  );
}
