import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/shared/lib/utils';

/**
 * Button — design-system spec (docs/design-system/components/button.md).
 *
 * Variants (8):
 *   primary       — teal-600 bg, white text (default CTA)
 *   secondary     — slate-700 text, slate-200 border, slate-100 hover (cancel/back)
 *   danger        — rose-600 bg, white text (delete/archive)
 *   link          — inline slate-700 + underline on hover
 *   ghost         — transparent + slate-600 text, slate-100 hover (modal cancel,
 *                   composer toolbar buttons)
 *   outline-teal  — white bg + teal-300 border + teal-700 text (secondary brand
 *                   CTA — material download, invite accept, analytics link)
 *   actionBtn     — transparent + slate-500 text + 36px height (FeedCard action
 *                   row: Like / Comment / Share / Bookmark)
 *   btn-xs        — 28px compact card action (TenantCard "Qoşul" / "Növbə")
 *
 * Sizes (4):
 *   default — 40px height (md per spec)
 *   sm      — 32px (modal footer, drawer foot)
 *   xs      — 28px (inline card actions; pairs with `btn-xs` variant)
 *   icon    — 40×40 square (icon-only)
 *   icon-sm — 32×32 square
 *
 * BLOCKING qaydalar:
 *   - `size="large"` (48px+) QADAĞAN — design-system v2 möhürü
 *   - radius 8px (radius.lg) — foundation Session 3+4 align (S1 6px deprecated)
 */
const buttonVariants = cva(
  [
    'inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap',
    'rounded-lg font-medium transition-colors duration-150',
    'outline-none focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background',
    'disabled:pointer-events-none disabled:opacity-50',
    '[&_svg]:pointer-events-none [&_svg]:shrink-0',
    "[&_svg:not([class*='size-'])]:size-4",
  ].join(' '),
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-primary-foreground hover:bg-(--primary-700) active:bg-(--primary-800) disabled:bg-(--primary-100) disabled:text-(--primary-700)',
        secondary:
          'border border-(--border-default) bg-background text-text-primary hover:bg-(--surface-2) hover:border-(--border-strong)',
        danger:
          'bg-(--danger) text-white hover:bg-[#be123c] active:bg-[#9f1239] focus-visible:ring-(--danger)/40',
        link: 'h-auto p-0 text-text-primary underline-offset-4 hover:underline rounded-none',
        ghost: 'text-text-secondary hover:bg-(--surface-2) hover:text-text-primary',
        'outline-teal':
          'border border-(--primary-300) bg-background text-(--primary-700) hover:bg-(--primary-50)',
        actionBtn:
          'h-9 gap-1.5 px-2.5 text-[13px] text-text-tertiary hover:bg-(--surface-2) hover:text-text-primary',
        'btn-xs':
          'h-7 gap-1 px-2.5 text-xs bg-primary text-primary-foreground hover:bg-(--primary-700)',
      },
      size: {
        default: 'h-10 px-4 text-sm',
        sm: 'h-8 px-3 text-sm gap-1.5',
        xs: 'h-7 px-2.5 text-xs gap-1',
        icon: 'size-10',
        'icon-sm': 'size-8',
      },
    },
    compoundVariants: [
      // actionBtn + btn-xs öz height-ı var, size override qadağan
      { variant: 'actionBtn', size: 'default', class: 'h-9' },
      { variant: 'btn-xs', size: 'default', class: 'h-7' },
      { variant: 'link', size: 'default', class: 'h-auto px-0' },
    ],
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
);

type ButtonProps = React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, type ButtonProps };
// eslint-disable-next-line react-refresh/only-export-components -- variants reused by consumers (shadcn convention)
export { buttonVariants };
