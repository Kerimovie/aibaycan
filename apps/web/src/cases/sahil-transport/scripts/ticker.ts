import { createCleanup, visibleInterval, type Cleanup } from '../../_shared/scripts/motion';

// Small "real-time" touches inside the fleet dashboard mockup (a role="img" illustration): the waiting timer
// advances, speeds wobble and the GPS freshness counter ages. Only while on screen; nothing with reduced motion.
// Port of Atlas `src/scripts/cases/sahil-transport/ticker.ts`; the cleanup stops the interval and restores the
// server-rendered texts and timer values.

const replaceNumber = (text: string, value: number) => text.replace(/\d+/, String(value));

function setup(root: HTMLElement): Cleanup {
  const timers = Array.from(root.querySelectorAll<HTMLElement>('[data-st-timer]')).map((el) => ({
    el,
    initial: el.dataset.stTimer ?? '0',
    text: el.textContent ?? '',
  }));
  const speeds = Array.from(root.querySelectorAll<HTMLElement>('[data-st-jitter]')).map((el) => ({
    el,
    text: el.textContent ?? '',
    base: Number(el.textContent?.match(/\d+/)?.[0] ?? 0),
  }));
  const ages = Array.from(root.querySelectorAll<HTMLElement>('[data-st-age]')).map((el) => ({
    el,
    text: el.textContent ?? '',
    value: Number(el.textContent?.match(/\d+/)?.[0] ?? 0),
  }));
  let tick = 0;

  const cleanup = createCleanup();
  cleanup.add(() => {
    for (const timer of timers) {
      timer.el.dataset.stTimer = timer.initial;
      timer.el.textContent = timer.text;
    }
    for (const speed of speeds) speed.el.textContent = speed.text;
    for (const age of ages) age.el.textContent = age.text;
  });
  cleanup.add(
    visibleInterval(
      root,
      () => {
        tick++;
        for (const age of ages) {
          age.value = age.value >= 58 ? 2 : age.value + 1;
          age.el.textContent = replaceNumber(age.el.textContent ?? '', age.value);
        }
        if (tick % 2 === 0) {
          speeds.forEach((speed, i) => {
            const wobble = Math.round(Math.sin(tick * 0.9 + i) * 3 + Math.sin(tick * 2.3) * 1.5);
            speed.el.textContent = replaceNumber(speed.el.textContent ?? '', speed.base + wobble);
          });
        }
        if (tick % 4 === 0) {
          for (const { el } of timers) {
            const minutes = Number(el.dataset.stTimer) + 1;
            el.dataset.stTimer = String(minutes);
            el.textContent = `${Math.floor(minutes / 60)}:${String(minutes % 60).padStart(2, '0')}`;
          }
        }
      },
      1000,
    ),
  );
  return cleanup.run;
}

export function initTickers(): Cleanup {
  const cleanup = createCleanup();
  document.querySelectorAll<HTMLElement>('[data-st-ticker]').forEach((root) => cleanup.add(setup(root)));
  return cleanup.run;
}
