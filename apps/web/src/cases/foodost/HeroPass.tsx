import type { Foodost } from './data';
import { PassTicket } from './PassTicket';
import './HeroPass.css';

// Hero signature: kitchen tickets from every channel hang on the pass and get bumped one by one,
// above the five apps that share one API. Decorative motion; the whole scene is one labelled image.
// Port of Atlas `HeroPass.astro`. The ticket pool is a `hidden` div instead of a `<template>` (React cannot hydrate
// template content); scripts/pass.ts reads it the same way.
export function HeroPass({ t }: { t: Foodost }) {
  const { heroVisual: hv, service } = t;
  const onRail = service.tickets.slice(0, 4);
  const pool = service.tickets.slice(4);
  const ready = service.tickets.slice(4, 7).map((ticket) => ticket.place);

  return (
    <div className="fd-pass" role="img" aria-label={hv.label} data-fd-pass="">
      <div className="fd-pass__head">
        <span className="fd-pass__live">
          <i />
          {hv.service} · {service.venue}
        </span>
        <span className="fd-pass__clock" data-fd-clock="">
          {hv.clock}
        </span>
      </div>

      <div className="fd-pass__rail">
        <p className="fd-pass__label">{hv.rail}</p>
        <span className="fd-pass__bar" />
        <div className="fd-pass__viewport">
          <ol className="fd-pass__tickets" data-fd-tickets="">
            {onRail.map((ticket) => (
              <PassTicket key={ticket.code} t={t} ticket={ticket} />
            ))}
          </ol>
        </div>
        <ol hidden data-fd-pool="">
          {pool.map((ticket) => (
            <PassTicket key={ticket.code} t={t} ticket={ticket} />
          ))}
        </ol>
        <div className="fd-pass__shelf">
          <p className="fd-pass__shelf-label">{hv.ready}</p>
          <ol className="fd-pass__plates" data-fd-plates="">
            {ready.map((place, i) => (
              <li key={i}>
                <i className="fd-plate" />
                <span>{place}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="fd-pass__bus">
        <p className="fd-pass__api">
          <b>{hv.api}</b>
          <span className="fd-pass__line">
            <i />
          </span>
        </p>
        <ul className="fd-pass__apps">
          {hv.apps.map((app) => (
            <li key={app}>{app}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
