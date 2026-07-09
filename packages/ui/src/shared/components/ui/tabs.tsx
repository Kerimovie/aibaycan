'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import * as TabsPrimitive from '@radix-ui/react-tabs';

import { cn } from '@/shared/lib/utils';

function Tabs({
  className,
  orientation = 'horizontal',
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      data-orientation={orientation}
      orientation={orientation}
      className={cn(
        // horizontal: flex-col + items-start ki TabsList (w-fit) stretch olmasın (tam en YOX).
        'group/tabs flex gap-2 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:items-start',
        className,
      )}
      {...props}
    />
  );
}

const tabsListVariants = cva(
  // #137 — Elegant Segmented dizayn (istifadəçi HTML mənbə): boz konteyner + ağ aktiv kart.
  'group/tabs-list inline-flex w-fit items-center justify-center gap-1 rounded-xl border border-(--border-default) p-1 text-muted-foreground group-data-[orientation=vertical]/tabs:h-fit group-data-[orientation=vertical]/tabs:flex-col data-[variant=line]:rounded-none',
  {
    variants: {
      variant: {
        default: 'bg-white',
        line: 'gap-1 border-transparent bg-transparent p-0',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

function TabsList({
  className,
  variant = 'default',
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List> & VariantProps<typeof tabsListVariants>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      data-variant={variant}
      className={cn(tabsListVariants({ variant }), className)}
      {...props}
    />
  );
}

function TabsTrigger({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        // #137 — Elegant Segmented: h-9, rounded-lg, aktiv açıq teal + border (ağ konteynerdə fərq).
        "relative inline-flex h-9 flex-1 items-center justify-center gap-1.5 rounded-lg border border-transparent px-3 text-sm font-medium whitespace-nowrap text-text-secondary transition-all group-data-[orientation=vertical]/tabs:w-full group-data-[orientation=vertical]/tabs:justify-start hover:bg-(--surface-2) hover:text-text-primary focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        // line variant (alt-xətt) — köhnə davranış saxlanır (form/yer fərqli istəsə)
        'group-data-[variant=line]/tabs-list:rounded-md group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:hover:bg-transparent group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent',
        // default variant aktiv = açıq teal fon + teal border (ağ konteynerdə fərqlənsin, #137)
        'data-[state=active]:border-(--primary-200) data-[state=active]:bg-(--primary-50) data-[state=active]:font-medium data-[state=active]:text-(--primary-700)',
        'after:absolute after:bg-foreground after:opacity-0 after:transition-opacity group-data-[orientation=horizontal]/tabs:after:inset-x-0 group-data-[orientation=horizontal]/tabs:after:bottom-[-5px] group-data-[orientation=horizontal]/tabs:after:h-0.5 group-data-[orientation=vertical]/tabs:after:inset-y-0 group-data-[orientation=vertical]/tabs:after:-right-1 group-data-[orientation=vertical]/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-[state=active]:after:opacity-100',
        className,
      )}
      {...props}
    />
  );
}

function TabsContent({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn('w-full flex-1 outline-none', className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
export { tabsListVariants };
