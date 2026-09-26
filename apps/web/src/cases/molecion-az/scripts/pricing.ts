// Port of Atlas `src/scripts/cases/molecion/pricing.ts`.
// The pricing chain fills left to right — cost, rate, coefficient, cost in manat, margin, shelf price — and
// holds on the finished chain before starting again. Values are masked in the markup, so the motion carries the
// order of the steps and nothing else. The static HTML shows the whole chain filled.
import { createCleanup, reducedMotion, type Cleanup } from '../../_shared/scripts/motion';
import { chainHold } from '../data';
import { playScene, setFlag, snapshotAttributes } from './clock';

function setup(root: HTMLElement): Cleanup | undefined {
  const steps = Array.from(root.querySelectorAll<HTMLElement>('[data-step]'));
  if (!steps.length) return;
  const cycle = chainHold * (steps.length + 3);

  const cleanup = createCleanup();
  cleanup.add(snapshotAttributes([root], ['data-js']));
  cleanup.add(snapshotAttributes(steps, ['data-on', 'data-current']));
  cleanup.add(
    playScene(root, cycle, (t) => {
      setFlag(root, 'data-js', true);
      const state = Math.min(steps.length, Math.floor(t / chainHold));
      steps.forEach((step, i) => {
        setFlag(step, 'data-on', i < state);
        setFlag(step, 'data-current', i === state - 1 && state < steps.length);
      });
    }),
  );
  return cleanup.run;
}

export function initChain(): Cleanup {
  if (reducedMotion()) return () => {};
  const cleanup = createCleanup();
  document.querySelectorAll<HTMLElement>('[data-mo-chain]').forEach((root) => cleanup.add(setup(root)));
  return cleanup.run;
}
