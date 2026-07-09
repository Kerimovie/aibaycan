import * as React from 'react';

import { cn } from '@/shared/lib/utils';

/**
 * Input — design-system spec (docs/design-system/components/input.md).
 *
 * Tokens (2026-05-23 subtle update):
 *   - Height: 40px (default, control unit)
 *   - Radius: 8px (foundation Session 3+ align)
 *   - Border: 1px slate-200 (default) → slate-400 (hover) → primary-600 (focus)
 *   - Halo: YOX (outline + ring tamamilə silindi — daha təmiz estetik)
 *   - Background: white
 *   - Text: 14px slate-900
 *   - Placeholder: slate-400
 *
 * States: default, hover, focus (border color dəyişir, 4px halo YOX), filled,
 * disabled (slate-50 bg, slate-400 text), error (rose-500 border, halo YOX),
 * read-only (slate-50 bg, slate-700 text).
 *
 * WCAG 2.2 focus indicator: 1px primary-600 over slate-200 default-dən
 * yetərincə kontrast (≥3:1) verir.
 *
 * Slots (per design-system input.md Session 3):
 *   - prefix: leading icon / addon (left)
 *   - suffix: trailing icon / clear button (right)
 *   - implementation: parent wrapper compose, Input öz slot-larını qoymur
 *
 * Native `<input>` props (type, value, onChange, etc) prop spread ilə daxil.
 *
 * BLOCKING:
 *   - `size="large"` (48px+) QADAĞAN
 *   - native `<input type="date|time">` QADAĞAN (DatePicker custom comp gəlir)
 */
type InputProps = React.ComponentProps<'input'>;

function Input({ className, type, value, ...props }: InputProps) {
  return (
    <input
      type={type}
      // ⛔ #070 mərkəzi: RHF field.value null gələ bilər (nullable schema) → controlled
      // input-a `value={null}` React warning verir ("should not be null"). Burada bir dəfə
      // null→'' → bütün form-lar avtomatik düzgün (feature "null vermə"ni unutmur).
      value={value ?? ''}
      data-slot="input"
      className={cn(
        // Layout + size
        'flex h-10 w-full min-w-0 rounded-lg border bg-white px-3 py-2 text-sm',
        // Typography
        'text-text-primary placeholder:text-text-tertiary',
        // Default state
        'border-(--border-default) transition-colors',
        // Hover (when not focused)
        'hover:border-(--border-strong)',
        // Focus — yalnız border color dəyişir, halo YOX
        'focus:outline-none focus-visible:outline-none',
        'focus-visible:border-(--primary-600)',
        // Invalid — yalnız border color, halo YOX
        'aria-invalid:border-(--danger) aria-invalid:focus-visible:border-(--danger)',
        // Disabled
        'disabled:cursor-not-allowed disabled:bg-(--surface-2) disabled:text-text-tertiary',
        // Read-only
        'read-only:bg-(--surface-2) read-only:text-text-secondary read-only:cursor-default',
        // File input
        'file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-text-primary',
        // Selection
        'selection:bg-(--primary-200) selection:text-(--primary-900)',
        className,
      )}
      {...props}
    />
  );
}

export { Input, type InputProps };
