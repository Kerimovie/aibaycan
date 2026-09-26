import { reducedMotion, type Cleanup } from '../../_shared/scripts/motion';
import { money } from './format';
import { createScope, loopWhileVisible, pulse, snapshotFrame } from './motion';

// QR menu + AI waiter: the guest asks, the waiter types and answers with two dishes, the guest adds both,
// sends the order to the kitchen, and the conversation starts over. The "From scan to review" steps next to
// the phone (same chapter, `[data-fd-step]`) follow along.
// Port of Atlas `src/scripts/cases/foodost/waiter.ts`; cleanup restores the phone and the steps.

function setup(root: HTMLElement): Cleanup {
  const locale = root.dataset.locale ?? 'en';
  const find = (key: string) => root.querySelector<HTMLElement>(`[data-fd-chat="${key}"]`);
  const ask = find('1');
  const typing = find('typing');
  const answer = find('2');
  const cards = [find('3'), find('4')].filter((card): card is HTMLElement => card !== null);
  const adds = Array.from(root.querySelectorAll<HTMLElement>('[data-fd-add]'));
  const cart = root.querySelector<HTMLElement>('[data-fd-cart]');
  const sum = root.querySelector<HTMLElement>('[data-fd-sum]');
  const send = root.querySelector<HTMLElement>('[data-fd-send]');
  const sent = root.querySelector<HTMLElement>('[data-fd-sent]');
  if (!ask || !typing || !answer || !cart || !sum || !send || !sent) return () => {};

  const prices = (root.dataset.prices ?? '').split(',').map(Number);
  const steps = Array.from(root.closest('section')?.querySelectorAll<HTMLElement>('[data-fd-step]') ?? []);

  const scope = createScope();
  scope.add(snapshotFrame(root, ...steps));

  const show = (el: HTMLElement) => {
    el.hidden = false;
    el.animate(
      [
        { opacity: 0, transform: 'translateY(10px)' },
        { opacity: 1, transform: 'translateY(0)' },
      ],
      { duration: 340, easing: 'cubic-bezier(0.2, 0.7, 0.2, 1)' },
    );
  };
  const setCart = (count: number) => {
    cart.textContent = String(count);
    sum.textContent = money(locale, prices.slice(0, count).reduce((total, price) => total + price, 0));
  };
  const setAdded = (index: number, added: boolean) => {
    const button = adds[index];
    if (!button) return;
    button.dataset.state = added ? 'added' : 'add';
    button.textContent = (added ? root.dataset.added : root.dataset.add) ?? '';
    if (added) pulse(button, 1.12);
  };
  const highlight = (index: number) => steps.forEach((step, i) => step.toggleAttribute('data-active', i === index));
  const reset = () => {
    [ask, typing, answer, ...cards].forEach((el) => (el.hidden = true));
    adds.forEach((_, i) => setAdded(i, false));
    setCart(0);
    sent.hidden = true;
    highlight(0);
  };

  reset();
  scope.add(
    loopWhileVisible(root, [
      [700, () => (show(ask), highlight(1))],
      [500, () => show(typing)],
      [1200, () => ((typing.hidden = true), show(answer))],
      [600, () => cards[0] && show(cards[0])],
      [300, () => cards[1] && show(cards[1])],
      [1600, () => (setAdded(0, true), setCart(1), highlight(2))],
      [900, () => (setAdded(1, true), setCart(2))],
      [1200, () => (pulse(send, 1.08), show(sent))],
      [2400, () => ((sent.hidden = true), highlight(4))],
      [2600, reset],
    ]),
  );
  return scope.dispose;
}

export function initWaiters(): Cleanup {
  if (reducedMotion() || !('animate' in Element.prototype)) return () => {};
  const cleanups = Array.from(document.querySelectorAll<HTMLElement>('[data-fd-waiter]'), setup);
  return () => cleanups.forEach((fn) => fn());
}
