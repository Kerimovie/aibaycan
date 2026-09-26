import { dish, pseudoQrPath, type Foodost } from './data';
import { money, qty } from './scripts/format';
import './ShiftClose.css';

// Closing time: an E-Kassa fiscal receipt printing out, the shift close with cash reconciliation and the Z report,
// and the team's hours turning into payroll with pooled tips. Static final state without JavaScript;
// scripts/close.ts replays the count once when the scene first scrolls into view. Port of Atlas `ShiftClose.astro`.
const qr = pseudoQrPath(147);
const [axisFrom, axisTo] = [15, 24];

export function ShiftClose({ t, locale, label }: { t: Foodost; locale: string; label: string }) {
  const { receipt, shift, staff } = t.close;
  const lines = receipt.lines.map((line) => ({ ...line, name: dish(t, line.dish).name, amount: dish(t, line.dish).price * line.q }));
  const total = lines.reduce((sum, line) => sum + line.amount, 0);
  const { expected, counted, card, tips } = shift.values;
  const variance = counted - expected;
  const hours = staff.rows.map((row) => row.to - row.from);
  const totalHours = hours.reduce((sum, h) => sum + h, 0);
  const team = staff.rows.map((row, i) => {
    const h = hours[i] ?? 0;
    return {
      ...row,
      hours: h,
      tips: (tips * h) / totalHours,
      x: ((row.from - axisFrom) / (axisTo - axisFrom)) * 100,
      w: (h / (axisTo - axisFrom)) * 100,
    };
  });

  return (
    <div
      className="fd-close"
      role="img"
      aria-label={label}
      data-fd-close=""
      data-locale={locale}
      data-counted={counted}
      data-z-take={shift.zTake}
      data-z-done={shift.zDone}
      data-cine-inview=""
    >
      <div className="fd-close__printer">
        <span className="fd-close__slot" />
        <div className="fd-close__paper">
          <div className="fd-receipt">
            <p className="fd-receipt__venue">{t.service.venue}</p>
            <p className="fd-receipt__meta">{receipt.address}</p>
            <p className="fd-receipt__meta">{receipt.taxId}</p>
            <p className="fd-receipt__row fd-receipt__rule">
              <span>{receipt.number}</span>
              <span>{receipt.time}</span>
            </p>
            {lines.map((line) => (
              <p key={line.dish} className="fd-receipt__row">
                <span>
                  {line.q} × {line.name}
                </span>
                <span>{money(locale, line.amount)}</span>
              </p>
            ))}
            <p className="fd-receipt__row fd-receipt__rule fd-receipt__total">
              <span>{receipt.total}</span>
              <span>{money(locale, total)}</span>
            </p>
            <p className="fd-receipt__row">
              <span>{receipt.card}</span>
              <span>{money(locale, total)}</span>
            </p>
            <p className="fd-receipt__fiscal fd-receipt__rule">{receipt.fiscal}</p>
            <p className="fd-receipt__meta">{receipt.fiscalId}</p>
            <svg className="fd-receipt__qr" viewBox="-1 -1 23 23" aria-hidden="true">
              <path d={qr} />
            </svg>
            <p className="fd-receipt__meta">{receipt.thanks}</p>
          </div>
        </div>
      </div>

      <div className="fd-close__panels">
        <div className="fd-shift">
          <p className="fd-close__title">
            <span>{shift.title}</span>
            <span>{t.close.km}</span>
          </p>
          <dl className="fd-shift__rows">
            <div>
              <dt>{shift.expected}</dt>
              <dd>{money(locale, expected)}</dd>
            </div>
            <div>
              <dt>{shift.counted}</dt>
              <dd data-fd-counted="">{money(locale, counted)}</dd>
            </div>
            <div className="fd-shift__variance" data-fd-variance="">
              <dt>{shift.variance}</dt>
              <dd>
                <span>{money(locale, variance)}</span>
              </dd>
            </div>
            <div>
              <dt>{shift.card}</dt>
              <dd>
                {money(locale, card)} <em>✓ {shift.matched}</em>
              </dd>
            </div>
            <div>
              <dt>{shift.tips}</dt>
              <dd>{money(locale, tips)}</dd>
            </div>
          </dl>
          <p className="fd-shift__z" data-fd-z="" data-done="">
            <span>{shift.z}</span>
            <b data-fd-z-label="">{shift.zDone}</b>
          </p>
        </div>

        <div className="fd-staff">
          <p className="fd-close__title">
            <span>{staff.title}</span>
            <span>
              {staff.axis[0]}–{staff.axis[1]}
            </span>
          </p>
          <table className="fd-staff__table">
            <thead>
              <tr>
                <th>{staff.cols.who}</th>
                <th>{staff.cols.shift}</th>
                <th>{staff.cols.hours}</th>
                <th>{staff.cols.tips}</th>
              </tr>
            </thead>
            <tbody>
              {team.map((member) => (
                <tr key={member.who}>
                  <td>{member.who}</td>
                  <td className="fd-staff__shift">
                    <svg viewBox="0 0 100 10" preserveAspectRatio="none">
                      <rect className="fd-staff__track" width="100" height="10" rx="3" />
                      <rect className="fd-staff__bar" x={member.x.toFixed(1)} width={member.w.toFixed(1)} height="10" rx="3" />
                    </svg>
                  </td>
                  <td>
                    {qty(locale, member.hours, 1)} {staff.hoursUnit}
                  </td>
                  <td>{money(locale, member.tips)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
