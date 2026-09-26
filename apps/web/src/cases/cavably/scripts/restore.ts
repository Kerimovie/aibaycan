import type { Cleanup } from '../../_shared/scripts/motion';

// Helpers that let the Cavably scripts put the server-rendered frame back on cleanup (React Strict Mode runs effects
// twice in dev, and client-side navigation unmounts the page).

/** Remembers which elements under `root` carry each boolean attribute; the returned function restores exactly that. */
export function snapshotAttributes(root: Element, names: string[]): Cleanup {
  const saved = names.map((name) => ({ name, els: Array.from(root.querySelectorAll(`[${name}]`)) }));
  return () => {
    for (const { name, els } of saved) {
      root.querySelectorAll(`[${name}]`).forEach((el) => el.removeAttribute(name));
      for (const el of els) el.setAttribute(name, '');
    }
  };
}

/**
 * Cancels the script-made Web Animations (`el.animate()`) on the given elements (and, with `subtree`, their
 * descendants). CSS animations and transitions are left alone: cancelling those would stop the page's CSS loops.
 */
export function cancelAnimations(els: Iterable<Element | null | undefined>, subtree = false): void {
  for (const el of els) {
    if (!el || typeof el.getAnimations !== 'function') continue;
    for (const animation of el.getAnimations({ subtree })) {
      if (animation instanceof CSSAnimation || animation instanceof CSSTransition) continue;
      animation.cancel();
    }
  }
}
