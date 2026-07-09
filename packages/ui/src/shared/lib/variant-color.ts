import type { EnumVariant } from '@/shared/lib/enum-variant-color';

/**
 * Backend enum variant → Tailwind class converter (avatar/icon bg + text).
 *
 * BLOCKING:
 *   - docs/conventions/no-duplicate-code-single-source.md — bg class map 4+
 *     yerdə təkrarlanmasın, single source of truth
 *
 * Variant adları backend enum-undan gəlir (`useEnum` cavabında `variant` field).
 * Bu helper bu variant-ları konkret Tailwind bg+text class-lara çevirir.
 *
 * @example
 *   const opt = useEnumOption('attendance_status', record.status)
 *   <span className={variantToAvatarBg(opt?.variant)}><Icon /></span>
 */
export function variantToAvatarBg(variant: EnumVariant | undefined): string {
  switch (variant) {
    case 'success':
      return 'bg-emerald-100 text-emerald-700';
    case 'warning':
      return 'bg-amber-100 text-amber-700';
    case 'error':
      return 'bg-rose-100 text-rose-700';
    case 'info':
      return 'bg-sky-100 text-sky-700';
    case 'primary':
      return 'bg-(--primary-100) text-(--primary-700)';
    case 'violet':
      return 'bg-violet-100 text-violet-700';
    case 'default':
    default:
      return 'bg-slate-100 text-slate-700';
  }
}

export function variantToSoftBg(variant: EnumVariant | undefined): string {
  switch (variant) {
    case 'success':
      return 'bg-emerald-50 text-emerald-700 border-emerald-200';
    case 'warning':
      return 'bg-amber-50 text-amber-700 border-amber-200';
    case 'error':
      return 'bg-rose-50 text-rose-700 border-rose-200';
    case 'info':
      return 'bg-sky-50 text-sky-700 border-sky-200';
    case 'primary':
      return 'bg-(--primary-50) text-(--primary-700) border-(--primary-200)';
    case 'violet':
      return 'bg-violet-50 text-violet-700 border-violet-200';
    case 'default':
    default:
      return 'bg-slate-50 text-slate-700 border-slate-200';
  }
}
