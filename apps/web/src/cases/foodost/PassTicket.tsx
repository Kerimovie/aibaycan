import { channelLabel, courseLabel, dish, type Foodost, type Ticket } from './data';
import { ageTone, timer } from './scripts/format';
import './PassTicket.css';

// One paper kitchen ticket hanging on the pass (hero). Timer and tone are updated by scripts/pass.ts.
// Port of Atlas `PassTicket.astro`.
export function PassTicket({ t, ticket }: { t: Foodost; ticket: Ticket }) {
  return (
    <li className="fd-tk" data-channel={ticket.channel} data-tone={ageTone(ticket.elapsed)} data-elapsed={ticket.elapsed}>
      <div className="fd-tk__paper">
        <p className="fd-tk__head">
          <span className="fd-tk__ch">
            <i />
            {channelLabel(t, ticket.channel)}
          </span>
          <span data-fd-code="">#{ticket.code}</span>
        </p>
        <p className="fd-tk__place" data-fd-place="">
          {ticket.place}
        </p>
        <p className="fd-tk__course">{courseLabel(t, ticket.course)}</p>
        <ul className="fd-tk__items">
          {ticket.items.map((item, i) => (
            <li key={i}>
              <b>{item.q}×</b>
              <span>
                {dish(t, item.dish).name}
                {item.mod && <em>{item.mod}</em>}
              </span>
            </li>
          ))}
        </ul>
        <p className="fd-tk__foot">
          <span className="fd-tk__timer" data-fd-timer="">
            {timer(ticket.elapsed)}
          </span>
        </p>
      </div>
    </li>
  );
}
