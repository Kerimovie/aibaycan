import type { InputHTMLAttributes, ReactNode } from 'react';
import { useId } from 'react';
import { cn } from '../lib/cn';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: ReactNode;
  error?: string;
}

export function Input({ label, error, className, id, ...props }: InputProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  return (
    <div>
      {label && (
        <label htmlFor={inputId} className="mb-1.5 block text-sm font-medium text-admin-text dark:text-neutral-200">
          {label}
        </label>
      )}
      <input
        id={inputId}
        aria-invalid={error ? true : undefined}
        className={cn(
          // Ynex input: incə border, ~6px radius, ~40px hündürlük (bax docs/29)
          'w-full rounded-md border px-3.5 py-2 text-sm outline-none transition-colors placeholder:text-admin-muted focus:border-brand',
          error ? 'border-danger' : 'border-admin-border dark:border-neutral-700',
          'bg-white dark:bg-neutral-900',
          className,
        )}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-danger">{error}</p>}
    </div>
  );
}
