import { AccentTitle } from '../_shared/AccentTitle';
import type { Foodost } from './data';
import './CounterChaos.css';

// The challenge: the tools piled on a restaurant counter, each drawn as its own object (tablet, paper ticket,
// frozen till, spreadsheet, price tag, phone). Real list markup; the objects are CSS decoration.
// Port of Atlas `CounterChaos.astro`.
export function CounterChaos({ challenge }: { challenge: Foodost['challenge'] }) {
  return (
    <div className="fd-chaos" data-cine-inview="">
      <ol className="fd-chaos__board">
        {challenge.pains.map((pain) => (
          <li key={pain.kind} className="fd-note" data-kind={pain.kind}>
            <span className="fd-note__flag" aria-hidden="true">
              {pain.kind === 'till' && (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M2 8.8a15 15 0 0 1 20 0M5 12.5a10 10 0 0 1 14 0M8.5 16.4a5 5 0 0 1 7 0M12 20h.01" />
                  <path d="M3 3l18 18" />
                </svg>
              )}
              {pain.kind === 'phone' && (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <circle cx="9" cy="10" r="2" />
                  <path d="M21 16l-5-5-8 8" />
                </svg>
              )}
              {pain.flag}
            </span>
            <p className="fd-note__tool">{pain.tool}</p>
            <h3 className="fd-note__title">{pain.title}</h3>
            <p className="fd-note__text">{pain.text}</p>
          </li>
        ))}
      </ol>
      <AccentTitle as="p" title={challenge.closing} accent={challenge.closingAccent} className="fd-chaos__closing" />
    </div>
  );
}
