import { useMemo, useRef, useState } from 'react';
import { Check, ChevronDown, Search } from 'lucide-react';

import { Input } from '../ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { ScrollArea } from '../ui/scroll-area';
import { cn } from '../../lib/utils';

export type SearchableSelectOption = {
  value: string;
  label: string;
  /** Axtarışda da nəzərə alınan əlavə açar sözlər (label-dan başqa). */
  keywords?: string;
};

type SearchableSelectProps = {
  options: SearchableSelectOption[];
  value: string | null;
  onChange: (value: string) => void;
  placeholder?: string;
  searchPlaceholder?: string;
  emptyText?: string;
  disabled?: boolean;
  error?: string | boolean;
  id?: string;
  className?: string;
  /** Bu sayda və ya daha çox option-da search göstər (SƏRT qayda: 10). */
  searchThreshold?: number;
};

/**
 * Axtarışlı select (SƏRT UI qayda: 10+ option-da daxili search MÜTLƏQ).
 *
 * Popover + filter Input + ScrollArea. 10-dan az option-da search gizlənir
 * (sadə Select kimi). Mənbə pattern: input-phone/country-picker-popover.
 */
export function SearchableSelect({
  options,
  value,
  onChange,
  placeholder = 'Seçin…',
  searchPlaceholder = 'Axtar…',
  emptyText = 'Nəticə yoxdur',
  disabled,
  error,
  id,
  className,
  searchThreshold = 10,
}: SearchableSelectProps): React.ReactElement {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const searchRef = useRef<HTMLInputElement>(null);

  const selected = useMemo(() => options.find((o) => o.value === value) ?? null, [options, value]);
  const showSearch = options.length >= searchThreshold;

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (q === '') return options;
    return options.filter(
      (o) => o.label.toLowerCase().includes(q) || (o.keywords?.toLowerCase().includes(q) ?? false),
    );
  }, [options, search]);

  return (
    <Popover
      open={open}
      onOpenChange={(next) => {
        if (disabled) return;
        setOpen(next);
        if (next) {
          if (showSearch) window.setTimeout(() => searchRef.current?.focus(), 50);
        } else {
          setSearch('');
        }
      }}
    >
      <PopoverTrigger asChild>
        <button
          type="button"
          id={id}
          disabled={disabled}
          aria-invalid={error ? true : undefined}
          aria-haspopup="listbox"
          aria-expanded={open}
          className={cn(
            'border-border bg-white flex h-10 w-full items-center justify-between gap-2 rounded-lg border px-3 text-sm transition-colors outline-none',
            'focus-visible:border-primary-600 focus-visible:ring-primary-500/30 focus-visible:ring-[3px]',
            'disabled:cursor-not-allowed disabled:opacity-50',
            'aria-invalid:border-(--danger)',
            !selected && 'text-text-tertiary',
            className,
          )}
        >
          <span className="truncate">{selected ? selected.label : placeholder}</span>
          <ChevronDown
            className={cn(
              'text-text-tertiary size-4 shrink-0 transition-transform',
              open && 'rotate-180',
            )}
            aria-hidden
          />
        </button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        sideOffset={6}
        className="border-border w-[var(--radix-popover-trigger-width)] overflow-hidden rounded-xl border p-0 shadow-xl"
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        {showSearch && (
          <div className="border-border border-b px-3 py-2.5">
            <div className="relative">
              <Search
                className="text-text-tertiary absolute top-1/2 left-2.5 size-4 -translate-y-1/2"
                aria-hidden
              />
              <Input
                ref={searchRef}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={searchPlaceholder}
                className="bg-surface-2 focus-visible:border-primary-600 h-9 pl-8 text-sm focus-visible:bg-(--background)"
              />
            </div>
          </div>
        )}
        <ScrollArea className="max-h-72">
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center gap-1 px-4 py-10 text-center">
              <Search className="text-text-tertiary size-5" aria-hidden />
              <p className="text-text-secondary text-sm">{emptyText}</p>
            </div>
          ) : (
            <div role="listbox" className="py-1">
              {filtered.map((opt) => {
                const isSelected = opt.value === value;
                return (
                  <button
                    key={opt.value}
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => {
                      onChange(opt.value);
                      setOpen(false);
                    }}
                    className={cn(
                      'flex w-full items-center gap-3 px-3 py-2 text-sm transition-colors outline-none',
                      'text-text-secondary hover:bg-surface-2 cursor-pointer',
                      isSelected && 'bg-primary-50 text-primary-700 hover:bg-primary-50',
                    )}
                  >
                    <span className="flex-1 truncate text-left">{opt.label}</span>
                    {isSelected && (
                      <Check className="text-primary-600 size-4 shrink-0" strokeWidth={2.5} />
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </ScrollArea>
      </PopoverContent>
    </Popover>
  );
}
