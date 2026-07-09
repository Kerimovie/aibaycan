'use client';

import * as React from 'react';
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';
import { ChevronDown } from 'lucide-react';

import { cn } from '@/shared/lib/utils';

/**
 * Collapsible (#229) — açıla/qatlana bilən bölmə (Radix collapsible + shadcn stili).
 * İşlənmə: qabaqcıl/nadir parametrləri gizlət (progressive disclosure). `CollapsibleSection`
 * hazır başlıq + chevron + məzmun verir; xam `Collapsible/Trigger/Content` da export olunur.
 */

const Collapsible = CollapsiblePrimitive.Root;
const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;
const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent;

/**
 * Hazır bölmə — başlıq (sol icon opsional + ad + sağda chevron) + qatlanan məzmun.
 * `defaultOpen` ilə ilkin vəziyyət; kontrollü üçün `open`/`onOpenChange`.
 */
function CollapsibleSection({
  title,
  description,
  icon,
  defaultOpen = false,
  open,
  onOpenChange,
  children,
  className,
}: {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}): React.ReactElement {
  return (
    <Collapsible
      defaultOpen={defaultOpen}
      open={open}
      onOpenChange={onOpenChange}
      className={cn('rounded-xl border border-(--border-default) bg-white', className)}
    >
      <CollapsibleTrigger className="group flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition-colors hover:bg-(--surface-2) outline-none focus-visible:ring-2 focus-visible:ring-(--primary-300)">
        {icon && <span className="shrink-0 text-(--primary-600)">{icon}</span>}
        <span className="min-w-0 flex-1">
          <span className="text-text-primary block text-sm font-semibold">{title}</span>
          {description && (
            <span className="text-text-tertiary mt-0.5 block text-xs">{description}</span>
          )}
        </span>
        <ChevronDown
          className="text-text-tertiary size-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180"
          strokeWidth={2}
          aria-hidden
        />
      </CollapsibleTrigger>
      <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
        <div className="border-t border-(--border-subtle) px-4 py-4">{children}</div>
      </CollapsibleContent>
    </Collapsible>
  );
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent, CollapsibleSection };
