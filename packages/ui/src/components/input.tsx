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
        <label htmlFor={inputId} className="mb-1 block text-sm font-medium">
          {label}
        </label>
      )}
      <input
        id={inputId}
        aria-invalid={error ? true : undefined}
        className={cn(
          'w-full rounded-lg border px-3 py-2 outline-none transition-colors focus:border-brand',
          error ? 'border-red-400' : 'border-neutral-300 dark:border-neutral-700',
          'bg-white dark:bg-neutral-900',
          className,
        )}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}
