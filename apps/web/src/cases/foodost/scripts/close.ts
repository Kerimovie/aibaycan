import { reducedMotion, type Cleanup } from '../../_shared/scripts/motion';
import { money } from './format';
import { createScope, onFirstView, pulse, snapshotFrame, tween } from './motion';

// Closing time, played once: while the receipt prints (CSS), the cashier's count runs up to the counted amount,
// the variance is flagged, and the Z report button turns into "taken". If the scene is already on screen when
// the page loads, it keeps its final state. Port of Atlas `src/scripts/cases/foodost/close.ts`; cleanup restores
// the final frame.

function setup(root: HTMLElement): Cleanup {
  const locale = root.dataset.locale ?? 'en';
  const target = Number(root.dataset.counted);
  const counted = root.querySelector<HTMLElement>('[data-fd-counted]');
  const variance = root.querySelector<HTMLElement>('[data-fd-variance]');
  const z = root.querySelector<HTMLElement>('[data-fd-z]');
  const zLabel = root.querySelector<HTMLElement>('[data-fd-z-label]');
  if (!counted || !variance || !z || !zLabel || !Number.isFinite(target)) return () => {};
  if (root.getBoundingClientRect().top < window.innerHeight) return () => {};

  const scope = createScope();
  scope.add(snapshotFrame(counted, variance, z));

  counted.textContent = money(locale, 0);
  variance.setAttribute('data-pending', '');
  z.removeAttribute('data-done');
  zLabel.textContent = root.dataset.zTake ?? '';

  scope.add(
    onFirstView(root, () => {
      scope.timeout(() => tween(scope, 0, target, (value) => (counted.textContent = money(locale, value)), 1600), 700);
      scope.timeout(() => {
        variance.removeAttribute('data-pending');
        pulse(variance, 1.03);
      }, 2500);
      scope.timeout(() => {
        z.setAttribute('data-done', '');
        zLabel.textContent = root.dataset.zDone ?? '';
        pulse(zLabel, 1.08);
      }, 3400);
    }),
  );
  return scope.dispose;
}

export function initShiftClose(): Cleanup {
  if (reducedMotion() || !('animate' in Element.prototype)) return () => {};
  const cleanups = Array.from(document.querySelectorAll<HTMLElement>('[data-fd-close]'), setup);
  return () => cleanups.forEach((fn) => fn());
}
