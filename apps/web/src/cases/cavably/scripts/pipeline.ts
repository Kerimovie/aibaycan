import { createCleanup, reducedMotion, visibleInterval, type Cleanup } from '../../_shared/scripts/motion';
import { cancelAnimations } from './restore';

// Deals pipeline: the highlighted deal slides from "Proposal" into "Won" (FLIP), the open and won totals count to
// their new values, then the board quietly resets for the next loop. Without JS the board shows its first frame.
// Port of Atlas `src/scripts/cases/cavably/pipeline.ts`; cleanup stops the loop and puts the card and numbers back.

const EASE = 'cubic-bezier(0.2, 0.8, 0.2, 1)';
const format = (n: number) => String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

function setup(board: HTMLElement): Cleanup {
  const card = board.querySelector<HTMLElement>('[data-cav-mover]');
  const from = card?.parentElement;
  const to = board.querySelector<HTMLElement>('[data-cav-stage="3"]');
  const openEl = board.querySelector<HTMLElement>('[data-cav-open]');
  const wonEl = board.querySelector<HTMLElement>('[data-cav-won]');
  if (!card || !from || !to || !openEl || !wonEl) return () => {};

  const open = Number(board.dataset.open);
  const won = Number(board.dataset.won);
  const move = Number(board.dataset.move);
  const countFrom = from.querySelector<HTMLElement>('em') ?? undefined;
  const countTo = to.querySelector<HTMLElement>('em') ?? undefined;
  const home = card.nextSibling;
  const texts = [openEl, wonEl, countFrom, countTo].map((el) => ({ el, text: el?.textContent ?? '' }));
  let moved = false;
  let disposed = false;
  const frames = new Map<HTMLElement, number>();

  const count = (el: HTMLElement, a: number, b: number) => {
    const start = performance.now();
    const step = (now: number) => {
      const k = Math.min(1, (now - start) / 700);
      el.textContent = format(a + (b - a) * (1 - (1 - k) ** 3));
      if (k < 1) frames.set(el, requestAnimationFrame(step));
      else frames.delete(el);
    };
    frames.set(el, requestAnimationFrame(step));
  };

  const flip = (target: HTMLElement, before?: Element | null) => {
    const first = card.getBoundingClientRect();
    target.insertBefore(card, before ?? null);
    const last = card.getBoundingClientRect();
    card.animate(
      [
        { transform: `translate(${first.left - last.left}px, ${first.top - last.top}px) rotate(-2deg)` },
        { transform: 'translate(0, 0) rotate(0)' },
      ],
      { duration: 700, easing: EASE },
    );
  };

  const tick = () => {
    if (!moved) {
      flip(to, to.children[1]);
      count(openEl, open, open - move);
      count(wonEl, won, won + move);
      if (countFrom) countFrom.textContent = String(Number(countFrom.textContent) - 1);
      if (countTo) countTo.textContent = String(Number(countTo.textContent) + 1);
    } else {
      const fade = card.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 250, fill: 'forwards' });
      fade.onfinish = () => {
        if (disposed) return;
        from.append(card);
        openEl.textContent = format(open);
        wonEl.textContent = format(won);
        if (countFrom) countFrom.textContent = String(Number(countFrom.textContent) + 1);
        if (countTo) countTo.textContent = String(Number(countTo.textContent) - 1);
        fade.cancel();
        card.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 350 });
      };
    }
    moved = !moved;
  };

  const stopInterval = visibleInterval(board, tick, 2800);

  return () => {
    disposed = true;
    stopInterval();
    frames.forEach((id) => cancelAnimationFrame(id));
    frames.clear();
    cancelAnimations([card]);
    from.insertBefore(card, home && home.parentNode === from ? home : null);
    for (const { el, text } of texts) if (el) el.textContent = text;
  };
}

export function initPipeline(): Cleanup {
  const cleanup = createCleanup();
  if (reducedMotion()) return cleanup.run;
  document.querySelectorAll<HTMLElement>('[data-cav-pipeline]').forEach((board) => cleanup.add(setup(board)));
  return cleanup.run;
}
