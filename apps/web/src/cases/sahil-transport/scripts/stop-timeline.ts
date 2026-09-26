import { createCleanup, rafThrottle, reducedMotion, watchVisibility, type Cleanup } from '../../_shared/scripts/motion';

// Stop classification scene: as each stop of the sample day scrolls past the middle of the screen, the timeline's
// playhead moves to the end of that stop, everything before it turns from "unprocessed" to classified, and the four
// checks light up with that stop's path. Without JS (or with reduced motion) the whole day is shown classified.
// Port of Atlas `src/scripts/cases/sahil-transport/stop-timeline.ts`; setup returns a cleanup that removes the
// scroll listener and observer and restores the server-rendered (fully classified) frame.

const DAY_MINUTES = 720;

function parseNumbers(value: string | undefined): number[] | null {
  try {
    const parsed: unknown = JSON.parse(value ?? '[]');
    return Array.isArray(parsed) ? parsed.map(Number) : [];
  } catch {
    return null;
  }
}

function parseStrings(value: string | undefined): string[] | null {
  try {
    const parsed: unknown = JSON.parse(value ?? '[]');
    return Array.isArray(parsed) ? parsed.map(String) : [];
  } catch {
    return null;
  }
}

function setup(root: HTMLElement): Cleanup {
  const items = Array.from(root.querySelectorAll<HTMLElement>('[data-st-stop]'));
  const checks = Array.from(root.querySelectorAll<HTMLElement>('[data-st-checks] > li'));
  const clock = root.querySelector<HTMLElement>('[data-st-clock]');
  if (!items.length) return () => {};

  const ends = parseNumbers(root.dataset.ends);
  const clocks = parseStrings(root.dataset.clocks);
  if (!ends || !clocks) return () => {};

  const initialClock = clock?.textContent ?? '';

  let active = -2;
  const apply = (index: number) => {
    if (index === active) return;
    active = index;
    const play = index < 0 ? 0 : (ends[index] ?? DAY_MINUTES) / DAY_MINUTES;
    root.style.setProperty('--st-play', play.toFixed(4));
    if (clock) clock.textContent = index < 0 ? '06:00' : (clocks[index] ?? '');
    const path = index < 0 ? [] : (items[index]?.dataset.path ?? '').split(' ');
    checks.forEach((check, i) => {
      const state = path[i];
      if (state) check.dataset.state = state;
      else delete check.dataset.state;
    });
    items.forEach((item, i) => item.toggleAttribute('data-active', i === index));
  };

  const update = () => {
    const line = window.innerHeight * 0.62;
    let index = -1;
    items.forEach((item, i) => {
      if (item.getBoundingClientRect().top < line) index = i;
    });
    apply(index);
  };

  root.toggleAttribute('data-st-scrub', true);
  update();

  const cleanup = createCleanup();
  const onScroll = rafThrottle(update);
  let listening = false;
  const stopListening = () => {
    window.removeEventListener('scroll', onScroll);
    listening = false;
  };
  cleanup.add(
    watchVisibility(
      root,
      (visible) => {
        if (visible && !listening) {
          window.addEventListener('scroll', onScroll, { passive: true });
          listening = true;
          update();
        } else if (!visible && listening) {
          stopListening();
        }
      },
      '100px 0px',
    ),
  );
  cleanup.add(() => {
    stopListening();
    onScroll.cancel();
    // Back to the server-rendered frame: the whole day classified.
    root.removeAttribute('data-st-scrub');
    root.style.removeProperty('--st-play');
    if (clock) clock.textContent = initialClock;
    for (const check of checks) delete check.dataset.state;
    for (const item of items) item.removeAttribute('data-active');
  });
  return cleanup.run;
}

export function initStopTimelines(): Cleanup {
  if (reducedMotion()) return () => {};
  const cleanup = createCleanup();
  document.querySelectorAll<HTMLElement>('[data-st-stops]').forEach((root) => cleanup.add(setup(root)));
  return cleanup.run;
}
