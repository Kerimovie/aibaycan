import { DefinitionRows } from '../_shared/DefinitionRows';
import type { EtehsilCopy } from './i18n';
import './Attendance.css';

const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0', '⌫'];

/** Port of Atlas `cases/etehsil/Attendance.astro`. */
export function Attendance({ c }: { c: EtehsilCopy['attendance'] }) {
  const tp = c.teacherPhone;
  const pp = c.parentPhone;
  return (
    <div className="et-att mt-14 lg:mt-20">
      <div className="et-att__stage et-grid-paper" data-et-scene="" data-et-phases="5" data-et-tempo="1400 1300 1300 1500 4600" data-et-phase="4">
        <div className="et-phone et-att__phone" role="img" aria-label={tp.label}>
          <span className="et-phone__notch" />
          <div className="et-screen et-att__screen">
            <div className="et-att__head">
              <p className="et-label">{tp.time}</p>
              <p className="et-att__group">{tp.group}</p>
              <p className="et-att__topic">{tp.topic}</p>
            </div>
            <p className="et-att__all" data-et-at="1" data-et-on="">
              ✓ {tp.allPresent}
            </p>
            <ul className="et-att__list">
              {tp.students.map((student, i) => {
                const absent = i === tp.absentIndex;
                return (
                  <li key={student}>
                    <span>{student}</span>
                    <span className="et-att__marks">
                      <b
                        className="et-mark"
                        data-mark="p"
                        data-et-at="1"
                        data-et-until={absent ? '2' : undefined}
                        data-et-on={absent ? undefined : ''}
                      >
                        {tp.marks[0]}
                      </b>
                      <b className="et-mark" data-mark="a" data-et-at={absent ? '2' : undefined} data-et-on={absent ? '' : undefined}>
                        {tp.marks[1]}
                      </b>
                      <b className="et-mark" data-mark="e">
                        {tp.marks[2]}
                      </b>
                    </span>
                  </li>
                );
              })}
            </ul>
            <p className="et-att__save">
              <span className="et-button" data-et-until="3">
                {tp.save}
              </span>
              <span className="et-chip" data-tone="ok" data-et-at="3" data-et-on="">
                ✓ {tp.saved}
              </span>
            </p>
          </div>
        </div>

        <div className="et-att__link" aria-hidden="true">
          <svg viewBox="0 0 96 24" preserveAspectRatio="none">
            <path d="M2 12 H94" />
          </svg>
          <i data-et-at="3" data-et-on="" />
          <span>{c.sync}</span>
        </div>

        <div className="et-phone et-att__phone" role="img" aria-label={pp.label}>
          <span className="et-phone__notch" />
          <div className="et-screen et-att__screen et-att__parent">
            <div className="et-att__bar">
              <span>
                <b>{pp.portal}</b>
                {pp.centre}
              </span>
              <span className="et-chip" data-tone="info">
                {pp.access}
              </span>
            </div>

            <div className="et-att__overview">
              <p className="et-att__child">{pp.child}</p>
              <p className="et-att__tabs">
                {pp.tabs.map((tab, i) => (
                  <span key={tab} data-active={i === 0 ? '' : undefined}>
                    {tab}
                  </span>
                ))}
              </p>
              <div className="et-att__kpis">
                {pp.kpis.map((kpi) => (
                  <p key={kpi.label}>
                    <span className="et-label">{kpi.label}</span>
                    <b className="et-num">{kpi.value}</b>
                  </p>
                ))}
              </div>
              <ul className="et-att__history">
                {pp.history.map((row, i) => (
                  <li
                    key={row.when}
                    data-status={i === 0 ? 'absent' : 'present'}
                    data-et-at={i === 0 ? '3' : undefined}
                    data-et-on={i === 0 ? '' : undefined}
                  >
                    <span>{row.when}</span>
                    <span className="et-chip" data-tone={i === 0 ? 'bad' : 'ok'}>
                      {row.status}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="et-att__pin" data-et-until="3">
              <p className="et-att__pin-title">{pp.pin}</p>
              <p className="et-att__dots">
                <i data-et-at="1" />
                <i data-et-at="1" />
                <i data-et-at="2" />
                <i data-et-at="2" />
              </p>
              <p className="et-att__keys">
                {keys.map((key, i) => (
                  <span key={i}>{key}</span>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>

      <DefinitionRows items={c.points} />
    </div>
  );
}
