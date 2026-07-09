import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/shared/lib/utils';

/**
 * Card — layout container with hairline border + no shadow (default).
 *
 * Spec: docs/design-system/components/card.md
 *
 * Variants (E variant restraint — shadow only on overlay layers):
 *   default   — hairline border + NO shadow (feed posts, list sections, modal/drawer içi)
 *   elevated  — shadow-md (modal + drawer overlay layer)
 *   floating  — shadow-lg (popover, autocomplete dropdown, tooltip)
 *
 * Density variants (padding):
 *   default — 16px (spacing.4)
 *   compact — 12px (spacing.3) — dense list
 *   spacious — 24px (spacing.6) — hero card
 *
 * Tokens:
 *   - Background: white
 *   - Border: 1px slate-200 hairline
 *   - Radius: 8px (radius.lg)
 *   - Divider (header/footer): 1px slate-100
 */
const cardVariants = cva(
  'flex flex-col rounded-lg border bg-card text-card-foreground border-(--border-default)',
  {
    variants: {
      variant: {
        default: '',
        elevated: 'shadow-[0_4px_6px_-1px_rgba(15,23,42,0.08),0_2px_4px_-2px_rgba(15,23,42,0.05)]',
        floating:
          'shadow-[0_10px_15px_-3px_rgba(15,23,42,0.10),0_4px_6px_-4px_rgba(15,23,42,0.06)]',
      },
      density: {
        compact: 'gap-3 py-3',
        default: 'gap-4 py-4',
        spacious: 'gap-6 py-6',
      },
    },
    defaultVariants: {
      variant: 'default',
      density: 'default',
    },
  },
);

type CardProps = React.ComponentProps<'div'> & VariantProps<typeof cardVariants>;

function Card({ className, variant, density, ...props }: CardProps) {
  return (
    <div
      data-slot="card"
      data-variant={variant}
      data-density={density}
      className={cn(cardVariants({ variant, density }), className)}
      {...props}
    />
  );
}

/**
 * Card slot — kompozisiya pattern (spec card.md section composition):
 *   <Card>
 *     <CardHeader>
 *       <CardTitle>...</CardTitle>
 *       <CardDescription>...</CardDescription>
 *       <CardAction>⋮</CardAction>
 *     </CardHeader>
 *     <CardContent>...</CardContent>
 *     <CardFooter>...</CardFooter>
 *   </Card>
 */
function CardHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        '@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-4 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:border-(--border-default) [.border-b]:pb-4',
        className,
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-title"
      className={cn('leading-tight font-semibold text-text-primary', className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-description"
      className={cn('text-sm text-text-secondary leading-relaxed', className)}
      {...props}
    />
  );
}

function CardAction({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-action"
      className={cn('col-start-2 row-span-2 row-start-1 self-start justify-self-end', className)}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot="card-content" className={cn('px-4', className)} {...props} />;
}

function CardFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        'flex items-center px-4 [.border-t]:border-(--border-default) [.border-t]:pt-4',
        className,
      )}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
  type CardProps,
};
// eslint-disable-next-line react-refresh/only-export-components -- variants reused by consumers
export { cardVariants };
