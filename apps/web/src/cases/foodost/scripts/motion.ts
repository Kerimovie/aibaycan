import { reducedMotion, watchVisibility, type Cleanup } from '../../_shared/scripts/motion';

// Small motion helpers for the Foodost scenes, on top of the kit's motion.ts. Port of Atlas
// `src/scripts/cases/foodost/motion.ts`. Every scene is complete without JavaScript; these only animate what is
// already rendered.
//
// React port: every helper that schedules something returns a cleanup or runs inside a `Scope`, which owns the
// timeouts and animation frames of one scene and drops them all on `dispose()` (unmount, Strict Mode re-run).
// `snapshotFrame` records the server-rendered frame of a scene and puts it back on cleanup.

export type Step = readonly [delay: number, action: () => void];

/** Timers and frames of one scene. After `dispose()` nothing scheduled through it runs any more. */
export interface Scope {
  readonly alive: boolean;
  timeout(fn: () => void, delay: number): void;
  frame(fn: (now: number) => void): void;
  add(fn: Cleanup | undefined | void): void;
  dispose: Cleanup;
}

export function createScope(): Scope {
  let alive = true;
  const timers = new Set<number>();
  const frames = new Set<number>();
  const cleanups: Cleanup[] = [];
  return {
    get alive() {
      return alive;
    },
    timeout(fn, delay) {
      if (!alive) return;
      const id = window.setTimeout(() => {
        timers.delete(id);
        if (alive) fn();
      }, delay);
      timers.add(id);
    },
    frame(fn) {
      if (!alive) return;
      const id = requestAnimationFrame((now) => {
        frames.delete(id);
        if (alive) fn(now);
      });
      frames.add(id);
    },
    add(fn) {
      if (typeof fn === 'function') cleanups.push(fn);
    },
    dispose() {
      alive = false;
      for (const id of timers) window.clearTimeout(id);
      for (const id of frames) cancelAnimationFrame(id);
      timers.clear();
      frames.clear();
      while (cleanups.length) cleanups.pop()?.();
    },
  };
}

/**
 * Plays `steps` in a loop (each action runs `delay` ms after the previous one) while `el` is on screen and the
 * tab is visible. Off screen the current step is dropped and replayed on return. Never runs with reduced motion.
 */
export function loopWhileVisible(el: Element, steps: readonly Step[]): Cleanup {
  if (reducedMotion() || !steps.length) return () => {};
  let index = 0;
  let timer = 0;
  let onScreen = false;

  const stop = () => {
    window.clearTimeout(timer);
    timer = 0;
  };
  const schedule = () => {
    if (timer || !onScreen || document.visibilityState !== 'visible') return;
    const step = steps[index];
    if (!step) return;
    const [delay, action] = step;
    timer = window.setTimeout(() => {
      timer = 0;
      action();
      index = (index + 1) % steps.length;
      schedule();
    }, delay);
  };

  const unwatch = watchVisibility(el, (visible) => {
    onScreen = visible;
    if (visible) schedule();
    else stop();
  });
  const onVisibility = () => (document.visibilityState === 'visible' ? schedule() : stop());
  document.addEventListener('visibilitychange', onVisibility);
  return () => {
    unwatch();
    document.removeEventListener('visibilitychange', onVisibility);
    onScreen = false;
    stop();
  };
}

/** Runs `callback` once, the first time `el` scrolls into view. */
export function onFirstView(el: Element, callback: () => void, rootMargin = '0px 0px -15% 0px'): Cleanup {
  let done = false;
  let stopped = false;
  const stop = watchVisibility(
    el,
    (visible) => {
      if (!visible || done) return;
      done = true;
      callback();
      queueMicrotask(unwatch);
    },
    rootMargin,
  );
  function unwatch() {
    if (stopped) return;
    stopped = true;
    stop();
  }
  return unwatch;
}

/**
 * FLIP: lets `mutate` reorder or replace children of `container`, then slides the survivors to their new places.
 * The old position is held in an inline transform straight after the mutation, so the first frame the browser
 * paints is unchanged and the reorder records no layout shift (a WAAPI animation alone starts one frame late,
 * which showed up as idle CLS on the kitchen display).
 */
