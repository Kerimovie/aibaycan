import type { HTMLAttributes } from 'react';
import { cn } from '../lib/cn';

type Tone = 'brand' | 'success' | 'warning' | 'danger' | 'info' | 'neutral';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: Tone;
}

// Ynex yumşaq badge-lər (açıq fon + tünd mətn)
const TONES: Record<Tone, string> = {
  brand: 'bg-brand-light text-brand',
  success: 'bg-success/15 text-success',
  warning: 'bg-warning/15 text-[#b8860b]',
  danger: 'bg-danger/15 text-danger',
  info: 'bg-info/15 text-info',
  neutral: 'bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300',
};

export function Badge({ tone = 'neutral', className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded px-2 py-0.5 text-xs font-medium',
        TONES[tone],
        className,
      )}
      {...props}
    />
  );
}
