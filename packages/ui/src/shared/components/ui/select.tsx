'use client';

import * as React from 'react';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import * as SelectPrimitive from '@radix-ui/react-select';

import { cn } from '@/shared/lib/utils';

function Select({ ...props }: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />;
}

function SelectGroup({ ...props }: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />;
}

function SelectValue({ ...props }: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />;
}

function SelectTrigger({
  className,
  size = 'default',
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
  size?: 'sm' | 'default';
}) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        // Layout + size (Input ilə eyni: h-10, w-full, rounded-lg)
        'flex w-full items-center justify-between gap-2 rounded-lg border bg-white px-3 text-sm whitespace-nowrap data-[size=default]:h-10 data-[size=sm]:h-8',
        // Default + hover (border color dəyişikliyi, halo YOX)
        'border-(--border-default) transition-colors hover:border-(--border-strong)',
        // Focus — yalnız border color (Input ilə eyni subtle pattern)
        'focus:outline-none focus-visible:outline-none focus-visible:border-(--primary-600)',
        // Open state — primary border (modern: Google/Linear pattern)
        'data-[state=open]:border-primary-600',
        // Invalid
        'aria-invalid:border-(--danger) aria-invalid:focus-visible:border-(--danger)',
        // Disabled
        'disabled:cursor-not-allowed disabled:bg-(--surface-2) disabled:text-text-tertiary',
        // Cursor
        'cursor-pointer disabled:cursor-not-allowed',
        // Placeholder + Radix slot composition
        "data-[placeholder]:text-text-tertiary *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-text-tertiary",
        className,
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className="size-4 text-text-tertiary transition-transform duration-200 group-data-[state=open]/select:rotate-180" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
}

function SelectContent({
  className,
  children,
  position = 'popper',
  align = 'start',
  sideOffset = 6,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        sideOffset={sideOffset}
        className={cn(
          // z-[70] modal/drawer (z-[60]) üzərində açılsın
          'relative z-70 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-lg border border-slate-200 bg-white text-text-primary shadow-lg',
          // Modern entrance/exit animations
          'data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1',
          'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
          className,
        )}
        position={position}
        align={align}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            'p-1',
            position === 'popper' &&
              'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1',
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
}

function SelectLabel({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn('px-2 py-1.5 text-xs text-muted-foreground', className)}
      {...props}
    />
  );
}

function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        // Layout — uniform padding, modern dropdown item
        'relative flex w-full cursor-pointer items-center gap-2 rounded-md px-3 py-2 pr-9 text-sm outline-hidden select-none',
        // Hover/focus — modern: light primary tint
        'text-text-primary focus:bg-primary-50 focus:text-primary-700 hover:bg-primary-50 hover:text-primary-700',
        // Selected — accent indicator (checkmark sağda) + medium font weight
        'data-[state=checked]:font-medium',
        // Disabled
        'data-disabled:pointer-events-none data-disabled:opacity-50 data-disabled:cursor-not-allowed',
        // SVG normalization
        "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-text-tertiary *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className,
      )}
      {...props}
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      <span
        data-slot="select-item-indicator"
        className="absolute right-2.5 flex size-4 items-center justify-center text-primary-600"
      >
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="size-4" strokeWidth={2.5} />
        </SelectPrimitive.ItemIndicator>
      </span>
    </SelectPrimitive.Item>
  );
}

function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn('pointer-events-none -mx-1 my-1 h-px bg-border', className)}
      {...props}
    />
  );
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn('flex cursor-pointer items-center justify-center py-1', className)}
      {...props}
    >
      <ChevronUpIcon className="size-4" />
    </SelectPrimitive.ScrollUpButton>
  );
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn('flex cursor-pointer items-center justify-center py-1', className)}
      {...props}
    >
      <ChevronDownIcon className="size-4" />
    </SelectPrimitive.ScrollDownButton>
  );
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
};
