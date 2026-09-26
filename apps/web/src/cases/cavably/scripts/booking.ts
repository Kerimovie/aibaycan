import { createCleanup, reducedMotion, visibleInterval, type Cleanup } from '../../_shared/scripts/motion';
import { cancelAnimations } from './restore';

// Booking calendar loop: the WhatsApp booking drops into Nigar's column and is confirmed; a second booking tries the
// same specialist, is refused with a clash warning and lands with a free colleague. Without JS the final state shows.
// Port of Atlas `src/scripts/cases/cavably/booking.ts`; cleanup clears timers, cancels the animations it made
// (their `fill: forwards` would otherwise stick) and removes `data-js`.

const EASE = 'cubic-bezier(0.2, 0.8, 0.2, 1)';

function setup(calendar: HTMLElement): Cleanup {
  const root = calendar.closest<HTMLElement>('.cav-book');
  const booked = calendar.querySelector<HTMLElement>('[data-cav-booking-new]');
  const ghost = calendar.querySelector<HTMLElement>('[data-cav-booking-ghost]');
  const moved = calendar.querySelector<HTMLElement>('[data-cav-booking-moved]');
  const chat = calendar.querySelector<HTMLElement>('[data-cav-booking-chat]');
  const toasts = Array.from(calendar.querySelectorAll<HTMLElement>('[data-toast]'));
  if (!root || !booked || !ghost || !moved) return () => {};
  root.dataset.js = '';

  const toast = (name: string) =>
    toasts.forEach((el) => {
      const show = el.dataset.toast === name;
      el.animate([{ opacity: show ? 0 : Number(getComputedStyle(el).opacity) }, { opacity: show ? 1 : 0 }], {
        duration: 320,
        fill: 'forwards',
        easing: 'ease-out',
      });
    });
  const drop = (el: HTMLElement) =>
    el.animate(
      [
        { opacity: 0, transform: 'translateY(-18px) scale(1.06)' },
        { opacity: 1, transform: 'none' },
      ],
      { duration: 520, easing: EASE, fill: 'forwards' },
    );
  const hide = (el: HTMLElement) => el.animate([{ opacity: 0 }], { duration: 1, fill: 'forwards' });

  let timers: number[] = [];
  const at = (ms: number, fn: () => void) => timers.push(window.setTimeout(fn, ms));
  const clearTimers = () => {
    timers.forEach((id) => window.clearTimeout(id));
    timers = [];
  };

  const cycle = () => {
    clearTimers();
    hide(booked);
    hide(moved);
    hide(ghost);
    toast('');
    chat?.animate([{ transform: 'scale(1)' }, { transform: 'scale(1.06)' }, { transform: 'scale(1)' }], { duration: 600, easing: 'ease-in-out' });
    at(700, () => {
      drop(booked);
      toast('confirmed');
    });
    at(2600, () => {
      drop(ghost);
      toast('clash');
    });
    at(3200, () =>
      ghost.animate([{ translate: '0' }, { translate: '-5px' }, { translate: '5px' }, { translate: '-3px' }, { translate: '0' }], {
        duration: 360,
      }),
    );
    at(4300, () => {
      ghost.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 300, fill: 'forwards' });
      drop(moved);
      toast('moved');
    });
  };

  // Start from the static final frame; the first cycle runs once the calendar is on screen.
  toast('moved');
  const stopInterval = visibleInterval(calendar, cycle, 7600);
  let started = false;
  const observer = new IntersectionObserver((entries) => {
    if (!started && entries.some((entry) => entry.isIntersecting)) {
      started = true;
      cycle();
      observer.disconnect();
    }
  });
  observer.observe(calendar);

  return () => {
    stopInterval();
    observer.disconnect();
    clearTimers();
    cancelAnimations([calendar], true);
    delete root.dataset.js;
  };
}

export function initBookingBoard(): Cleanup {
  const cleanup = createCleanup();
  if (reducedMotion() || !('IntersectionObserver' in window)) return cleanup.run;
  document.querySelectorAll<HTMLElement>('[data-cav-booking]').forEach((calendar) => cleanup.add(setup(calendar)));
  return cleanup.run;
}
