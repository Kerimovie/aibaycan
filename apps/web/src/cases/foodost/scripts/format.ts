// Number formatting for the Foodost mockups. Port of Atlas `src/scripts/cases/foodost/format.ts` (TR dropped).
// Used by the components (server render) and by the scripts that update figures in the browser. It is hand-rolled on
// purpose: browsers ship reduced ICU data (Chrome has no `az` number format), so Intl would print 1,846.40 in the
// browser where the server printed 1.846,40.

interface Style {
  group: string;
  decimal: string;
  percent: (n: string) => string;
}

const NBSP = ' ';
const en: Style = { group: ',', decimal: '.', percent: (n) => `${n}%` };
const styles: Record<string, Style> = {
  en,
  az: { group: '.', decimal: ',', percent: (n) => `${n}%` },
  ru: { group: NBSP, decimal: ',', percent: (n) => `${n}${NBSP}%` },
};

const styleOf = (locale: string): Style => styles[locale.slice(0, 2)] ?? en;

/** `value` with between `min` and `max` decimals, grouped thousands and the locale's separators. */
function fixed(locale: string, value: number, min: number, max: number): string {
  const { group, decimal } = styleOf(locale);
  const rounded = Math.abs(value).toFixed(max);
  const [intPart = '0', fracPart = ''] = rounded.split('.');
  let frac = fracPart;
  while (frac.length > min && frac.endsWith('0')) frac = frac.slice(0, -1);
  const int = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, group);
  const sign = value < 0 && Number(rounded) !== 0 ? '-' : '';
  return `${sign}${int}${frac ? decimal + frac : ''}`;
}

/** Amount with two decimals, no currency sign (the mono label font has no ₼ glyph). */
export const money = (locale: string, value: number) => fixed(locale, value, 2, 2);

/** Whole amount with grouping, e.g. 128,400. */
export const whole = (locale: string, value: number) => fixed(locale, value, 0, 0);

/** Quantity with up to `digits` decimals, e.g. 6.1 or 64. */
export const qty = (locale: string, value: number, digits = 2) => fixed(locale, value, 0, digits);

/** Percentage from a 0–100 value with one decimal, in the locale's own order (33.5% · 33,5 %). */
export const percent = (locale: string, value: number) => styleOf(locale).percent(fixed(locale, value, 1, 1));

/** Seconds as a kitchen timer, e.g. 07:05. */
export const timer = (seconds: number) =>
  `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(Math.floor(seconds % 60)).padStart(2, '0')}`;

/** Kitchen ticket age → tone: fresh, getting old, late. */
export const ageTone = (seconds: number) => (seconds >= 600 ? 'late' : seconds >= 420 ? 'warn' : 'ok');
