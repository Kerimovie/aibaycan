// Port of Atlas `src/scripts/cases/molecion/parse.ts`.
// Reading the line. Desktop: the printed line is sticky and the reader's scroll through the four step cards
// decides how far the peel has got. Below `lg` the states play in a loop while the scene is on screen.
// The static HTML shows the finished parse, so nothing is hidden until the script runs.
import { clamp, createCleanup, rafThrottle, reducedMotion, watchVisibility, type Cleanup } from '../../_shared/scripts/motion';
import { parseHold } from '../data';
import { playScene, setData, setFlag, snapshotAttributes } from './clock';

function setup(root: HTMLElement): Cleanup | undefined {
  const steps = Array.from(root.querySelectorAll<HTMLElement>('.mo-parse__steps > li'));
  const marks = Array.from(root.querySelectorAll<HTMLElement>('[data-step]')).map((el) => ({
    el,
    step: Number(el.dataset.step),
  }));
  const last = steps.length;
  if (!last) return;
  let current = -1;

  const restore = createCleanup();
  restore.add(snapshotAttributes([root], ['data-state', 'data-js']));
  restore.add(snapshotAttributes(marks.map(({ el }) => el), ['data-on']));
  restore.add(snapshotAttributes(steps, ['data-current']));

  const apply = (state: number) => {
    if (state === current) return;
    current = state;
    setFlag(root, 'data-js', true);
    setData(root, 'state', state);
    for (const { el, step } of marks) setFlag(el, 'data-on', step <= state);
    steps.forEach((step, i) => setFlag(step, 'data-current', i + 1 === state));
  };

  const update = () => {
    const line = window.innerHeight * 0.62;
    const passed = steps.filter((step) => step.getBoundingClientRect().top < line).length;
    apply(clamp(passed, 0, last));
  };
  const onScroll = rafThrottle(update);
  let listening = false;
  let stopWatching: Cleanup | undefined;
  let stopLoop: Cleanup | undefined;

  const startScroll = () => {
    stopWatching = watchVisibility(
      root,
      (visible) => {
        if (visible && !listening) {
          update();
          window.addEventListener('scroll', onScroll, { passive: true });
          listening = true;
        } else if (!visible && listening) {
          window.removeEventListener('scroll', onScroll);
          listening = false;
        }
      },
      '200px 0px',
    );
  };
  const stopScroll = () => {
    stopWatching?.();
    stopWatching = undefined;
    if (listening) {
      window.removeEventListener('scroll', onScroll);
      listening = false;
    }
    onScroll.cancel();
  };

  // The mode follows the viewport for the life of the page: a tablet rotated into landscape, or a window
  // dragged across 1024 px, used to keep whichever mode happened to match when the script first ran.
  const wide = window.matchMedia('(min-width: 1024px)');
  const applyMode = () => {
    if (wide.matches) {
      stopLoop?.();
      stopLoop = undefined;
      if (!stopWatching) startScroll();
    } else {
      stopScroll();
      if (!stopLoop) stopLoop = playScene(root, parseHold * (last + 2), (t) => apply(Math.min(last, Math.floor(t / parseHold))));
    }
  };
  wide.addEventListener('change', applyMode);
  applyMode();

  return () => {
    wide.removeEventListener('change', applyMode);
    stopScroll();
    stopLoop?.();
    stopLoop = undefined;
    restore.run();
  };
}

export function initParse(): Cleanup {
  if (reducedMotion()) return () => {};
  const cleanup = createCleanup();
  document.querySelectorAll<HTMLElement>('[data-mo-parse]').forEach((root) => cleanup.add(setup(root)));
  return cleanup.run;
}
