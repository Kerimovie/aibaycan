import type { CaseBase } from '../types';
import { Chapter } from './Chapter';
import type { SurfaceTone } from './Surface';
import './CaseStack.css';

/** Port of Atlas `cases/CaseStack.astro`. */
export function CaseStack({ stack, id = 'stack', tone = 'asphalt' }: { stack: CaseBase['stack']; id?: string; tone?: SurfaceTone }) {
  return (
    <Chapter id={id} tone={tone} eyebrow={stack.eyebrow} title={stack.title}>
      <dl className="case-stack mt-12 lg:mt-16">
        {stack.groups.map((group) => (
          <div key={group.label}>
            <dt>{group.label}</dt>
            <dd>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Chapter>
  );
}
