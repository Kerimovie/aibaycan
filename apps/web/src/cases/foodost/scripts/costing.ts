import { reducedMotion, type Cleanup } from '../../_shared/scripts/motion';
import { money, percent, qty } from './format';
import { createScope, loopWhileVisible, pulse, snapshotFrame, tween, type Step } from './motion';

// Food cost chapter. Port of Atlas `src/scripts/cases/foodost/costing.ts`; cleanups restore the server-rendered frame.
// Tech card: a goods receipt changes the live ingredient's price; its cost, the portion cost, food cost % and
// margin recalculate in front of the reader. Stock shelf: every sale drains the shelf by the recipe; when an
// ingredient drops below its minimum, the alert fires and the purchase list picks it up; then the shelf refills.

function setupCard(root: HTMLElement): Cleanup {
  const locale = root.dataset.locale ?? 'en';
  const menuPrice = Number(root.dataset.menuPrice);
  const prices = (root.dataset.prices ?? '').split(',').map(Number).filter(Boolean);
  const rows = Array.from(root.querySelectorAll<HTMLElement>('[data-fd-row]'));
  const live = rows.find((row) => row.hasAttribute('data-live'));
  const total = root.querySelector<HTMLElement>('[data-fd-total]');
  const foodCost = root.querySelector<HTMLElement>('[data-fd-fc]');
  const margin = root.querySelector<HTMLElement>('[data-fd-margin]');
  const meter = root.querySelector<SVGRectElement>('[data-fd-meter]');
  const event = root.querySelector<HTMLElement>('[data-fd-event]');
  const eventText = root.querySelector<HTMLElement>('[data-fd-event-text]');
  if (!live || !prices.length || !total || !foodCost || !margin || !meter || !event || !eventText) return () => {};

  const scope = createScope();
  scope.add(snapshotFrame(root));

  const priceCell = live.querySelector<HTMLElement>('[data-fd-price]');
  const costCell = live.querySelector<HTMLElement>('[data-fd-cost]');
  const name = live.querySelector('.fd-card__name')?.textContent ?? '';
  const unitLabel = live.querySelector('small')?.textContent ?? '';
  const gross = Number(live.dataset.gross);
  const costOf = (price: number) => (live.dataset.unit === 'pc' ? gross * price : (gross / 1000) * price);
  const others = rows.filter((row) => row !== live).reduce((sum, row) => sum + Number(row.dataset.cost), 0);
  let current = Number(live.dataset.price);
  let step = 0;

  const receipt = () => {
    const from = current;
    const to = prices[step % prices.length] ?? current;
    step += 1;
    current = to;

    eventText.textContent = `${name}: ${money(locale, from)} → ${money(locale, to)} ${unitLabel}`;
    event.hidden = false;
    event.animate(
      [
        { opacity: 0, transform: 'translateY(-10px)' },
        { opacity: 1, transform: 'translateY(0)' },
      ],
      { duration: 360, easing: 'cubic-bezier(0.2, 0.7, 0.2, 1)' },
    );
    live.setAttribute('data-flash', '');

    const portion = others + costOf(to);
    meter.style.width = `${Math.min(100, (portion / menuPrice) * 200).toFixed(1)}px`;
    tween(
      scope,
      from,
      to,
      (price) => {
        const sum = others + costOf(price);
        if (priceCell) priceCell.textContent = money(locale, price);
        if (costCell) costCell.textContent = money(locale, costOf(price));
        total.textContent = money(locale, sum);
        foodCost.textContent = percent(locale, (sum / menuPrice) * 100);
        margin.textContent = money(locale, menuPrice - sum);
      },
      1100,
    );
    scope.timeout(() => pulse(foodCost, 1.1), 1100);
    scope.timeout(() => {
      live.removeAttribute('data-flash');
      event.hidden = true;
    }, 2600);
  };

  scope.add(loopWhileVisible(root, [[3800, receipt]]));
  return scope.dispose;
}

function setupStock(root: HTMLElement): Cleanup {
  const locale = root.dataset.locale ?? 'en';
  const sales = Number(root.dataset.sales ?? 4);
  const sale = root.querySelector<HTMLElement>('[data-fd-sale]');
  const po = root.querySelector<HTMLElement>('[data-fd-po]');
  const rows = Array.from(root.querySelectorAll<HTMLElement>('[data-fd-stock-row]')).map((row) => ({
    el: row,
    start: Number(row.dataset.qty),
    min: Number(row.dataset.min),
    perSale: Number(row.dataset.perSale),
    capacity: Number(row.dataset.capacity),
    now: Number(row.dataset.qty),
    label: row.querySelector<HTMLElement>('[data-fd-qty]'),
    fill: row.querySelector<SVGRectElement>('[data-fd-fill]'),
  }));
  if (!sale || !po || !rows.length) return () => {};

  const scope = createScope();
  scope.add(snapshotFrame(root));

  const paint = () => {
    for (const row of rows) {
      if (row.label) row.label.textContent = qty(locale, row.now);
      if (row.fill) row.fill.style.width = `${((row.now / row.capacity) * 100).toFixed(1)}px`;
      row.el.toggleAttribute('data-low', row.now < row.min);
    }
    const alert = rows.some((row) => row.now < row.min);
    if (alert && !po.hasAttribute('data-on')) pulse(po, 1.02);
    po.toggleAttribute('data-on', alert);
  };
  const refill = () => {
    rows.forEach((row) => (row.now = row.start));
    paint();
  };
  const sell = () => {
    rows.forEach((row) => (row.now = Math.max(0, +(row.now - row.perSale).toFixed(3))));
    pulse(sale, 1.08);
    paint();
  };

  refill();
  const steps: Step[] = [];
  for (let i = 0; i < sales; i++) steps.push([i === 0 ? 1400 : 1500, sell]);
  steps.push([3600, refill]);
  scope.add(loopWhileVisible(root, steps));
  return scope.dispose;
}

export function initTechCards(): Cleanup {
  if (reducedMotion() || !('animate' in Element.prototype)) return () => {};
  const cleanups = Array.from(document.querySelectorAll<HTMLElement>('[data-fd-card]'), setupCard);
  return () => cleanups.forEach((fn) => fn());
}

export function initStockShelves(): Cleanup {
  if (reducedMotion() || !('animate' in Element.prototype)) return () => {};
  const cleanups = Array.from(document.querySelectorAll<HTMLElement>('[data-fd-stock]'), setupStock);
  return () => cleanups.forEach((fn) => fn());
}
