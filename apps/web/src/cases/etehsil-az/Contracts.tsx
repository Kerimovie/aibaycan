import { DefinitionRows } from '../_shared/DefinitionRows';
import type { EtehsilCopy } from './i18n';
import './Contracts.css';

/** Port of Atlas `cases/etehsil/Contracts.astro`. */
export function Contracts({ c }: { c: EtehsilCopy['contracts'] }) {
  const s = c.screen;
  const signedAt = s.fields.length + 2;
  return (
    <div className="et-con mt-14 lg:mt-20">
      <div
        className="et-con__stage"
        role="img"
        aria-label={s.label}
        data-et-scene=""
        data-et-phases={signedAt + 2}
        data-et-tempo="1100 700 700 700 700 700 900 1300 1400 4400"
        data-et-phase={signedAt + 1}
      >
        <div className="et-screen et-con__docx">
          <p className="et-con__file">
            <b>W</b>
            {s.file}
          </p>
          <div className="et-con__page">
            <p className="et-label">{s.template}</p>
            <i className="et-con__line" data-w="70" />
            <i className="et-con__line" data-w="95" />
            <ul>
              {s.fields.map((field, i) => (
                <li key={field.key}>
                  <span>{field.label}</span>
                  <code data-et-at={String(i + 1)} data-et-on="">
                    {`{{${field.key}}}`}
                  </code>
                </li>
              ))}
            </ul>
            <i className="et-con__line" data-w="90" />
            <i className="et-con__line" data-w="60" />
          </div>
          <p className="et-con__ready">✓ {s.ready}</p>
        </div>

        <p className="et-con__arrow" aria-hidden="true">
          <span>DOCX</span>
          <b>→</b>
          <span>{s.pdf}</span>
        </p>

        <div className="et-con__pdf">
          <p className="et-con__pdf-top">
            <span className="et-con__badge">{s.pdf}</span>
            <span className="et-con__no" data-et-at="1" data-et-on="">
              № {s.fields[0]?.value}
            </span>
          </p>
          <p className="et-con__title">{s.docTitle}</p>
          <p className="et-con__party">{s.party}</p>
          <dl>
            {s.fields.slice(1).map((field, i) => (
              <div key={field.key}>
                <dt>{field.label}</dt>
                <dd data-et-at={String(i + 2)} data-et-on="">
                  {field.value}
                </dd>
              </div>
            ))}
          </dl>
          <i className="et-con__line" data-w="100" />
          <i className="et-con__line" data-w="85" />
          <p className="et-con__sign">
            <span>{s.signature}</span>
            <span>{s.party}</span>
          </p>
          <p className="et-con__stamp" data-state="awaiting" data-et-at={String(signedAt - 1)} data-et-until={String(signedAt)}>
            {s.awaiting}
          </p>
          <p className="et-con__stamp" data-state="signed" data-et-at={String(signedAt)} data-et-on="">
            ✓ {s.signed}
          </p>
        </div>
      </div>

      <DefinitionRows items={c.points} />
    </div>
  );
}
