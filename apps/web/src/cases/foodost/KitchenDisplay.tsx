import type { Foodost } from './data';
import { KdsTicket } from './KdsTicket';
import { ageTone } from './scripts/format';
import './KitchenDisplay.css';

// Kitchen display: one row of live tickets from every channel. scripts/kds.ts ticks the timers, bumps the oldest
// ticket (toast: waiter notified) and slides a new order in from the pool. Port of Atlas `KitchenDisplay.astro`;
// the pool is a `hidden` list instead of a `<template>` (React cannot hydrate template content).
export function KitchenDisplay({ t, label }: { t: Foodost; label: string }) {
  const { screen } = t.kitchen;
  const tickets = t.service.tickets;
  const onScreen = tickets.slice(0, 6);
  const pool = tickets.slice(6);
  const late = onScreen.filter((ticket) => ageTone(ticket.elapsed) === 'late').length;

  return (
    <div className="fd-kds" role="img" aria-label={label} data-fd-kds="" data-toast={screen.toast}>
      <div className="fd-kds__screen">
        <div className="fd-kds__top">
          <b className="fd-kds__title">{screen.title}</b>
          <span className="fd-kds__stations">
            {Object.values(t.service.stations).map((station, i) => (
              <span key={station} data-active={i === 0 ? '' : undefined}>
                {station}
              </span>
            ))}
          </span>
          <span className="fd-kds__stats">
            <span>
              {screen.open} <b data-fd-open="">{onScreen.length}</b>
            </span>
            <span data-late="">
              {screen.late} <b data-fd-late="">{late}</b>
            </span>
          </span>
          <span className="fd-kds__clock">{t.kitchen.km}</span>
        </div>

        <ol className="fd-kds__grid" data-fd-kds-list="">
          {onScreen.map((ticket) => (
            <KdsTicket key={ticket.code} t={t} ticket={ticket} />
          ))}
        </ol>
        <ol hidden data-fd-pool="">
          {pool.map((ticket) => (
            <KdsTicket key={ticket.code} t={t} ticket={ticket} />
          ))}
        </ol>
        <p className="fd-kds__toast" data-fd-toast="" hidden />
      </div>
      <span className="fd-kds__stand" />
    </div>
  );
}
