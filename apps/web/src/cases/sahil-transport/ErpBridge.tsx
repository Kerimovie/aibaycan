// "What comes next": the fleet data platform built for Sahil Transport → Aibaycan Logistics ERP.
// Port of Atlas `src/components/cases/sahil-transport/ErpBridge.astro`. Atlas linked its product page
// (`work/logistics-erp`); Aibaycan has none, so the CTA goes to `/contact` (see cases/README.md → Rebrand rule).
import { CineLink } from '../_shared/CineLink';
import { cx } from '../_shared/cx';
import type { SahilTransportCopy } from './i18n';
import './ErpBridge.css';

export function ErpBridge({ erp: e, productHref, className }: { erp: SahilTransportCopy['erp']; productHref: string; className?: string }) {
  return (
    <div className={cx('st-bridge', className)}>
      <div className="st-bridge__card" data-kind="from">
        <p className="st-bridge__label">{e.from.label}</p>
        <h3 className="st-bridge__title">{e.from.title}</h3>
        <ul className="st-bridge__done">
          {e.from.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="st-bridge__road" aria-hidden="true">
        <span className="st-bridge__lane"></span>
        <svg className="st-bridge__truck" viewBox="0 0 64 34">
          <rect x="2" y="3" width="44" height="28" rx="3"></rect>
          <rect x="45" y="5" width="17" height="24" rx="4" className="st-bridge__cab"></rect>
          <rect x="52" y="9" width="7" height="16" rx="2" className="st-bridge__glass"></rect>
        </svg>
      </div>

      <div className="st-bridge__card" data-kind="to">
        <p className="st-bridge__label">{e.to.label}</p>
        <h3 className="st-bridge__title" lang="en">
          {e.to.title}
        </h3>
        <ul className="st-bridge__chips">
          {e.to.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <CineLink className="cine-btn cine-btn--primary st-bridge__cta" href={productHref}>
          {e.cta}
          <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6"></path>
          </svg>
        </CineLink>
      </div>
    </div>
  );
}
