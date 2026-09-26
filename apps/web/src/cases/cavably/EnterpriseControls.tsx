import { cx } from '../_shared/cx';
import type { CavablyCopy } from './i18n';
import './EnterpriseControls.css';

// Port of Atlas `cases/cavably/EnterpriseControls.astro` (entrance via the kit's `data-cine-inview`).

export function EnterpriseControls({ t, className }: { t: CavablyCopy; className?: string }) {
  const { sso, audit, sla, roles } = t.engineering.controls;
  return (
    <div className={cx('cav cav-ent', className)} role="img" aria-label={t.engineering.controls.ariaLabel} data-cine-inview="">
      <div className="cav-ui cav-ent__card">
        <p className="cav-ent__head">
          <span className="cav-ent__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 7a3 3 0 1 1-3 3M12 10H3v3M6 10v3M21 12a9 9 0 1 1-3.2-6.9" />
            </svg>
          </span>
          <b>{sso.title}</b>
          <span className="cav-ent__pill">{sso.protocols}</span>
        </p>
        <div className="cav-ent__route">
          <span className="cav-ent__domain">{sso.domain}</span>
          <span className="cav-ent__arrow">
            <i />
          </span>
          <span className="cav-ent__idp">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
              <path d="M12 3l8 3v6c0 4.4-3.4 8-8 9-4.6-1-8-4.6-8-9V6z" />
            </svg>
            {sso.target}
          </span>
        </div>
        <dl className="cav-ent__fields">
          {sso.fields.map((field, i) => (
            <div key={i}>
              <dt>{field.label}</dt>
              <dd>{field.value}</dd>
            </div>
          ))}
        </dl>
        <p className="cav-ent__foot">
          <span>{sso.role}</span>
          <span className="cav-ent__ok">{sso.status}</span>
        </p>
      </div>

      <div className="cav-ui cav-ent__card">
        <p className="cav-ent__head">
          <span className="cav-ent__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 4h10v16H7zM10 8h4M10 12h4M10 16h2" />
            </svg>
          </span>
          <b>{audit.title}</b>
        </p>
        <p className="cav-ent__lock">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
            <path d="M6 11h12v9H6zM8.5 11V8a3.5 3.5 0 0 1 7 0v3" />
          </svg>
          {audit.note}
        </p>
        <ul className="cav-ent__log">
          {audit.rows.map((row, i) => (
            <li key={i}>
              <time>{row.time}</time>
              <b>{row.who}</b>
              <span>{row.what}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="cav-ui cav-ent__card">
        <p className="cav-ent__head">
          <span className="cav-ent__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <circle cx="12" cy="13" r="7.5" />
              <path d="M12 9v4l2.5 2M10 3h4" />
            </svg>
          </span>
          <b>{sla.title}</b>
          <span className="cav-ent__bad">{sla.overdue}</span>
        </p>
        <p className="cav-ent__policy">{sla.policy}</p>
        <ul className="cav-ent__timers">
          {sla.rows.map((row, i) => (
            <li key={i}>
              <span className="cav-ent__timer-label">
                <span>{row.label}</span>
                <b>{row.value}</b>
              </span>
              <span className="cav-ent__track" data-level={i}>
                <i />
              </span>
            </li>
          ))}
        </ul>
        <p className="cav-ent__hours">{sla.hours}</p>
      </div>

      <div className="cav-ui cav-ent__card">
        <p className="cav-ent__head">
          <span className="cav-ent__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 19v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 17.5V19M10 10.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM18 8v6M15 11h6" />
            </svg>
          </span>
          <b>{roles.title}</b>
          <span className="cav-ent__pill">{roles.role}</span>
        </p>
        <ul className="cav-ent__perms">
          {roles.permissions.map((perm, i) => (
            <li key={i}>
              <span>{perm.label}</span>
              <span className="cav-ent__switch" data-on={perm.on ? '' : undefined}>
                <i />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
