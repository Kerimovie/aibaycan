import type { HTMLAttributes } from 'react';
import { cn } from '../lib/cn';

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'rounded-lg border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900',
        className,
      )}
      {...props}
    />
  );
}

export function CardTitle({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={cn('font-medium', className)} {...props} />;
}

export function CardBody({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn('mt-2 text-sm text-neutral-600 dark:text-neutral-400', className)}
      {...props}
    />
  );
}
