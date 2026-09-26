import { FeatureGrid } from '../_shared/FeatureGrid';
import { IntegrationOrbit } from '../_shared/IntegrationOrbit';
import type { EtehsilCopy } from './i18n';
import './Engineering.css';

/** Port of Atlas `cases/etehsil/Engineering.astro`. */
export function Engineering({ c }: { c: EtehsilCopy['engineering'] }) {
  const iso = c.isolation;
  const lang = c.languages;
  return (
    <>
      <div className="et-eng mt-14 lg:mt-20">
        <div className="et-iso" role="img" aria-label={iso.label} data-cine-inview="">
          <div className="et-iso__tenants">
            {iso.tenants.map((tenant, i) => (
              <div key={tenant} className="et-iso__tenant" data-t={i}>
                <svg viewBox="0 0 16 16" aria-hidden="true">
                  <rect x="3" y="7" width="10" height="7" rx="1.5" />
                  <path d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2" />
                </svg>
                <b>{tenant}</b>
              </div>
            ))}
          </div>
          <div className="et-iso__lanes">
            {iso.tenants.map((tenant, i) => (
              <span key={tenant} className="et-iso__lane" data-t={i}>
                <i />
                <i />
              </span>
            ))}
            <span className="et-iso__wall" />
            <span className="et-iso__intruder" />
            <span className="et-iso__blocked">✕ {iso.blocked}</span>
          </div>
          <div className="et-iso__db">
            <p className="et-iso__db-head">
              <b>{iso.database}</b>
              <span>{iso.policy}</span>
            </p>
            <div className="et-iso__shelves">
              {iso.tenants.map((tenant, i) => (
                <span key={tenant} data-t={i}>
                  <i />
                  <i />
                  <i />
                  <i />
                </span>
              ))}
            </div>
          </div>
        </div>

        <FeatureGrid items={c.principles} columns={2} className="et-eng__principles" />
      </div>

      <div className="et-eng__integrations mt-16 lg:mt-24">
        <div>
          <h3 className="cine-eyebrow">{c.integrationsTitle}</h3>
          <IntegrationOrbit center={{ brand: 'eTəhsil' }} nodes={c.integrations} highlightEvery={2} className="et-eng__orbit mt-6" />
        </div>
        <div>
          <ul className="et-eng__systems">
            {c.integrations.map((system) => (
              <li key={system.name}>
                <b>{system.name}</b>
                <span>{system.note}</span>
              </li>
            ))}
          </ul>
          <div className="et-lang mt-10" aria-hidden="true">
            <p className="et-lang__title">{lang.title}</p>
            <div className="et-lang__table">
              {lang.codes.map((code, i) => (
                <b key={code} data-col={i}>
                  {code}
                </b>
              ))}
              {lang.words.map((row) =>
                row.map((word, i) => (
                  <span key={`${row[0]}-${i}`} data-col={i}>
                    {word}
                  </span>
                )),
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
