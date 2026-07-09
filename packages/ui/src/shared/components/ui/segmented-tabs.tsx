'use client';

import * as React from 'react';
import type { LucideIcon } from 'lucide-react';
import { cn } from '@/shared/lib/utils';

/**
 * SegmentedTabs (#137) — "Elegant Segmented" tab dizaynı (istifadəçi HTML mənbə birə-bir).
 * Boz fonlu konteyner (--surface-2) + aktiv tab = ağ kart (kölgəli), passiv = boz mətn
 * + hover ağ. Deklarativ: items + value + onChange (mərkəzi #070; hər yerdə bu, əl tab QADAĞAN #113).
 *
 * Layihə standartı — qrup detal, profil, ayar və s. bütün tab strip-ləri bununla.
 */

export type SegmentedTabItem<K extends string = string> = {
  key: K;
  label: string;
  icon?: LucideIcon;
  /** Sağda kiçik say/badge (məs. yeni tapşırıq sayı). */
  badge?: string | number;
  /** "Tezliklə" — solğun + klik yoxdur. */
  disabled?: boolean;
};

type SegmentedTabsProps<K extends string> = {
  items: SegmentedTabItem<K>[];
  value: K;
  onChange: (key: K) => void;
  /** Bərabər sütun (grid) yox, məzmuna görə en (üfüqi scroll). Default false = grid. */
  fitContent?: boolean;
  className?: string;
};

export function SegmentedTabs<K extends string>({
  items,
  value,
  onChange,
  fitContent = false,
  className,
}: SegmentedTabsProps<K>): React.ReactElement {
  return (
    <div
      role="tablist"
      className={cn(
        'rounded-xl border border-(--border-default) bg-white p-1',
        fitContent && 'overflow-x-auto [scrollbar-width:none]',
        className,
      )}
    >
      <div
        className={cn('gap-1', fitContent ? 'flex' : 'grid')}
        style={
          fitContent
            ? undefined
            : { gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))` }
        }
      >
        {items.map((tab) => {
          const Icon = tab.icon;
          const isActive = tab.key === value;
          return (
            <button
              key={tab.key}
              type="button"
              role="tab"
              aria-selected={isActive}
              disabled={tab.disabled}
              onClick={() => !tab.disabled && onChange(tab.key)}
              className={cn(
                'inline-flex h-9 items-center justify-center gap-2 rounded-lg border px-3 text-sm font-medium whitespace-nowrap transition-all',
                fitContent && 'shrink-0',
                isActive
                  ? 'border-(--primary-200) bg-(--primary-50) text-(--primary-700)'
                  : 'border-transparent text-text-secondary hover:bg-(--surface-2) hover:text-text-primary',
                tab.disabled && 'cursor-not-allowed opacity-40 hover:bg-transparent',
              )}
            >
              {Icon && <Icon className="size-4 shrink-0" strokeWidth={1.75} aria-hidden />}
              <span className="truncate">{tab.label}</span>
              {tab.badge !== undefined && tab.badge !== '' && (
                <span
                  className={cn(
                    'ml-0.5 shrink-0 rounded-full px-1.5 py-0.5 text-[11px] font-semibold',
                    isActive
                      ? 'bg-(--primary-100) text-(--primary-700)'
                      : 'bg-(--surface-3) text-text-tertiary',
                  )}
                >
                  {tab.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
