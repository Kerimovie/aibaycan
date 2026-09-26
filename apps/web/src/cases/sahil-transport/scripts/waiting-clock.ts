import { createCleanup, listen, reducedMotion, watchVisibility, type Cleanup } from '../../_shared/scripts/motion';

// Demurrage clock: while the scene is on screen the hand sweeps through the sample stop, the free-time arc fills
// (green → yellow near the limit), the excess arc grows in the accent colour and the event log lights up in step.
// The server-rendered markup is the final frame, so without JS or with reduced motion nothing moves.
// Port of Atlas `src/scripts/cases/sahil-transport/waiting-clock.ts`; setup returns a cleanup that cancels the rAF
// loop, removes the observer and listener and restores the server-rendered frame.

const R = 142;
const C = 2 * Math.PI * R;
const SWEEP_MS = 5600;
const HOLD_MS = 4200;

const ease = (x: number) => (x < 0.5 ? 4 * x * x * x : 1 - (-2 * x + 2) ** 3 / 2);

function parseMarks(value: string | undefined): number[] {
  try {
    const parsed: unknown = JSON.parse(value ?? '[]');
    return Array.isArray(parsed) ? parsed.map(Number) : [];
  } catch {
    return [];
  }
}

function setup(root: HTMLElement): Cleanup {
  const total = Number(root.dataset.total);
  const free = Number(root.dataset.free);
  const freeArc = root.querySelector<SVGCircleElement>('[data-st-arc="free"]');
  const overArc = root.querySelector<SVGCircleElement>('[data-st-arc="over"]');
  const hand = root.querySelector<SVGGElement>('[data-st-hand]');
  const elapsed = root.querySelector<HTMLElement>('[data-st-elapsed]');
  const eventItems = Array.from(root.querySelectorAll<HTMLElement>('[data-st-event]'));
  if (!total || !freeArc || !overArc || !hand || !elapsed) return () => {};

  const marks = parseMarks(root.dataset.events);

  // The server-rendered frame, restored on cleanup.
  const initial = {
    free: freeArc.getAttribute('stroke-dasharray'),
    over: overArc.getAttribute('stroke-dasharray'),
    hand: hand.getAttribute('transform'),
    elapsed: elapsed.textContent ?? '',
    phase: root.dataset.phase,
    reached: eventItems.map((item) => item.hasAttribute('data-reached')),
  };

  const render = (minute: number) => {
    const m = Math.max(0, Math.min(total, minute));
    freeArc.setAttribute('stroke-dasharray', `${((C * Math.min(m, free)) / 240).toFixed(2)} ${C.toFixed(2)}`);
    overArc.setAttribute('stroke-dasharray', `${((C * Math.max(0, m - free)) / 240).toFixed(2)} ${C.toFixed(2)}`);
    hand.setAttribute('transform', `rotate(${(m * 1.5).toFixed(2)} 180 180)`);
    const whole = Math.floor(m);
    elapsed.textContent = `${Math.floor(whole / 60)}:${String(whole % 60).padStart(2, '0')}`;
    root.dataset.phase = m >= total ? 'done' : m >= free ? 'over' : m >= free * 0.8 ? 'warn' : 'free';
    eventItems.forEach((item, i) => item.toggleAttribute('data-reached', (marks[i] ?? 0) <= m));
  };

  let frame = 0;
  let cycleStart = 0;
  let visible = false;

  const loop = (now: number) => {
    if (!visible) return;
    if (!cycleStart) cycleStart = now;
    const t = now - cycleStart;
    if (t <= SWEEP_MS) {
      root.toggleAttribute('data-st-running', true);
      render(ease(t / SWEEP_MS) * total);
    } else if (t <= SWEEP_MS + HOLD_MS) {
      render(total);
      root.toggleAttribute('data-st-running', false);
    } else {
      cycleStart = now;
    }
    frame = requestAnimationFrame(loop);
  };

  const sync = () => {
    const run = visible && document.visibilityState === 'visible';
    if (run && !frame) {
      cycleStart = 0;
      frame = requestAnimationFrame(loop);
    } else if (!run && frame) {
      cancelAnimationFrame(frame);
      frame = 0;
      root.toggleAttribute('data-st-running', false);
      render(total);
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
      '-15% 0px',
    ),
  );
  cleanup.add(listen(document, 'visibilitychange', sync));
  cleanup.add(() => {
    if (frame) cancelAnimationFrame(frame);
    frame = 0;
    root.removeAttribute('data-st-running');
    const restore = (el: Element, name: string, value: string | null) =>
      value === null ? el.removeAttribute(name) : el.setAttribute(name, value);
    restore(freeArc, 'stroke-dasharray', initial.free);
    restore(overArc, 'stroke-dasharray', initial.over);
    restore(hand, 'transform', initial.hand);
    elapsed.textContent = initial.elapsed;
    if (initial.phase === undefined) delete root.dataset.phase;
    else root.dataset.phase = initial.phase;
    eventItems.forEach((item, i) => item.toggleAttribute('data-reached', initial.reached[i] ?? false));
  });
  return cleanup.run;
}

export function initWaitingClocks(): Cleanup {
  if (reducedMotion()) return () => {};
  const cleanup = createCleanup();
  document.querySelectorAll<HTMLElement>('[data-st-wait]').forEach((root) => cleanup.add(setup(root)));
  return cleanup.run;
}
