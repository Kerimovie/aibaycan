import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check, Minus } from 'lucide-react';

import { cn } from '@/shared/lib/utils';

/**
 * Checkbox — Radix primitive customized to design-system tokens.
 *
 * Spec: docs/design-system/components/checkbox.md
 *
 * Variants (size prop):
 *   sm — 18×18 (default; inline label context)
 *   md — 24×24 (form section toggle)
 *
 * BLOCKING (foundation):
 *   - Standalone `<Checkbox />` without an accessible label is forbidden.
 *     Use `<CheckboxField>` for the canonical label-wrap pattern.
 *   - Focus halo: composite outer ring (2px white + 4px primary-500/40) per
 *     WCAG 2.4.13 AAA Focus Appearance.
 */
type CheckboxSize = 'sm' | 'md';

type CheckboxProps = React.ComponentProps<typeof CheckboxPrimitive.Root> & {
  size?: CheckboxSize;
};

function Checkbox({ className, size = 'sm', ...props }: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      data-size={size}
      className={cn(
        'group peer relative inline-flex shrink-0 items-center justify-center rounded-[4px] border-[1.5px] border-slate-300 bg-white text-white shadow-none transition-colors outline-none',
        'hover:border-slate-400',
        'focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-500',
        'data-[state=checked]:border-primary-600 data-[state=checked]:bg-primary-600',
        'data-[state=indeterminate]:border-primary-600 data-[state=indeterminate]:bg-primary-600',
        'aria-invalid:border-rose-500 aria-invalid:ring-rose-500/30',
        'disabled:cursor-not-allowed disabled:border-slate-200 disabled:bg-slate-100 disabled:hover:border-slate-200',
        size === 'sm' && 'size-[18px]',
        size === 'md' && 'size-6',
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-current"
      >
        {props.checked === 'indeterminate' ? (
          <Minus
            strokeWidth={3}
            className={cn(size === 'sm' ? 'size-3' : 'size-3.5')}
            aria-hidden
          />
        ) : (
          <Check
            strokeWidth={3}
            className={cn(size === 'sm' ? 'size-3' : 'size-3.5')}
            aria-hidden
          />
        )}
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

/**
 * CheckboxField — label-wrapped checkbox satisfying WCAG 2.5.8 tap area
 * via the "inline interactive content" exception (≥40×40 effective area
 * around the input + label).
 *
 * Use this in 99% of cases. Compose `<Checkbox>` raw only when wrapping
 * inside another label element (e.g. DataTable select-all in `<th>`).
 */
type CheckboxFieldProps = CheckboxProps & {
  /** Visible label content (string or rich node). */
  label: React.ReactNode;
  /** Optional helper text rendered below label. */
  description?: React.ReactNode;
  /** Wrapper className (applied to the outer <label>). */
  wrapperClassName?: string;
};

function CheckboxField({
  label,
  description,
  wrapperClassName,
  size = 'sm',
  id,
  ...props
}: CheckboxFieldProps) {
  const reactId = React.useId();
  const inputId = id ?? `checkbox-${reactId}`;

  return (
    <label
      htmlFor={inputId}
      data-slot="checkbox-field"
      className={cn(
        'flex cursor-pointer items-start gap-2.5 py-1 select-none',
        props.disabled === true && 'cursor-not-allowed opacity-60',
        wrapperClassName,
      )}
    >
      <Checkbox id={inputId} size={size} {...props} />
      <span className="flex flex-1 flex-col gap-1 leading-tight">
        <span className="text-sm text-text-primary">{label}</span>
        {description !== undefined && (
          <span className="text-xs text-text-tertiary">{description}</span>
        )}
      </span>
    </label>
  );
}

export { Checkbox, CheckboxField };
