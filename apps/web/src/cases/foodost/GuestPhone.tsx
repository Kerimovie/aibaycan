import { MockFrame } from '../_shared/MockFrame';
import { dish, pseudoQrPath, type Foodost } from './data';
import { money } from './scripts/format';
import './GuestPhone.css';

// QR menu with the AI waiter on a guest's phone, next to the table tent it was scanned from.
// Without JavaScript the whole conversation is shown with both dishes added; scripts/waiter.ts replays it.
// Port of Atlas `GuestPhone.astro`.
const qr = pseudoQrPath(20260917);

export function GuestPhone({ t, locale, label }: { t: Foodost; locale: string; label: string }) {
  const { phone, tent } = t.guest;
  const picks = phone.picks.map((pick) => ({ ...pick, ...dish(t, pick.dish) }));
  const sum = picks.reduce((total, pick) => total + pick.price, 0);

  return (
    <div className="fd-guest">
      <MockFrame variant="phone" label={label} className="fd-guest__phone">
        <div
          className="fd-qr"
          data-fd-waiter=""
          data-locale={locale}
          data-add={phone.add}
          data-added={phone.added}
          data-prices={picks.map((pick) => pick.price).join(',')}
        >
          <div className="fd-qr__bar">
            <span className="fd-qr__venue">
              <b>{t.service.venue}</b>
              <small>{phone.table}</small>
            </span>
            <span className="fd-qr__langs">
              {phone.langs.map((lang) => (
                <span key={lang} data-active={lang === phone.activeLang ? '' : undefined}>
                  {lang}
                </span>
              ))}
            </span>
          </div>
          <p className="fd-qr__tabs">
            <span>{phone.tabs[0]}</span>
            <span data-active="">{phone.tabs[1]}</span>
          </p>

          <ol className="fd-qr__chat">
            <li className="fd-qr__msg" data-from="ai">
              <i className="fd-qr__avatar">AI</i>
              <span>{phone.greeting}</span>
            </li>
            <li className="fd-qr__msg" data-from="guest" data-fd-chat="1">
              <span>{phone.ask}</span>
            </li>
            <li className="fd-qr__msg fd-qr__typing" data-from="ai" data-fd-chat="typing" hidden>
              <i className="fd-qr__avatar">AI</i>
              <span>
                <i />
                <i />
                <i />
              </span>
            </li>
            <li className="fd-qr__msg" data-from="ai" data-fd-chat="2">
              <i className="fd-qr__avatar">AI</i>
              <span>{phone.answer}</span>
            </li>
            {picks.map((pick, i) => (
              <li key={pick.dish} className="fd-dish" data-fd-chat={String(3 + i)} data-dish={pick.dish}>
                <span className="fd-dish__img" />
                <span className="fd-dish__body">
                  <b>{pick.name}</b>
                  <span className="fd-dish__tags">
                    {pick.tags.map((tag) => (
                      <em key={tag}>{tag}</em>
                    ))}
                  </span>
                </span>
                <span className="fd-dish__side">
                  <small>{money(locale, pick.price)} ₼</small>
                  <span className="fd-dish__add" data-fd-add="" data-state="added">
                    {phone.added}
                  </span>
                </span>
              </li>
            ))}
          </ol>

          <div className="fd-qr__dock">
            <p className="fd-qr__quick">
              <span>{phone.callWaiter}</span>
              <span>{phone.pay}</span>
            </p>
            <p className="fd-qr__cart">
              <span>
                <b data-fd-cart="">{picks.length}</b> {phone.cart} · <span data-fd-sum="">{money(locale, sum)}</span> ₼
              </span>
              <span className="fd-qr__send" data-fd-send="">
                {phone.send}
              </span>
            </p>
          </div>
          <p className="fd-qr__toast" data-fd-sent="" hidden>
            {phone.sent}
          </p>
        </div>
      </MockFrame>

      <div className="fd-tent" aria-hidden="true">
        <svg viewBox="-2 -2 25 25" className="fd-tent__qr">
          <path d={qr} />
        </svg>
        <p className="fd-tent__table">{tent.table}</p>
        <p className="fd-tent__text">{tent.text}</p>
      </div>
    </div>
  );
}
