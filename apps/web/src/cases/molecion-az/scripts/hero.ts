// Port of Atlas `src/scripts/cases/molecion/hero.ts`.
// Hero: the printed line is peeled from the right, one field per beat (states 1–4), the identity card locks
// (5), then the cost→price chain fills and the price is stamped (6). The cycle pauses on the finished state
// before starting again. Static HTML already renders state 6, so nothing here adds content.
import { createCleanup, reducedMotion, type Cleanup } from '../../_shared/scripts/motion';
import { heroHold, heroPause, heroStates } from '../data';
import { playScene, setData, setFlag, snapshotAttributes } from './clock';

function setup(root: HTMLElement): Cleanup | undefined {
  const steps = Array.from(root.querySelectorAll<HTMLElement>('[data-step]')).map((el) => ({
    el,
    step: Number(el.dataset.step),
  }));
  if (!steps.length) return;

  const cleanup = createCleanup();
  cleanup.add(snapshotAttributes([root], ['data-state', 'data-js']));
  cleanup.add(snapshotAttributes(steps.map(({ el }) => el), ['data-on']));

  const apply = (state: number) => {
    setData(root, 'state', state);
    for (const { el, step } of steps) setFlag(el, 'data-on', step <= state);
  };

  // `data-js` is set on the first frame, not at load: if the clock never runs (hidden tab, no observer) the
  // static end state stays on screen instead of a dimmed one.
  const cycle = heroStates * heroHold + heroPause;
  cleanup.add(
    playScene(root, cycle, (t) => {
      setFlag(root, 'data-js', true);
      apply(Math.min(heroStates - 1, Math.floor(t / heroHold)));
    }),
  );
  return cleanup.run;
}

export function initHero(): Cleanup {
  if (reducedMotion()) return () => {};
  const cleanup = createCleanup();
  document.querySelectorAll<HTMLElement>('[data-mo-hero]').forEach((root) => cleanup.add(setup(root)));
  return cleanup.run;
}
