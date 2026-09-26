import { createCleanup, listen, reducedMotion, watchVisibility, type Cleanup } from '../../_shared/scripts/motion';

// Step sequencer for mockup scenes (`[data-st-seq]`): plays `data-step` from 0 to the last step once while the
// scene is on screen, with per-step durations from `data-durations` (ms, comma-separated), then holds the final
// step. It never loops, so a reader parked on the chapter is not shown a half-revealed mockup again and again;
// leaving and re-entering the viewport replays the story. The markup ships with the final step, so the scene is
// complete without JavaScript and stays on it with reduced motion.
// Port of Atlas `src/scripts/cases/sahil-transport/sequence.ts`. Atlas imported it from three components and guarded
// with `data-st-seq-ready`; here it runs once from SahilTransportEffects, and the cleanup clears the timer, the
// guard and restores the final step.

function setup(root: HTMLElement): Cleanup {
  // Set each scene up once.
  if (root.hasAttribute('data-st-seq-ready')) return () => {};
  root.toggleAttribute('data-st-seq-ready', true);
  const initialStep = root.dataset.step;
  const durations = (root.dataset.durations ?? '')
    .split(',')
    .map(Number)
    .filter((n) => n > 0);
  const restore = () => {
    root.removeAttribute('data-st-seq-ready');
    if (initialStep === undefined) delete root.dataset.step;
    else root.dataset.step = initialStep;
  };
  if (durations.length < 2) return restore;

  let step = durations.length - 1;
  let timer = 0;
  let visible = false;

  const show = (next: number) => {
    step = next;
    root.dataset.step = String(step);
  };

  const schedule = () => {
    timer = window.setTimeout(() => {
      if (step + 1 < durations.length) {
        show(step + 1);
        schedule();
        return;
      }
      // The story is told: hold the final frame until the scene leaves and comes back.
      timer = 0;
    }, durations[step]);
  };

  const sync = () => {
    const run = visible && document.visibilityState === 'visible';
    if (run && !timer) {
      // Every visit starts from the first step, so the story is told in order.
      show(0);
      schedule();
    } else if (!run && timer) {
      window.clearTimeout(timer);
      timer = 0;
      show(durations.length - 1);
    }
  };

  const cleanup = createCleanup();
  cleanup.add(
    watchVisibility(
      root,
      (isVisible) => {
        visible = isVisible;
        sync();
      },
      '-20% 0px',
    ),
  );
  cleanup.add(listen(document, 'visibilitychange', sync));
  cleanup.add(() => {
    window.clearTimeout(timer);
    timer = 0;
    restore();
  });
  return cleanup.run;
}

export function initSequences(): Cleanup {
  if (reducedMotion()) return () => {};
  const cleanup = createCleanup();
  document.querySelectorAll<HTMLElement>('[data-st-seq]').forEach((root) => cleanup.add(setup(root)));
  return cleanup.run;
}
