import * as React from 'react';
import { Eye, EyeOff, Lock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { cn } from '@/shared/lib/utils';

import { PasswordStrengthMeter } from './password-strength-meter';

/**
 * PasswordInput — `<input type="password">` with lock prefix + eye toggle suffix.
 *
 * Spec: docs/design-system/components/password-input.md
 *
 * BLOCKING:
 *   - `autoComplete` is REQUIRED — must be 'current-password' (login) or
 *     'new-password' (register / reset). WCAG 3.3.8 Accessible Auth.
 *   - Optional `showStrengthMeter` slot composes <PasswordStrengthMeter>.
 *
 * Eye toggle button is 28×28 (WCAG 2.5.8 AA pass at 24+); `aria-pressed`
 * reflects visibility state.
 */
type PasswordInputProps = {
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  error?: string | boolean;
  disabled?: boolean;
  required?: boolean;
  /** BLOCKING — must be one of the two. */
  autoComplete: 'current-password' | 'new-password';
  /** Render PasswordStrengthMeter below input (new-password contexts). */
  showStrengthMeter?: boolean;
  /** Helper text rendered next to strength meter label. */
  strengthMeterHelper?: string;
  id?: string;
  className?: string;
  'aria-describedby'?: string;
  /** <Field>/RHF aria-invalid ötürür → wrapper qırmızı (error prop olmasa belə). */
  'aria-invalid'?: boolean;
};

export function PasswordInput({
  value,
  defaultValue,
  placeholder = '••••••••',
  onChange,
  onBlur,
  error,
  disabled,
  required,
  autoComplete,
  showStrengthMeter = false,
  strengthMeterHelper,
  id,
  className,
  'aria-describedby': ariaDescribedBy,
  'aria-invalid': ariaInvalid,
}: PasswordInputProps) {
  const { t } = useTranslation();
  const reactId = React.useId();
  const inputId = id ?? `password-${reactId}`;
  const [visible, setVisible] = React.useState(false);
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = React.useState(defaultValue ?? '');
  const currentValue = isControlled ? (value ?? '') : internalValue;
  // error prop VƏ YA aria-invalid (Field/RHF) → wrapper qırmızı.
  const hasError = (error !== undefined && error !== false) || ariaInvalid === true;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) setInternalValue(e.target.value);
    onChange?.(e.target.value);
  };

  return (
    <div className={cn('w-full', className)}>
      <div
        data-slot="password-input"
        className={cn(
          // Layout
          'relative flex h-10 w-full items-stretch overflow-hidden rounded-lg border bg-white transition-colors',
          // Default + hover
          'border-(--border-default) has-[:hover]:border-(--border-strong)',
          // Focus — Input ilə eyni subtle pattern (halo YOX, yalnız border color)
          'focus-within:border-(--primary-600)',
          // Error
          hasError && 'border-(--danger) focus-within:border-(--danger)',
          // Disabled
          disabled === true && 'cursor-not-allowed bg-(--surface-2)',
        )}
      >
        <span
          aria-hidden
          data-slot="password-prefix"
          className="pointer-events-none inline-flex shrink-0 items-center justify-center pl-3 pr-1 text-slate-400"
        >
          <Lock className="size-4" strokeWidth={1.5} />
        </span>
        <input
          id={inputId}
          type={visible ? 'text' : 'password'}
          value={currentValue}
          placeholder={placeholder}
          onChange={handleChange}
          onBlur={onBlur}
          disabled={disabled}
          required={required}
          autoComplete={autoComplete}
          aria-invalid={hasError || undefined}
          aria-describedby={ariaDescribedBy}
          className={cn(
            'flex w-full min-w-0 bg-transparent px-2 py-2 text-sm outline-none',
            'text-text-primary placeholder:text-text-tertiary',
            'disabled:cursor-not-allowed disabled:text-text-tertiary',
          )}
        />
        <button
          type="button"
          aria-label={visible ? t('common.aria.hidePassword') : t('common.aria.showPassword')}
          aria-pressed={visible}
          onClick={() => setVisible((v) => !v)}
          disabled={disabled}
          className={cn(
            'inline-flex size-7 shrink-0 items-center justify-center self-center rounded-md text-slate-400 transition-colors mr-1.5',
            'hover:bg-slate-100 hover:text-slate-700',
            'focus-visible:ring-2 focus-visible:ring-(--primary-500) focus-visible:outline-none',
            'disabled:cursor-not-allowed disabled:opacity-50',
          )}
        >
          {visible ? (
            <EyeOff className="size-4" strokeWidth={1.5} aria-hidden />
          ) : (
            <Eye className="size-4" strokeWidth={1.5} aria-hidden />
          )}
        </button>
      </div>

      {typeof error === 'string' && error.length > 0 && (
        <p role="alert" className="mt-1.5 text-xs text-(--danger)">
          {error}
        </p>
      )}

      {showStrengthMeter && (
        <PasswordStrengthMeter
          password={currentValue}
          helper={strengthMeterHelper}
          className="mt-2"
        />
      )}
    </div>
  );
}
