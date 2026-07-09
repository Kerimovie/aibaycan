/**
 * enumVariantColor — backend-driven enum `variant` → konkret hex rəng.
 *
 * Recharts (Pie/Bar `<Cell fill>`) Tailwind class qəbul etmir, hex/CSS rəng
 * istəyir. `<Tag>` variant-ları (default/primary/success/warning/error/info/
 * violet) ilə eyni semantik palitra — chart-lar status rənglərinə uyğun olsun.
 *
 * BLOCKING: docs/conventions/backend-driven-enums.md — variant backenddən gəlir;
 * frontend yalnız onu rəngə map edir (label/variant hardcode etmir).
 */
export type EnumVariant =
  | 'default'
  | 'primary'
  | 'success'
  | 'warning'
  | 'error'
  | 'info'
  | 'violet';

/** Tailwind palitrasının 500 tonları (Tag-ın 100/700 ailəsinin solid versiyası). */
const VARIANT_HEX: Record<EnumVariant, string> = {
  default: '#94a3b8', // slate-400
  primary: '#14b8a6', // teal-500 (brand)
  success: '#10b981', // emerald-500
  warning: '#f59e0b', // amber-500
  error: '#f43f5e', // rose-500
  info: '#0ea5e9', // sky-500
  violet: '#8b5cf6', // violet-500
};

export function enumVariantColor(variant?: string | null): string {
  return VARIANT_HEX[(variant ?? 'default') as EnumVariant] ?? VARIANT_HEX.default;
}
