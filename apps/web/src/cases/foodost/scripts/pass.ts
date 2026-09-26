import { reducedMotion, visibleInterval, type Cleanup } from '../../_shared/scripts/motion';
import { ageTone, timer } from './format';
import { createScope, flip, loopWhileVisible, snapshotFrame } from './motion';

// Hero "pass": ticket timers count up every second; every few seconds the oldest ticket is bumped off the rail,
// the others slide along and a fresh ticket (from the hidden pool) drops in with the next order number.
// Port of Atlas `src/scripts/cases/foodost/pass.ts`. The pool is a `hidden` element instead of a `<template>`
// (React cannot hydrate template content); cleanup restores the server-rendered rail.

const setTicketAge = (ticket: HTMLElement, seconds: number) => {
  ticket.dataset.elapsed = String(seconds);
  const tone = ageTone(seconds);
  if (ticket.dataset.tone !== tone) ticket.dataset.tone = tone;
  const label = ticket.querySelector('[data-fd-timer]');
  if (label) label.textContent = timer(seconds);
};

const codeOf = (el: Element | null | undefined) => Number(el?.textContent?.replace(/\D/g, '')) || 0;

function setup(root: HTMLElement): Cleanup {
  const list = root.querySelector<HTMLElement>('[data-fd-tickets]');
  const poolEl = root.querySelector<HTMLElement>('[data-fd-pool]');
  const clock = root.querySelector<HTMLElement>('[data-fd-clock]');
  const plates = root.querySelector<HTMLElement>('[data-fd-plates]');
  if (!list || !poolEl) return () => {};

  const scope = createScope();
  scope.add(snapshotFrame(root));

  const pool = Array.from(poolEl.children).filter((el): el is HTMLElement => el instanceof HTMLElement);
  const codes = Array.from(root.querySelectorAll('[data-fd-code]')).map(codeOf);
  let nextCode = Math.max(0, ...codes, ...pool.map((el) => codeOf(el.querySelector('[data-fd-code]')))) + 1;
  let ticks = 0;

  scope.add(
    visibleInterval(
      root,
      () => {
        for (const ticket of Array.from(list.children)) {
          if (ticket instanceof HTMLElement) setTicketAge(ticket, Number(ticket.dataset.elapsed ?? 0) + 1);
        }
        ticks += 1;
        if (clock && ticks % 60 === 0) {
          const [h = 20, m = 14] = (clock.textContent ?? '20:14').split(':').map(Number);
          const total = (h * 60 + m + 1) % (24 * 60);
          clock.textContent = `${String(Math.floor(total / 60)).padStart(2, '0')}:${String(total % 60).padStart(2, '0')}`;
        }
      },
      1000,
    ),
  );

  const bump = () => {
    const first = list.firstElementChild;
    if (!(first instanceof HTMLElement)) return;
    const incoming = pool.shift();
    if (!incoming) return;
    const code = incoming.querySelector('[data-fd-code]');
    if (code) code.textContent = `#${String(nextCode++).padStart(4, '0')}`;
    setTicketAge(incoming, 0);

    first
      .animate(
        [
          { transform: 'translateY(0)', opacity: 1 },
          { transform: 'translateY(-36px) rotate(-3deg)', opacity: 0 },
        ],
        { duration: 420, easing: 'cubic-bezier(0.5, 0, 0.75, 0)', fill: 'forwards' },
      )
      .finished.then(() => {
        if (!scope.alive) return;
        flip(scope, list, () => {
          first.remove();
          list.append(incoming);
        });
        incoming.animate(
          [
            { transform: 'translateY(-70px) rotate(-5deg)', opacity: 0 },
            { transform: 'translateY(6px) rotate(1deg)', opacity: 1, offset: 0.7 },
            { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
          ],
          { duration: 760, easing: 'cubic-bezier(0.2, 0.7, 0.2, 1)' },
        );
        // …and comes out on the shelf as a plate ready for the waiter.
        const lastPlate = plates?.lastElementChild;
        if (plates && lastPlate) {
          const plate = lastPlate.cloneNode(true);
          if (plate instanceof HTMLElement) {
            const label = plate.querySelector('span');
            if (label) label.textContent = first.querySelector('[data-fd-place]')?.textContent ?? '';
            flip(scope, plates, () => {
              lastPlate.remove();
              plates.prepend(plate);
            });
            plate.animate(
              [
                { transform: 'translateY(-16px) scale(0.7)', opacity: 0 },
                { transform: 'translateY(0) scale(1)', opacity: 1 },
              ],
              { duration: 560, delay: 180, easing: 'cubic-bezier(0.2, 0.7, 0.2, 1)', fill: 'backwards' },
            );
          }
        }
        // The bumped ticket goes back to the pool, fresh.
        first.getAnimations().forEach((animation) => animation.cancel());
        pool.push(first);
      })
      .catch(() => {});
  };

  scope.add(loopWhileVisible(root, [[3600, bump]]));
  return scope.dispose;
}

export function initPass(): Cleanup {
  if (reducedMotion() || !('animate' in Element.prototype)) return () => {};
  const cleanups = Array.from(document.querySelectorAll<HTMLElement>('[data-fd-pass]'), setup);
  return () => cleanups.forEach((fn) => fn());
}
