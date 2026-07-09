import * as React from 'react';

import { cn } from '@/shared/lib/utils';

/**
 * ScrollArea — layihənin YEGANƏ scroll konteyneri (user 2026-06-09 BLOCKING).
 *
 * Niyə custom: Radix Dialog (Modal) açılanda `react-remove-scroll` sənəd
 * səviyyəsində wheel/touch hadisələrini preventDefault edir və yalnız dialog
 * ağacının daxilinə icazə verir. Portala çıxan popover-lər (TimePicker,
 * EmojiPicker, DatePicker, InputPhone ölkə siyahısı və s.) bu ağacdan kənarda
 * olduğu üçün onların **native scroll-u bloklanır** — istifadəçi çarxla başqa
 * dəyər seçə bilmir. Köhnə raw `overflow-y-auto` yanaşması bu səbəbdən bug idi.
 *
 * Bu komponent wheel/touch delta-sını **əl ilə** `scrollTop`-a tətbiq edir —
 * native scroll bloklansa belə işləyir. Sərhəddə (yuxarı/aşağı son) hadisəni
 * udmur ki, valideyn/səhifə scroll-u təbii davam etsin (overscroll chaining).
 *
 * ⛔ Yeni komponentdə birbaşa `overflow-y-auto`/`overflow-auto` ilə scroll
 * konteyner yaratmaq QADAĞANDIR — həmişə bu `<ScrollArea>` istifadə olunur.
 */
type ScrollAreaProps = React.HTMLAttributes<HTMLDivElement> & {
  orientation?: 'vertical' | 'horizontal';
};

export const ScrollArea = React.forwardRef<HTMLDivElement, ScrollAreaProps>(function ScrollArea(
  { className, orientation = 'vertical', children, ...rest },
  forwardedRef,
) {
  const ref = React.useRef<HTMLDivElement>(null);
  React.useImperativeHandle(forwardedRef, () => ref.current as HTMLDivElement);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const vertical = orientation === 'vertical';

    const apply = (delta: number, e: Event) => {
      const scrollable = vertical
        ? el.scrollHeight > el.clientHeight
        : el.scrollWidth > el.clientWidth;
      if (!scrollable) return;
      const pos = vertical ? el.scrollTop : el.scrollLeft;
      const max = vertical ? el.scrollHeight - el.clientHeight : el.scrollWidth - el.clientWidth;
      const atStart = pos <= 0;
      const atEnd = Math.ceil(pos) >= max;
      // Sərhəddə hadisəni valideynə burax (təbii overscroll chaining)
      if ((delta < 0 && atStart) || (delta > 0 && atEnd)) return;
      e.preventDefault();
      e.stopPropagation();
      if (vertical) el.scrollTop += delta;
      else el.scrollLeft += delta;
    };

    const onWheel = (e: WheelEvent) => apply(vertical ? e.deltaY : e.deltaX || e.deltaY, e);

    let lastTouch = 0;
    const onTouchStart = (e: TouchEvent) => {
      lastTouch = vertical ? (e.touches[0]?.clientY ?? 0) : (e.touches[0]?.clientX ?? 0);
    };
    const onTouchMove = (e: TouchEvent) => {
      const now = vertical ? (e.touches[0]?.clientY ?? 0) : (e.touches[0]?.clientX ?? 0);
      const delta = lastTouch - now;
      lastTouch = now;
      apply(delta, e);
    };

    el.addEventListener('wheel', onWheel, { passive: false });
    el.addEventListener('touchstart', onTouchStart, { passive: true });
    el.addEventListener('touchmove', onTouchMove, { passive: false });
    return () => {
      el.removeEventListener('wheel', onWheel);
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchmove', onTouchMove);
    };
  }, [orientation]);

  return (
    <div
      ref={ref}
      data-slot="scroll-area"
      className={cn(
        'min-h-0 [scrollbar-width:thin]',
        orientation === 'vertical'
          ? 'overflow-y-auto overflow-x-hidden'
          : 'overflow-x-auto overflow-y-hidden',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
});
