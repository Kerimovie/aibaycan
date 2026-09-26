import { cx } from '../_shared/cx';
import { ChannelIcon } from './ChannelIcon';
import type { CavablyCopy } from './i18n';
import './BookingBoard.css';

// Port of Atlas `cases/cavably/BookingBoard.astro`. Driven by `scripts/booking.ts` (via CavablyEffects).

// 16 half-hour rows from 10:00; a label on every full hour.
const hours = Array.from({ length: 8 }, (_, i) => `${10 + i}:00`);
// "Service · Customer" → two lines inside a calendar block.
const split = (label: string) => {
  const [service = '', ...rest] = label.split(' · ');
  return { service, who: rest.join(' · ') };
};

export function BookingBoard({ t, className }: { t: CavablyCopy; className?: string }) {
  const { calendar: cal, debts } = t.bookings;
  const booking = split(cal.booking.label);
  const moved = split(cal.moved.label);
  return (
    <div className={cx('cav cav-book', className)}>
      <div className="cav-sheet cav-book__cal" role="img" aria-label={cal.ariaLabel} data-cav-booking="">
        <div className="cav-sheet__head">
          <span className="cav-book__title">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M5 6h14a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zM4 10h16M8 3.5v4M16 3.5v4" />
            </svg>
            <span>
              {cal.today} <small>{cal.day}</small>
            </span>
          </span>
          <span className="cav-book__incoming" data-cav-booking-chat="">
            <ChannelIcon channel={cal.incoming.channel} chip />
            <span>
              <b>{cal.incoming.name}</b> {cal.incoming.text}
            </span>
          </span>
        </div>

        <div className="cav-book__grid">
          <span className="cav-book__corner" />
          {cal.staff.map((name, i) => (
            <span key={`s${i}`} className="cav-book__staff" data-col={i}>
              <i>{name.charAt(0)}</i> {name}
            </span>
          ))}
          {hours.map((label, i) => (
            <span key={`h${i}`} className="cav-book__hour" data-row={i * 2} data-span="2">
              {label}
            </span>
          ))}
          {cal.staff.map((_, i) => (
            <span key={`l${i}`} className="cav-book__lane" data-col={i} />
          ))}
          {cal.blocks.map((block, i) => {
            const { service, who } = split(block.label);
            return (
              <span key={`b${i}`} className="cav-book__block" data-service={block.kind} data-col={block.staff} data-row={block.row} data-span={block.span}>
                <b>{service}</b>
                <span>{who}</span>
              </span>
            );
          })}
          <span
            className="cav-book__block"
            data-kind="new"
            data-col={cal.booking.staff}
            data-row={cal.booking.row}
            data-span={cal.booking.span}
            data-cav-booking-new=""
          >
            <b>{`✓ ${booking.service}`}</b>
            <span>{booking.who}</span>
          </span>
          <span
            className="cav-book__block"
            data-kind="ghost"
            data-col={cal.moved.from}
            data-row={cal.moved.row}
            data-span={cal.moved.span}
            data-cav-booking-ghost=""
          >
            <b>{moved.service}</b>
            <span>{moved.who}</span>
          </span>
          <span
            className="cav-book__block"
            data-kind="moved"
            data-col={cal.moved.staff}
            data-row={cal.moved.row}
            data-span={cal.moved.span}
            data-cav-booking-moved=""
          >
            <b>{moved.service}</b>
            <span>{moved.who}</span>
          </span>
        </div>

        <div className="cav-book__toasts" data-cav-booking-toasts="">
          <p data-tone="ok" data-toast="confirmed">
            {cal.confirmed}
          </p>
          <p data-tone="bad" data-toast="clash">
            {cal.clash}
          </p>
          <p data-tone="info" data-toast="moved">
            {cal.movedNote}
          </p>
        </div>
      </div>

      <div className="cav-sheet cav-book__debts" role="img" aria-label={debts.ariaLabel}>
        <div className="cav-sheet__head">
          <span className="cav-book__title">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 7h18v10H3zM3 11h18M7 15h3" />
            </svg>
            {debts.title}
          </span>
        </div>
        <ul className="cav-book__rows">
          {debts.rows.map((row, i) => (
            <li key={i}>
              <span className="cav-book__who">
                <b>{row.name}</b>
                <span>{row.item}</span>
              </span>
              <span className="cav-book__amount">
                <b>{row.amount}</b>
                <span>{row.due}</span>
              </span>
              <span className="cav-book__status" data-tone={row.tone}>
                {row.status}
              </span>
            </li>
          ))}
        </ul>
        <div className="cav-book__wa">
          <p className="cav-book__wa-head">
            <ChannelIcon channel={debts.message.channel} chip />
            <span>{debts.rows[1]?.name}</span>
            <em>{debts.message.meta}</em>
          </p>
          <p className="cav-book__wa-text">{debts.message.text}</p>
        </div>
      </div>
    </div>
  );
}
