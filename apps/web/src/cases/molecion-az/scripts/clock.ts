// Port of Atlas `src/scripts/cases/molecion/clock.ts`.
// Scene clock of the Molecion mockups. `render(t)` gets the time into the cycle (ms) on every frame while the
// element is on screen and the tab is visible; off screen the clock stops, so an idle page runs nothing and a
// scene resumes where it paused. Every scene derives its whole state from `t`, so no two timers can overlap.
// The returned function stops the clock and detaches its listeners.
// With `prefers-reduced-motion` nothing starts at all: the static HTML already shows the finished state.
//
// React port: `onFirstView` returns a cleanup too, and `snapshotAttributes` / `snapshotText` record the
// server-rendered frame so a scene's cleanup can put it back (Strict Mode, client-side navigation).
import { reducedMotion, watchVisibility, type Cleanup } from '../../_shared/scripts/motion';

export function playScene(el: HTMLElement, cycle: number, render: (t: number) => void): Cleanup {
  if (reducedMotion()) return () => {};
  let visible = false;
  let frame = 0;
  let last = 0;
  let clock = 0;

  const tick = (now: number) => {
    clock = (clock + Math.min(now - last, 100)) % cycle;
    last = now;
    render(clock);
    frame = requestAnimationFrame(tick);
  };
  const sync = () => {
    const run = visible && document.visibilityState === 'visible';
    if (run && !frame) {
      last = performance.now();
      frame = requestAnimationFrame(tick);
    } else if (!run && frame) {
      cancelAnimationFrame(frame);
      frame = 0;
    }
  };
  const stopWatching = watchVisibility(el, (isVisible) => {
    visible = isVisible;
    sync();
  });
  document.addEventListener('visibilitychange', sync);

  // A scene that changes behaviour with the viewport (see parse.ts) stops its clock when it switches mode.
  return () => {
    stopWatching();
    document.removeEventListener('visibilitychange', sync);
    if (frame) cancelAnimationFrame(frame);
    frame = 0;
    visible = false;
  };
}

/**
 * Runs `enter` once, the first time the element comes into view. `stop` is a mutable binding on purpose: where
 * `IntersectionObserver` is missing the kit calls back synchronously, which reached a `const stop` inside its
 * own temporal dead zone and threw. Returns a cleanup that stops watching (if `enter` has not run yet).
 */
export function onFirstView(el: HTMLElement, enter: () => void): Cleanup {
  let done = false;
  let stop: Cleanup | undefined;
  stop = watchVisibility(
    el,
    (visible) => {
      if (!visible || done) return;
      done = true;
      enter();
      stop?.();
    },
    '0px 0px -10% 0px',
  );
  if (done) stop();
  return () => stop?.();
}

/** Sets a data attribute only when it changes, so a per-frame render costs no style recalculation. */
export function setData(el: HTMLElement, name: string, value: string | number): void {
  const next = String(value);
  if (el.dataset[name] !== next) el.dataset[name] = next;
}

/** Sets text only when it changes. */
export function setText(el: Element | null, value: string): void {
  if (el && el.textContent !== value) el.textContent = value;
}

/** Toggles an attribute only when it changes. */
export function setFlag(el: HTMLElement, name: string, on: boolean): void {
  if (el.hasAttribute(name) !== on) el.toggleAttribute(name, on);
}

/** Records `names` on every element; the returned cleanup restores them exactly (value or absence). */
export function snapshotAttributes(els: Iterable<Element>, names: string[]): Cleanup {
  const saved = Array.from(els, (el) => ({ el, values: names.map((name) => [name, el.getAttribute(name)] as const) }));
  return () => {
    for (const { el, values } of saved) {
      for (const [name, value] of values) {
        if (value === null) el.removeAttribute(name);
        else if (el.getAttribute(name) !== value) el.setAttribute(name, value);
      }
    }
  };
}

/** Records the text of every element; the returned cleanup restores it. */
export function snapshotText(els: Iterable<Element>): Cleanup {
  const saved = Array.from(els, (el) => ({ el, text: el.textContent ?? '' }));
  return () => {
    for (const { el, text } of saved) setText(el, text);
  };
}
