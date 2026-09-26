// Port of Atlas `src/scripts/cases/molecion/rules.ts`.
// The hit counters of the stored rules tick up once, the first time the table comes into view: the importer
// gets more accurate with use. The static HTML already prints the final figures, so this only replays them.
import { createCleanup, reducedMotion, type Cleanup } from '../../_shared/scripts/motion';
import { rulesCountUp } from '../data';
import { onFirstView, setText, snapshotText } from './clock';

function setup(root: HTMLElement): Cleanup | undefined {
  const counters = Array.from(root.querySelectorAll<HTMLElement>('[data-mo-count]')).map((el) => ({
    el,
    to: Number(el.dataset.moCount),
  }));
  if (!counters.length) return;

  const cleanup = createCleanup();
  cleanup.add(snapshotText(counters.map(({ el }) => el)));
  let frame = 0;
  cleanup.add(() => {
    if (frame) cancelAnimationFrame(frame);
    frame = 0;
  });
  cleanup.add(
    onFirstView(root, () => {
      const start = performance.now();
      const step = (now: number) => {
        const k = Math.min(1, (now - start) / rulesCountUp);
        const eased = 1 - Math.pow(1 - k, 3);
        for (const { el, to } of counters) setText(el, String(Math.round(to * eased)));
        frame = k < 1 ? requestAnimationFrame(step) : 0;
      };
      for (const { el } of counters) setText(el, '0');
      frame = requestAnimationFrame(step);
    }),
  );
  return cleanup.run;
}

export function initRules(): Cleanup {
  if (reducedMotion()) return () => {};
  const cleanup = createCleanup();
  document.querySelectorAll<HTMLElement>('[data-mo-rules]').forEach((root) => cleanup.add(setup(root)));
  return cleanup.run;
}
