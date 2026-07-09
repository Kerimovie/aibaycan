import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../lib/cn';

/**
 * Ynex "box" — admin panel kartı (bax docs/29).
 * Card-dan fərqli: header/body ayrı zolaqlar, başlıq violet aksent xətti ilə.
 */
export function Box({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'rounded-lg border border-admin-border bg-admin-card dark:border-neutral-800 dark:bg-neutral-900',
        className,
      )}
      {...props}
    />
  );
}

export interface BoxHeaderProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  title?: ReactNode;
  action?: ReactNode;
}

export function BoxHeader({ title, action, className, children, ...props }: BoxHeaderProps) {
  return (
    <div
      className={cn(
        'flex items-center justify-between border-b border-admin-border px-5 py-4 dark:border-neutral-800',
        className,
      )}
      {...props}
    >
      {title ? (
        // violet aksent xətti + başlıq (Ynex box-title)
        <h3 className="flex items-center gap-2 text-[15px] font-semibold text-admin-text dark:text-neutral-100">
          <span className="h-4 w-1 rounded-full bg-brand" aria-hidden />
          {title}
        </h3>
      ) : (
        children
      )}
      {action}
    </div>
  );
}

export function BoxBody({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('p-5', className)} {...props} />;
}
