import { reducedMotion, visibleInterval, type Cleanup } from '../../_shared/scripts/motion';
import { ageTone, timer } from './format';
import { createScope, flip, loopWhileVisible, snapshotFrame } from './motion';

// Kitchen display: timers count up every second (colour and progress bar follow the age); every few seconds
// the oldest ticket is marked ready, a toast tells the waiter, and the next order slides in from the pool.
// Port of Atlas `src/scripts/cases/foodost/kds.ts` (pool: `hidden` element instead of `<template>`; cleanup restores
// the server-rendered screen).

const setAge = (ticket: HTMLElement, seconds: number) => {
  ticket.dataset.elapsed = String(seconds);
  const tone = ageTone(seconds);
  if (ticket.dataset.tone !== tone) ticket.dataset.tone = tone;
  const step = String(Math.min(10, Math.floor(seconds / 60)));
  if (ticket.dataset.step !== step) ticket.dataset.step = step;
  const label = ticket.querySelector('[data-fd-timer]');
  if (label) label.textContent = timer(seconds);
};

const htmlChildren = (el: Element) => Array.from(el.children).filter((child): child is HTMLElement => child instanceof HTMLElement);

function setup(root: HTMLElement): Cleanup {
  const list = root.querySelector<HTMLElement>('[data-fd-kds-list]');
  const poolEl = root.querySelector<HTMLElement>('[data-fd-pool]');
  const toast = root.querySelector<HTMLElement>('[data-fd-toast]');
  const lateCount = root.querySelector<HTMLElement>('[data-fd-late]');
  if (!list || !poolEl) return () => {};

  const scope = createScope();
  scope.add(snapshotFrame(root));

  const pool = htmlChildren(poolEl);
  const tickets = () => htmlChildren(list);
  const codeOf = (el: Element) => Number(el.querySelector('[data-fd-code]')?.textContent?.replace(/\D/g, '')) || 0;
  let nextCode = Math.max(0, ...tickets().map(codeOf), ...pool.map(codeOf)) + 1;
  let busy = false;

  const refreshLate = () => {
    if (lateCount) lateCount.textContent = String(tickets().filter((ticket) => ticket.dataset.tone === 'late').length);
  };

  scope.add(
    visibleInterval(
      root,
      () => {
        for (const ticket of tickets()) {
          if (!ticket.hasAttribute('data-bumped')) setAge(ticket, Number(ticket.dataset.elapsed ?? 0) + 1);
        }
        refreshLate();
      },
      1000,
    ),
  );

  const bump = () => {
    if (busy) return;
    const oldest = tickets().reduce<HTMLElement | null>(
      (best, ticket) => (!best || Number(ticket.dataset.elapsed) > Number(best.dataset.elapsed) ? ticket : best),
      null,
    );
    const incoming = pool.shift();
    if (!oldest || !incoming) return;
    busy = true;
    oldest.setAttribute('data-bumped', '');

    if (toast) {
      toast.textContent = `${oldest.querySelector('[data-fd-place]')?.textContent ?? ''} · ${root.dataset.toast ?? ''}`;
      toast.hidden = false;
      toast.animate(
        [
          { opacity: 0, transform: 'translateY(-8px)' },
          { opacity: 1, transform: 'translateY(0)' },
        ],
        { duration: 300, easing: 'ease-out' },
      );
      scope.timeout(() => (toast.hidden = true), 2200);
    }

    scope.timeout(() => {
      oldest
        .animate(
          [
            { opacity: 1, transform: 'scale(1)' },
            { opacity: 0, transform: 'scale(0.92)' },
          ],
          { duration: 320, easing: 'ease-in', fill: 'forwards' },
        )
        .finished.then(() => {
          if (!scope.alive) return;
          const code = incoming.querySelector('[data-fd-code]');
          if (code) code.textContent = `#${String(nextCode++).padStart(4, '0')}`;
          setAge(incoming, 0);
          flip(scope, list, () => {
            oldest.remove();
            list.append(incoming);
          });
          incoming.animate(
            [
              { opacity: 0, transform: 'translateY(18px)' },
              { opacity: 1, transform: 'translateY(0)' },
            ],
            { duration: 520, easing: 'cubic-bezier(0.2, 0.7, 0.2, 1)' },
          );
          oldest.getAnimations().forEach((animation) => animation.cancel());
          oldest.removeAttribute('data-bumped');
          pool.push(oldest);
          refreshLate();
          busy = false;
        })
        .catch(() => (busy = false));
    }, 700);
  };

  scope.add(loopWhileVisible(root, [[4200, bump]]));
  return scope.dispose;
}

export function initKitchenDisplays(): Cleanup {
  if (reducedMotion() || !('animate' in Element.prototype)) return () => {};
  const cleanups = Array.from(document.querySelectorAll<HTMLElement>('[data-fd-kds]'), setup);
  return () => cleanups.forEach((fn) => fn());
}
