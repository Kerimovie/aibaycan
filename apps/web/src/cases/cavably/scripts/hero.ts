import { createCleanup, reducedMotion, visibleInterval, type Cleanup } from '../../_shared/scripts/motion';
import { cancelAnimations } from './restore';

// Hero inbox: every few seconds a conversation shoots down its channel wire and lands on top of the list,
// shows "AI is typing" for a moment, then its reply status. Without JS (or with reduced motion) the list is static.
// Port of Atlas `src/scripts/cases/cavably/hero.ts`; cleanup clears the timers and restores the list order and labels.

const EASE = 'cubic-bezier(0.2, 0.7, 0.2, 1)';

function setup(root: HTMLElement): Cleanup {
  const list = root.querySelector<HTMLElement>('[data-cav-hero-list]');
  if (!list || list.children.length < 5) return () => {};
  const original = Array.from(list.children) as HTMLElement[];
  const tags = original.flatMap((row) => {
    const tag = row.querySelector<HTMLElement>('.cav-state');
    return tag ? [{ tag, state: tag.dataset.state ?? '', text: tag.textContent ?? '' }] : [];
  });
  root.dataset.js = '';
  const typing = root.dataset.typing ?? '';

  const timers = new Set<number>();
  const later = (fn: () => void, ms: number) => {
    const id = window.setTimeout(() => {
      timers.delete(id);
      fn();
    }, ms);
    timers.add(id);
  };

  const fireWire = (channel: string) => {
    const comet = root.querySelector<SVGPathElement>(`[data-cav-comet="${channel}"]`);
    comet?.animate([{ strokeDashoffset: 16 }, { strokeDashoffset: -100 }], { duration: 760, easing: 'cubic-bezier(0.5, 0, 0.7, 1)' });
    const badge = root.querySelector<HTMLElement>(`[data-cav-hero-channel="${channel}"]`);
    if (badge) {
      badge.dataset.active = '';
      later(() => delete badge.dataset.active, 900);
    }
  };

  const land = () => {
    const rows = Array.from(list.children) as HTMLElement[];
    const incoming = rows[rows.length - 1];
    if (!incoming) return;
    const visible = rows.slice(0, 4);
    const before = visible.map((row) => row.getBoundingClientRect().top);

    list.prepend(incoming);
    rows.forEach((row) => delete row.dataset.fresh);
    incoming.dataset.fresh = '';

    // FLIP: rows that were visible slide down into their new place.
    visible.forEach((row, i) => {
      const delta = (before[i] ?? 0) - row.getBoundingClientRect().top;
      if (delta) row.animate([{ transform: `translateY(${delta}px)` }, { transform: 'none' }], { duration: 520, easing: EASE });
    });
    incoming.animate(
      [
        { opacity: 0, transform: 'translateY(-14px) scale(0.98)' },
        { opacity: 1, transform: 'none' },
      ],
      { duration: 520, easing: EASE },
    );

    const tag = incoming.querySelector<HTMLElement>('.cav-state');
    if (!tag) return;
    const state = tag.dataset.state ?? '';
    const label = tag.dataset.label ?? '';
    if (state === 'ai') {
      tag.dataset.state = 'typing';
      tag.textContent = typing;
      later(() => {
        tag.dataset.state = state;
        tag.textContent = label;
        tag.animate([{ transform: 'scale(0.9)' }, { transform: 'scale(1)' }], { duration: 260, easing: 'ease-out' });
      }, 1500);
    }
  };

  const stopInterval = visibleInterval(
    root,
    () => {
      const rows = list.children;
      const next = rows[rows.length - 1] as HTMLElement | undefined;
      fireWire(next?.dataset.channel ?? '');
      later(land, 560);
    },
    3400,
  );

  return () => {
    stopInterval();
    timers.forEach((id) => window.clearTimeout(id));
    timers.clear();
    cancelAnimations([root], true);
    list.append(...original);
    for (const row of original) delete row.dataset.fresh;
    for (const { tag, state, text } of tags) {
      tag.dataset.state = state;
      tag.textContent = text;
    }
    root.querySelectorAll<HTMLElement>('[data-cav-hero-channel]').forEach((badge) => delete badge.dataset.active);
    delete root.dataset.js;
  };
}

export function initHeroInbox(): Cleanup {
  const cleanup = createCleanup();
  if (reducedMotion()) return cleanup.run;
  document.querySelectorAll<HTMLElement>('[data-cav-hero]').forEach((root) => cleanup.add(setup(root)));
  return cleanup.run;
}
