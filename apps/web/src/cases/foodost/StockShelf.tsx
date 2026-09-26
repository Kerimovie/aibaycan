import type { Foodost } from './data';
import { qty } from './scripts/format';
import './StockShelf.css';

// Branch stock draining with each sale, the low-stock alert, the purchase list it feeds and a phone count.
// Without JavaScript it shows the moment after four sales: lamb below minimum and added to tomorrow's list.
// scripts/costing.ts (setupStock) refills the shelf and replays the sales. Port of Atlas `StockShelf.astro`.
const SALES = 4;

export function StockShelf({ t, locale, label }: { t: Foodost; locale: string; label: string }) {
  const { stock } = t.costing;
  const rows = stock.rows.map((row) => {
    const capacity = Math.max(row.qty * 1.5, row.min * 2);
    const now = Math.max(0, row.qty - row.perSale * SALES);
    return {
      ...row,
      capacity,
      now,
      low: now < row.min,
      fill: (now / capacity) * 100,
      minAt: (row.min / capacity) * 100,
    };
  });
  const [expected = 0, counted = 0] = stock.count.values;

  return (
    <div className="fd-stock" role="img" aria-label={label} data-fd-stock="" data-locale={locale} data-sales={SALES}>
      <div className="fd-stock__panel">
        <p className="fd-stock__head">
          <b>{stock.title}</b>
          <span className="fd-stock__sale" data-fd-sale="">
            {stock.sold} · {stock.sale}
          </span>
        </p>
        <ul className="fd-stock__rows">
          {rows.map((row) => (
            <li
              key={row.name}
              data-fd-stock-row=""
              data-qty={row.qty}
              data-min={row.min}
              data-per-sale={row.perSale}
              data-capacity={row.capacity}
              data-low={row.low ? '' : undefined}
            >
              <span className="fd-stock__name">{row.name}</span>
              <span className="fd-stock__qty">
                <b data-fd-qty="">{qty(locale, row.now)}</b> {row.unit}{' '}
                <small>
                  {stock.min} {qty(locale, row.min)}
                </small>
              </span>
              <svg className="fd-stock__bar" viewBox="0 0 100 10" preserveAspectRatio="none">
                <rect className="fd-stock__track" width="100" height="10" rx="2" />
                <rect className="fd-stock__fill" width={row.fill.toFixed(1)} height="10" rx="2" data-fd-fill="" />
                <line x1={row.minAt.toFixed(1)} x2={row.minAt.toFixed(1)} y1="-3" y2="13" />
              </svg>
              <em className="fd-stock__low">{stock.low}</em>
            </li>
          ))}
        </ul>
      </div>

      <div className="fd-stock__side">
        <div className="fd-stock__po" data-fd-po="" data-on={rows[0]?.low ? '' : undefined}>
          <p className="fd-stock__po-title">{stock.purchase.title}</p>
          {stock.purchase.groups.map((group, g) => (
            <div key={group.supplier} className="fd-stock__po-group">
              <p className="fd-stock__supplier">{group.supplier}</p>
              <ul>
                {group.lines.map((line, i) => (
                  <li key={line} data-fd-po-line={g === 0 && i === 0 ? '' : undefined}>
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <p className="fd-stock__po-note">{stock.purchase.added}</p>
        </div>

        <div className="fd-stock__count">
          <p className="fd-stock__po-title">{stock.count.title}</p>
          <p className="fd-stock__count-item">{stock.count.item}</p>
          <dl>
            <div>
              <dt>{stock.count.expected}</dt>
              <dd>
                {qty(locale, expected)} {stock.count.unit}
              </dd>
            </div>
            <div>
              <dt>{stock.count.counted}</dt>
              <dd>
                {qty(locale, counted)} {stock.count.unit}
              </dd>
            </div>
            <div data-variance="">
              <dt>{stock.count.variance}</dt>
              <dd>
                {qty(locale, counted - expected)} {stock.count.unit}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