export function flip(scope: Scope, container: Element, mutate: () => void, duration = 520): void {
  const before = new Map<Element, DOMRect>();
  for (const child of Array.from(container.children)) before.set(child, child.getBoundingClientRect());
  mutate();
  const moved: { el: HTMLElement; dx: number; dy: number }[] = [];
  for (const child of Array.from(container.children)) {
    const from = before.get(child);
    if (!from || !(child instanceof HTMLElement)) continue;
    const to = child.getBoundingClientRect();
    const dx = from.left - to.left;
    const dy = from.top - to.top;
    if (Math.abs(dx) < 0.5 && Math.abs(dy) < 0.5) continue;
    child.style.transform = `translate(${dx}px, ${dy}px)`;
    moved.push({ el: child, dx, dy });
  }
  if (!moved.length) return;
  scope.frame(() => {
    for (const { el, dx, dy } of moved) {
      el.style.transform = '';
      el.animate([{ transform: `translate(${dx}px, ${dy}px)` }, { transform: 'translate(0, 0)' }], {
        duration,
        easing: 'cubic-bezier(0.2, 0.7, 0.2, 1)',
      });
    }
  });
}

/** Counts a number from `from` to `to`, writing it with `write` on every frame. */
export function tween(scope: Scope, from: number, to: number, write: (value: number) => void, duration = 900): void {
  const start = performance.now();
  const frame = (now: number) => {
    const k = Math.min(1, Math.max(0, (now - start) / duration));
    const eased = 1 - Math.pow(1 - k, 3);
    write(from + (to - from) * eased);
    if (k < 1) scope.frame(frame);
  };
  scope.frame(frame);
}

/** A short attention pulse (WAAPI) used when a mockup element changes. */
export function pulse(el: Element, scale = 1.04): void {
  el.animate([{ transform: 'scale(1)' }, { transform: `scale(${scale})` }, { transform: 'scale(1)' }], {
    duration: 320,
    easing: 'ease-out',
  });
}

interface ElementRecord {
  el: Element;
  attributes: [name: string, value: string][];
  children: ChildNode[];
}

/**
 * Records the server-rendered frame of `roots` (attributes, inline styles, `hidden`, text and child order of every
 * element inside) and returns a cleanup that puts it back: script animations are cancelled, attributes restored,
 * moved or cloned children put back in place, text reset. The scripts can then rewrite the scene freely (as on
 * Atlas) and React still finds the markup it hydrated after unmount or a Strict Mode re-run.
 */
export function snapshotFrame(...roots: (Element | null | undefined)[]): Cleanup {
  const records: ElementRecord[] = [];
  const texts: [node: CharacterData, data: string][] = [];
  const record = (el: Element) => {
    records.push({
      el,
      attributes: Array.from(el.attributes, (attr) => [attr.name, attr.value] as [string, string]),
      children: Array.from(el.childNodes),
    });
    for (const node of Array.from(el.childNodes)) {
      if (node instanceof CharacterData) texts.push([node, node.data]);
      else if (node instanceof Element) record(node);
    }
  };
  for (const root of roots) if (root) record(root);

  return () => {
    for (const { el } of records) {
      for (const animation of el.getAnimations()) {
        // CSS animations and transitions belong to the stylesheet; only script (WAAPI) animations are dropped.
        if (typeof CSSAnimation !== 'undefined' && animation instanceof CSSAnimation) continue;
        if (typeof CSSTransition !== 'undefined' && animation instanceof CSSTransition) continue;
        animation.cancel();
      }
    }
    for (const { el, attributes, children } of records) {
      const keep = new Set(attributes.map(([name]) => name));
      for (const name of el.getAttributeNames()) if (!keep.has(name)) el.removeAttribute(name);
      for (const [name, value] of attributes) if (el.getAttribute(name) !== value) el.setAttribute(name, value);
      const current = Array.from(el.childNodes);
      if (current.length !== children.length || current.some((node, i) => node !== children[i])) el.replaceChildren(...children);
    }
    for (const [node, data] of texts) if (node.data !== data) node.data = data;
  };
}
