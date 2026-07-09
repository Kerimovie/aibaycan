/**
 * modal-outside-guard (#224 — mərkəzi #070) — modal-ın "kənar klik → bağla" davranışında
 * portal-a çıxan elementləri İSTİSNA edir. Radix popper (Select/DatePicker/dropdown) + MathLive
 * (virtual klaviatura, menyu, prompt popover) `document.body`-yə render olunur → modaldan kənar
 * kimi görünüb modalı bağlayır (#224 bug: formul redaktorunda klaviatura açanda modal bağlanırdı).
 *
 * Modal `onPointerDownOutside`/`onInteractOutside`-da bu `true` qaytarırsa → `preventDefault`
 * (modal açıq qalır).
 */
export function isModalSafeOutsideTarget(target: EventTarget | null): boolean {
  const el = target as HTMLElement | null;
  if (!el || typeof el.closest !== 'function') return false;
  return !!el.closest(
    [
      '[data-radix-popper-content-wrapper]', // Radix Select/DatePicker/dropdown portal
      'math-field', // MathLive redaktor sahəsi (shadow host)
      '.ML__keyboard', // MathLive virtual klaviatura
      '.ML__menu', // MathLive menyu
      '.ML__mathlive', // MathLive render konteyner
      '[data-ml-popover]', // MathLive prompt/popover
    ].join(','),
  );
}
