import { cx } from '../_shared/cx';
import type { CavChannel } from './i18n';

// Port of Atlas `cases/cavably/ChannelIcon.astro` (no styles of its own: `.cav-ch` / `.cav-chip` live in cavably.css).

export interface ChannelIconProps {
  channel: CavChannel;
  /** Wrap the glyph in a tinted round badge (`.cav-chip`). */
  chip?: boolean;
  className?: string;
}

function Glyph({ channel }: { channel: CavChannel }) {
  switch (channel) {
    case 'whatsapp':
      return <path d="M3.5 20.5l1.3-4.1A8.6 8.6 0 1 1 8 19.4zM9 8.6c.2 2.9 3.3 6 6.3 6.4l1-1.3-2-1-1 .8c-1-.5-2.2-1.7-2.6-2.7l.8-1-1-2z" />;
    case 'instagram':
      return (
        <>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <path d="M17.5 6.5h.01" />
        </>
      );
    case 'messenger':
      return <path d="M12 3C7 3 3 6.7 3 11.3c0 2.6 1.3 4.9 3.3 6.4V21l3-1.7c.9.3 1.8.4 2.7.4 5 0 9-3.7 9-8.4S17 3 12 3zM7.5 13.5l3.2-3.4 2.4 2.2 3.4-3.3" />;
    case 'telegram':
      return <path d="M21 4L3 11l6 2.3M21 4l-3 16-6.5-5.2M21 4L9 13.3v5.2l2.5-3.7" />;
    case 'web':
      return (
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
        </>
      );
  }
}

export function ChannelIcon({ channel, chip = false, className }: ChannelIconProps) {
  const svg = (
    <svg
      className={cx('cav-ch', !chip && className)}
      data-ch={chip ? undefined : channel}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <Glyph channel={channel} />
    </svg>
  );
  if (!chip) return svg;
  return (
    <span className={cx('cav-chip', className)} data-ch={channel} aria-hidden="true">
      {svg}
    </span>
  );
}
