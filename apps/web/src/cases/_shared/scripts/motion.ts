// Shared helpers for the cinematic kit (port of Atlas `src/scripts/cinematic/motion.ts`).
// Every effect is progressive enhancement: markup is complete without JavaScript, and `prefers-reduced-motion`
// keeps it static.
//
// React port rule: every `init*` / `setup*` / timer helper RETURNS a cleanup function. Client components run them in
// `useEffect` and return the combined cleanup, so client-side navigation and React Strict Mode (effects run twice in
// dev) never leave observers, listeners or timers behind.

/** A function that undoes an effect (disconnects observers, removes listeners, clears timers). */
export type Cleanup = () => void;

/** Collects cleanups and runs them in reverse order. `add` returns its argument so it can wrap a call inline. */
export function createCleanup(): { add: (fn: Cleanup | undefined | void) => void; run: Cleanup } {
  const fns: Cleanup[] = [];
  return {
    add(fn) {
      if (typeof fn === 'function') fns.push(fn);
    },
    run() {
      while (fns.length) {
        const fn = fns.pop();
        fn?.();
      }
    },
  };
}

/** `addEventListener` that returns its own removal. */
export function listen<K extends keyof WindowEventMap>(
  target: Window,
  type: K,
  handler: (event: WindowEventMap[K]) => void,
  options?: AddEventListenerOptions,
): Cleanup;
export function listen<K extends keyof DocumentEventMap>(
  target: Document,
  type: K,
  handler: (event: DocumentEventMap[K]) => void,
  options?: AddEventListenerOptions,
): Cleanup;
export function listen<K extends keyof HTMLElementEventMap>(
  target: HTMLElement,
  type: K,
  handler: (event: HTMLElementEventMap[K]) => void,
  options?: AddEventListenerOptions,
): Cleanup;
export function listen(target: EventTarget, type: string, handler: (event: Event) => void, options?: AddEventListenerOptions): Cleanup {
  target.addEventListener(type, handler, options);
  return () => target.removeEventListener(type, handler, options);
}

export function reducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

/** Calls `onChange` whenever the element enters or leaves the viewport. Returns a cleanup function. */
export function watchVisibility(el: Element, onChange: (visible: boolean) => void, rootMargin = '0px'): Cleanup {
  if (!('IntersectionObserver' in window)) {
    onChange(true);
    return () => {};
  }
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) onChange(entry.isIntersecting);
    },
    { rootMargin },
  );
  observer.observe(el);
  return () => observer.disconnect();
}

/** A function that runs `callback` at most once per animation frame; `.cancel()` drops a pending frame. */
export type Throttled = (() => void) & { cancel: Cleanup };

/** Runs `callback` at most once per animation frame. */
export function rafThrottle(callback: () => void): Throttled {
  let frame = 0;
  const run = () => {
    if (frame) return;
    frame = requestAnimationFrame(() => {
      frame = 0;
      callback();
    });
  };
  return Object.assign(run, {
    cancel: () => {
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
    },
  });
}

/**
 * A repeating timer that only ticks while `el` is on screen and the tab is visible.
 * Never starts when the user prefers reduced motion. Returns a cleanup function.
 */
export function visibleInterval(el: Element, tick: () => void, delay: number): Cleanup {
  if (reducedMotion()) return () => {};
  let timer = 0;
  let onScreen = false;
  const sync = () => {
    const run = onScreen && document.visibilityState === 'visible';
    if (run && !timer) timer = window.setInterval(tick, delay);
    if (!run && timer) {
      window.clearInterval(timer);
      timer = 0;
    }
  };
  const unwatch = watchVisibility(el, (visible) => {
    onScreen = visible;
    sync();
  });
  document.addEventListener('visibilitychange', sync);
  return () => {
    unwatch();
    document.removeEventListener('visibilitychange', sync);
    if (timer) window.clearInterval(timer);
    timer = 0;
  };
}

/**
 * Pauses the kit's infinite CSS loops (dashes, pulses, blinks) while they are off screen, so an idle page stops
 * recalculating styles. Toggles `data-cine-offscreen` on every top-level section of `.cine`, on each block inside
 * its container (a mockup, a diagram) and on every element that actually runs an endless animation — a case
 * chapter can be 1500px tall, so watching only its section leaves a looping mockup running long after it has
 * scrolled away. `cinematic.css` sets `animation-play-state: paused` on the marked elements.
 */
export function initOffscreenPause(): Cleanup {
  if (reducedMotion() || !('IntersectionObserver' in window)) return () => {};
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) entry.target.toggleAttribute('data-cine-offscreen', !entry.isIntersecting);
    },
    { rootMargin: '10% 0px' },
  );
  const watched = new Set<Element>();
  const watch = (block: Element) => {
    if (watched.has(block)) return;
    watched.add(block);
    observer.observe(block);
  };

  document.querySelectorAll('.cine > section, .cine > section > .container-page > *').forEach(watch);

  // Endless animations, wherever they sit in the tree. An animation on a pseudo-element reports its owner,
  // which is exactly the element to mark. Rules that only apply once a block scrolls in (or at a breakpoint)
  // start later, so the sweep repeats after load and once the page has settled.
  const sweep = () => {
    if (typeof document.getAnimations !== 'function') return;
    for (const animation of document.getAnimations()) {
      const effect = animation.effect;
      if (!(effect instanceof KeyframeEffect) || effect.getComputedTiming().iterations !== Infinity) continue;
      const target = effect.target;
      if (target instanceof Element && target.closest('.cine')) watch(target);
    }
  };
  sweep();
  let timer = 0;
  const onLoad = () => {
    timer = window.setTimeout(sweep, 2500);
  };
  if (document.readyState === 'complete') onLoad();
  else window.addEventListener('load', onLoad, { once: true });

  // A loop that only starts when its block scrolls in is caught the moment it starts (the event bubbles).
  const root = document.querySelector('.cine');
  const onAnimationStart = (event: Event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    if (getComputedStyle(target).animationIterationCount.split(',').some((count) => count.trim() === 'infinite')) {
      watch(target);
    }
  };
  root?.addEventListener('animationstart', onAnimationStart);

  return () => {
    observer.disconnect();
    window.clearTimeout(timer);
    window.removeEventListener('load', onLoad);
    root?.removeEventListener('animationstart', onAnimationStart);
    for (const el of watched) el.removeAttribute('data-cine-offscreen');
    watched.clear();
  };
}

/**
 * Entrance animations: elements with `data-cine-inview` that start below the fold get
 * `data-inview="pending"`, then `"in"` once they scroll into view. CSS decides what animates.
 * Cleanup removes the attributes it set on items that never came in, so a re-run (Strict Mode, navigation) starts clean.
 */
export function initInView(): Cleanup {
  if (reducedMotion() || !('IntersectionObserver' in window)) return () => {};
  const items = document.querySelectorAll<HTMLElement>('[data-cine-inview]:not([data-inview])');
  if (!items.length) return () => {};

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        (entry.target as HTMLElement).dataset.inview = 'in';
        observer.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -12% 0px' },
  );

  for (const item of items) {
    const { top } = item.getBoundingClientRect();
    item.dataset.inview = top > window.innerHeight * 0.88 ? 'pending' : 'in';
    if (item.dataset.inview === 'pending') observer.observe(item);
  }

  return () => {
    observer.disconnect();
    for (const item of items) delete item.dataset.inview;
  };
}
