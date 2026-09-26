import { cx } from '../_shared/cx';
import type { CavMessage } from './i18n';

// Port of Atlas `cases/cavably/ChatMessage.astro` (no styles of its own: `.cav-msg*` live in cavably.css).

// Fixed waveform for voice notes (bar heights in a 24-high box).
const wave = [6, 10, 16, 9, 20, 13, 7, 15, 22, 12, 8, 17, 11, 19, 9, 6, 14, 20, 10, 7, 12, 16, 8, 5];

export interface ChatMessageProps {
  message: CavMessage;
  /** Name shown above AI bubbles that carry no `name` of their own. */
  aiLabel?: string;
}

export function ChatMessage({ message: m, aiLabel }: ChatMessageProps) {
  if (m.from === 'system') {
    return (
      <p className="cav-msg" data-from="system">
        {m.text}
      </p>
    );
  }
  const who = m.name ?? (m.from === 'ai' ? aiLabel : undefined);
  return (
    <div className="cav-msg" data-from={m.from}>
      {who && m.from !== 'customer' && (
        <span className="cav-msg__who">
          {m.from === 'ai' && <span aria-hidden="true">✦</span>} {who}
        </span>
      )}
      {m.voice && (
        <span className="cav-voice">
          <span className="cav-voice__play">
            <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" aria-hidden="true">
              <path d="M8 5.5v13l10-6.5z" />
            </svg>
          </span>
          <svg className="cav-voice__svg" viewBox="0 0 96 24" preserveAspectRatio="none" aria-hidden="true">
            {wave.map((h, i) => (
              <rect key={i} x={i * 4} y={(24 - h) / 2} width="2.2" height={h} rx="1.1" data-played={i < 9 ? '' : undefined} />
            ))}
          </svg>
          <span className="cav-voice__time">{m.voice}</span>
        </span>
      )}
      {m.photo && (
        <span className="cav-photo">
          <svg viewBox="0 0 160 110" aria-hidden="true">
            <defs>
              <linearGradient id="cav-photo-bg" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#f3d9c6" />
                <stop offset="1" stopColor="#d9ab93" />
              </linearGradient>
              <linearGradient id="cav-photo-nail" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#d81f4a" />
                <stop offset="1" stopColor="#8f0d2c" />
              </linearGradient>
            </defs>
            <rect width="160" height="110" fill="url(#cav-photo-bg)" />
            <path d="M18 110 C 22 70, 34 44, 46 40 C 58 44, 66 70, 70 110 Z" fill="#e9bfa6" />
            <path d="M56 110 C 60 60, 72 30, 84 26 C 96 30, 104 60, 108 110 Z" fill="#edc6ae" />
            <path d="M96 110 C 100 66, 112 40, 124 36 C 136 40, 144 66, 148 110 Z" fill="#e6bba1" />
            <rect x="36" y="44" width="20" height="28" rx="10" fill="url(#cav-photo-nail)" />
            <rect x="74" y="30" width="20" height="30" rx="10" fill="url(#cav-photo-nail)" />
            <rect x="114" y="40" width="20" height="28" rx="10" fill="url(#cav-photo-nail)" />
            <path d="M41 50 q3 -3 5 0" stroke="#ff9db5" strokeWidth="2" fill="none" strokeLinecap="round" />
            <path d="M79 36 q3 -3 5 0" stroke="#ff9db5" strokeWidth="2" fill="none" strokeLinecap="round" />
            <path d="M119 46 q3 -3 5 0" stroke="#ff9db5" strokeWidth="2" fill="none" strokeLinecap="round" />
          </svg>
          <span className="cav-photo__tag">{m.photo}</span>
        </span>
      )}
      <span className={cx('block', m.voice && 'cav-transcript')}>{m.text}</span>
      {(m.time || m.source) && (
        <span className="cav-msg__meta">
          {m.source && <span className="cav-source">{m.source}</span>}
          {m.time && <span>{m.time}</span>}
        </span>
      )}
    </div>
  );
}
