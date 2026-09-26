import { cx } from '../_shared/cx';
import { ChannelIcon } from './ChannelIcon';
import { ChatMessage } from './ChatMessage';
import type { CavablyCopy } from './i18n';
import './InboxScreen.css';

// Port of Atlas `cases/cavably/InboxScreen.astro` (entrance via the kit's `data-cine-inview`).

// App navigation glyphs (inbox, customers, calendar, deals, flows, analytics).
const nav = [
  'M4 13h4l2 3h4l2-3h4M4 13l2.5-7h11l2.5 7v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z',
  'M16 19v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 17.5V19M10 10.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM20 19v-1.5a3.5 3.5 0 0 0-2.5-3.3M15.5 4.6a3 3 0 0 1 0 5.8',
  'M5 6h14a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zM4 10h16M8 3.5v4M16 3.5v4',
  'M5 5h3.5v14H5zM10.25 5h3.5v9h-3.5zM15.5 5H19v6h-3.5z',
  'M6 4.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM18 15.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM8 6.5h5a3 3 0 0 1 3 3v6',
  'M4 20h16M7 16v-5M12 16V6M17 16v-8',
];

export function InboxScreen({ t, className }: { t: CavablyCopy; className?: string }) {
  const s = t.inbox.screen;
  const active = s.list[0];
  return (
    <div className={cx('cav cav-ui cav-inbox', className)} role="img" aria-label={s.ariaLabel} data-cine-inview="">
      <nav className="cav-inbox__nav">
        <span className="cav-inbox__logo">C</span>
        {nav.map((d, i) => (
          <span key={i} className="cav-inbox__nav-item" data-active={i === 0 ? '' : undefined}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d={d} />
            </svg>
          </span>
        ))}
      </nav>

      <div className="cav-inbox__list">
        <div className="cav-inbox__list-head">
          <b>{s.title}</b>
          <span className="cav-inbox__search">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <circle cx="11" cy="11" r="6.5" />
              <path d="M16 16l4 4" />
            </svg>
            {s.search}
          </span>
          <span className="cav-inbox__tabs">
            {s.tabs.map((tab, i) => (
              <span key={i} data-active={i === 0 ? '' : undefined}>
                {tab.label}
                <em>{tab.count}</em>
              </span>
            ))}
          </span>
        </div>
        <ul>
          {s.list.map((c, i) => (
            <li key={i} className="cav-inbox__row" data-active={i === 0 ? '' : undefined}>
              <span className="cav-avatar">
                {c.name.charAt(0)}
                <ChannelIcon channel={c.channel} chip />
              </span>
              <span className="cav-inbox__row-body">
                <b>{c.name}</b>
                <span>{c.text}</span>
              </span>
              <span className="cav-inbox__row-side">
                <time>{c.time}</time>
                <span className="cav-state" data-state={c.state}>
                  {t.states[c.state]}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="cav-inbox__thread">
        <div className="cav-inbox__strip">
          {s.list.map((c, i) => (
            <span key={i} className="cav-avatar" data-active={i === 0 ? '' : undefined}>
              {c.name.charAt(0)}
              <ChannelIcon channel={c.channel} chip />
            </span>
          ))}
        </div>
        <div className="cav-inbox__thread-head">
          <span className="cav-avatar">
            {s.thread.name.charAt(0)}
            {active && <ChannelIcon channel={active.channel} chip />}
          </span>
          <span className="cav-inbox__who">
            <b>{s.thread.name}</b>
            <span>{s.thread.meta}</span>
          </span>
          <span className="cav-inbox__assign">{s.thread.assign}</span>
        </div>
        <div className="cav-msgs cav-inbox__msgs">
          {s.thread.messages.map((m, i) => (
            <ChatMessage key={i} message={m} />
          ))}
        </div>
        <div className="cav-inbox__foot">
          <p className="cav-inbox__collision">
            <span className="cav-dots">
              <i />
              <i />
              <i />
            </span>
            {s.thread.collision}
          </p>
          <div className="cav-inbox__quick">
            {s.thread.quickReplies.map((q, i) => (
              <p key={i} data-active={i === 0 ? '' : undefined}>
                <b>{q.key}</b>
                <span>{q.text}</span>
              </p>
            ))}
          </div>
          <p className="cav-inbox__composer">
            <span className="cav-inbox__typed">{s.thread.composer}</span>
            <i className="cav-inbox__caret" />
          </p>
        </div>
      </div>

      <aside className="cav-inbox__profile">
        <div className="cav-inbox__card">
          <span className="cav-avatar cav-inbox__big">{s.thread.name.charAt(0)}</span>
          <b>{s.thread.name}</b>
          <span className="cav-label">{s.profile.title}</span>
          <span className="cav-inbox__tags">
            {s.profile.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </span>
        </div>
        <dl className="cav-inbox__facts">
          {s.profile.rows.map((row, i) => (
            <div key={i} data-tone={i === 2 ? 'debt' : undefined}>
              <dt>{row.label}</dt>
              <dd>{row.value}</dd>
            </div>
          ))}
        </dl>
        <p className="cav-inbox__note">{s.profile.note}</p>
      </aside>
    </div>
  );
}
