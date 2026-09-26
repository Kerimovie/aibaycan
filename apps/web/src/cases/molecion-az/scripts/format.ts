// Port of Atlas `src/scripts/cases/molecion/format.ts` (unchanged).
// Date formatting for the Molecion mockups. The sample dates all fall in September, as on the other case pages:
// `12 Sep` in English, `12.09` elsewhere. There is nothing else to format on this page — every figure is masked.

export function formatDay(day: number, locale: string): string {
  return locale === 'en' ? `${day} Sep` : `${String(day).padStart(2, '0')}.09`;
}
