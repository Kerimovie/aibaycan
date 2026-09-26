import { dish, type Foodost } from './data';
import { money } from './scripts/format';
import './PosOffline.css';

// Offline-first POS on a tablet with its sync queue. Without JavaScript it shows the offline moment
// (banner on, four actions queued); scripts/pos.ts loops online → offline → queue grows → back online → queue drains.
// Port of Atlas `PosOffline.astro`.
const tables: { no: number; state: string; active?: boolean }[] = [
  { no: 1, state: 'busy' },
  { no: 2, state: 'free' },
  { no: 3, state: 'bill' },
  { no: 4, state: 'busy' },
  { no: 5, state: 'reserved' },
  { no: 6, state: 'free' },
  { no: 7, state: 'busy', active: true },
  { no: 8, state: 'busy' },
  { no: 9, state: 'free' },
  { no: 10, state: 'bill' },
  { no: 11, state: 'busy' },
  { no: 12, state: 'reserved' },
];

export function PosOffline({ t, locale, label }: { t: Foodost; locale: string; label: string }) {
  const { screen, queue } = t.pos;
  const lines = screen.lines.map((line) => ({ ...line, name: dish(t, line.dish).name, amount: dish(t, line.dish).price * line.q }));
  const total = lines.filter((line) => !line.void).reduce((sum, line) => sum + line.amount, 0);

  return (
    <div
      className="fd-pos"
      role="img"
      aria-label={label}
      data-fd-pos=""
      data-net="offline"
      data-net-online={screen.net.online}
      data-net-offline={screen.net.offline}
      data-net-syncing={screen.net.syncing}
      data-state-queued={queue.states.queued}
      data-state-syncing={queue.states.syncing}
      data-state-synced={queue.states.synced}
    >
      <div className="fd-pos__device">
        <div className="fd-pos__screen">
          <div className="fd-pos__top">
            <b className="fd-pos__venue">{t.service.venue}</b>
            <span className="fd-pos__zones">
              {screen.zones.map((zone, i) => (
                <span key={zone} data-active={i === 0 ? '' : undefined}>
                  {zone}
                </span>
              ))}
            </span>
            <span className="fd-pos__net" data-fd-net="">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                <path d="M2 8.8a15 15 0 0 1 20 0M5 12.5a10 10 0 0 1 14 0M8.5 16.4a5 5 0 0 1 7 0M12 20h.01" />
                <path className="fd-pos__cross" d="M3 3l18 18" />
              </svg>
              <span data-fd-net-label="">{screen.net.offline}</span>
            </span>
            <span className="fd-pos__clock">{t.pos.km}</span>
          </div>
          <p className="fd-pos__banner">{screen.banner}</p>
          <div className="fd-pos__body">
            <div className="fd-pos__floor">
              <p className="fd-pos__h">{screen.floor}</p>
              <ul className="fd-pos__tables">
                {tables.map((table) => (
                  <li key={table.no} data-state={table.state} data-active={table.active ? '' : undefined}>
                    {table.no}
                  </li>
                ))}
              </ul>
              <ul className="fd-pos__legend">
                {Object.entries(screen.tableStates).map(([state, name]) => (
                  <li key={state} data-state={state}>
                    {name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="fd-pos__menu">
              <p className="fd-pos__cats">
                {screen.categories.map((category, i) => (
                  <span key={category} data-active={i === 0 ? '' : undefined}>
                    {category}
                  </span>
                ))}
              </p>
              <ul className="fd-pos__tiles">
                {screen.tiles.map((id) => (
                  <li key={id} data-fd-tile={id} data-sold-out={id === screen.soldOut ? '' : undefined}>
                    <b>{dish(t, id).name}</b>
                    <small>{money(locale, dish(t, id).price)}</small>
                    {id === screen.soldOut && <em>{screen.soldOutLabel}</em>}
                  </li>
                ))}
              </ul>
            </div>
            <div className="fd-pos__order">
              <p className="fd-pos__h">{screen.order}</p>
              <ul className="fd-pos__lines">
                {lines.map((line, i) => (
                  <li key={i} data-void={line.void ? '' : undefined}>
                    <b>{line.q}×</b>
                    <span>
                      {line.name}
                      {line.mod && <em>{line.mod}</em>}
                      {line.void && (
                        <>
                          {' '}
                          <i>{screen.voidTag}</i>
                        </>
                      )}
                    </span>
                    <small>{money(locale, line.amount)}</small>
                  </li>
                ))}
              </ul>
              <p className="fd-pos__total">
                <span>{screen.total}</span>
                <b>{money(locale, total)} ₼</b>
              </p>
              <p className="fd-pos__actions">
                <span>{screen.split}</span>
                <span data-primary="">{screen.pay}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="fd-queue">
        <p className="fd-queue__head">
          <span>{queue.title}</span>
          <b data-fd-queue-count="">{queue.entries.length}</b>
        </p>
        <ol className="fd-queue__list" data-fd-queue="">
          {queue.entries.map((entry, i) => (
            <li key={i} data-state="queued">
              <code>L-{412 + i}</code>
              <span>{entry}</span>
              <em data-fd-state="">{queue.states.queued}</em>
            </li>
          ))}
        </ol>
        <p className="fd-queue__empty">{queue.empty}</p>
      </div>
    </div>
  );
}
