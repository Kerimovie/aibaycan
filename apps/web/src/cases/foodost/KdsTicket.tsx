import { channelLabel, courseLabel, dish, stationLabel, type Foodost, type Ticket } from './data';
import { ageTone, timer } from './scripts/format';
import './KdsTicket.css';

// One ticket on the kitchen display. `data-step` (0–10) is the progress towards "late" at 10 minutes,
// so the bar needs no inline style; scripts/kds.ts updates it with the timer. Port of Atlas `KdsTicket.astro`.
export function KdsTicket({ t, ticket }: { t: Foodost; ticket: Ticket }) {
  const step = Math.min(10, Math.floor(ticket.elapsed / 60));
  return (
    <li className="fd-kt" data-channel={ticket.channel} data-tone={ageTone(ticket.elapsed)} data-elapsed={ticket.elapsed} data-step={step}>
      <p className="fd-kt__head">
        <span className="fd-kt__ch">{channelLabel(t, ticket.channel)}</span>
        <span className="fd-kt__code" data-fd-code="">
          #{ticket.code}
        </span>
      </p>
      <p className="fd-kt__place" data-fd-place="">
        {ticket.place}
      </p>
      <p className="fd-kt__meta">
        {courseLabel(t, ticket.course)} · {stationLabel(t, ticket.station)}
      </p>
      <ul className="fd-kt__items">
        {ticket.items.map((item, i) => (
          <li key={i}>
            <b>{item.q}</b>
            <span>
              {dish(t, item.dish).name}
              {item.mod && <em>{item.mod}</em>}
            </span>
          </li>
        ))}
      </ul>
      <div className="fd-kt__foot">
        <span className="fd-kt__timer" data-fd-timer="">
          {timer(ticket.elapsed)}
        </span>
        <span className="fd-kt__bump">{t.kitchen.screen.ready}</span>
      </div>
      <span className="fd-kt__bar">
        <i />
      </span>
    </li>
  );
}
