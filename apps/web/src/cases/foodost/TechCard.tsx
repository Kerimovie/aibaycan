import { dish, type Foodost } from './data';
import { money, percent, qty } from './scripts/format';
import './TechCard.css';

// A dish's technical card on paper: grams, yield, price per unit and cost per portion, down to food cost and
// margin. scripts/costing.ts simulates goods receipts: the live ingredient's price changes and every figure follows.
// Port of Atlas `TechCard.astro`.
export function TechCard({ t, locale, label }: { t: Foodost; locale: string; label: string }) {
  const { card } = t.costing;
  const menu = dish(t, card.dish);
  const units: Record<string, string> = card.units;
  const rows = card.rows.map((row) => ({
    ...row,
    unitLabel: units[row.unit] ?? row.unit,
    cost: row.unit === 'pc' ? row.gross * row.price : (row.gross / 1000) * row.price,
  }));
  const total = rows.reduce((sum, row) => sum + row.cost, 0);
  const foodCost = (total / menu.price) * 100;
  // Food-cost meter covers 0–50 %.
  const meter = Math.min(100, foodCost * 2);

  return (
    <div
      className="fd-card"
      role="img"
      aria-label={label}
      data-fd-card=""
      data-locale={locale}
      data-menu-price={menu.price}
      data-prices={card.prices.join(',')}
    >
      <div className="fd-card__head">
        <div>
          <p className="fd-card__kicker">
            {card.label} · {card.number}
          </p>
          <p className="fd-card__dish">{menu.name}</p>
        </div>
        <p className="fd-card__portion">{card.portion}</p>
      </div>

      <table className="fd-card__table">
        <thead>
          <tr>
            <th>{card.cols.ingredient}</th>
            <th>{card.cols.gross}</th>
            <th>{card.cols.net}</th>
            <th>{card.cols.price}</th>
            <th>{card.cols.cost}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr
              key={row.name}
              data-fd-row=""
              data-live={row.live ? '' : undefined}
              data-unit={row.unit}
              data-gross={row.gross}
              data-price={row.price}
              data-cost={row.cost}
            >
              <td>
                <span className="fd-card__name">{row.name}</span>
                {row.semi && <em>{card.semiTag}</em>}
              </td>
              <td>
                {qty(locale, row.gross)} {row.unitLabel}
              </td>
              <td>
                {qty(locale, row.net)} {row.unitLabel}
              </td>
              <td>
                <span data-fd-price="">{money(locale, row.price)}</span> <small>{row.unit === 'pc' ? card.perPc : card.perKg}</small>
              </td>
              <td data-fd-cost="">{money(locale, row.cost)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <dl className="fd-card__sum">
        <div>
          <dt>{card.costLabel}</dt>
          <dd data-fd-total="">{money(locale, total)}</dd>
        </div>
        <div>
          <dt>{card.priceLabel}</dt>
          <dd>{money(locale, menu.price)}</dd>
        </div>
        <div className="fd-card__fc">
          <dt>{card.foodCostLabel}</dt>
          <dd>
            <svg className="fd-card__meter" viewBox="0 0 100 8" preserveAspectRatio="none" aria-hidden="true">
              <rect className="fd-card__meter-track" width="100" height="8" rx="4" />
              <rect className="fd-card__meter-fill" width={meter.toFixed(1)} height="8" rx="4" data-fd-meter="" />
              <line x1="70" x2="70" y1="-2" y2="10" />
            </svg>
            <b data-fd-fc="">{percent(locale, foodCost)}</b>
          </dd>
        </div>
        <div className="fd-card__margin">
          <dt>{card.marginLabel}</dt>
          <dd data-fd-margin="">{money(locale, menu.price - total)}</dd>
        </div>
      </dl>

      <p className="fd-card__event" data-fd-event="" hidden>
        <span className="fd-card__event-kicker">{card.receipt}</span>
        <span data-fd-event-text="" />
      </p>
    </div>
  );
}
