import type { CaseBase } from '../types';
import { Chapter } from './Chapter';
import type { SurfaceTone } from './Surface';
import './CaseRole.css';

/** Port of Atlas `cases/CaseRole.astro` (“What Aibaycan did”). */
export function CaseRole({ role, id = 'role', tone = 'navy' }: { role: CaseBase['role']; id?: string; tone?: SurfaceTone }) {
  return (
    <Chapter id={id} tone={tone} eyebrow={role.eyebrow} title={role.title}>
      <ol className="case-role mt-14 lg:mt-20">
        {role.items.map((item, index) => (
          <li key={item.title}>
            <span className="case-role__no" aria-hidden="true">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="case-role__title">{item.title}</h3>
            <p className="cine-text">{item.text}</p>
          </li>
        ))}
      </ol>
    </Chapter>
  );
}
