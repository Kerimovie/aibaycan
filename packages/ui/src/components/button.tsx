import type { ButtonHTMLAttributes } from 'react';
import { cn } from '../lib/cn';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const VARIANTS: Record<Variant, string> = {
  primary: 'bg-brand text-white hover:bg-brand-dark',
  secondary:
    'border border-neutral-300 text-neutral-700 hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800',
  ghost: 'text-neutral-700 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800',
};

const SIZES: Record<Size, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2',
  lg: 'px-6 py-3 text-lg',
};

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        'inline-flex items-center justify-center rounded-lg font-medium transition-colors disabled:opacity-60 disabled:pointer-events-none focus-visible:outline-2 focus-visible:outline-brand',
        VARIANTS[variant],
        SIZES[size],
        className,
      )}
      {...props}
    />
  );
}
