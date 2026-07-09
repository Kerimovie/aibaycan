'use client';

import type { ReactNode } from 'react';
import { X } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle } from '@/shared/components/ui/dialog';
import { useModalStackEntry } from '@/shared/lib/modal-stack';
import { cn } from '@/shared/lib/utils';

/**
 * WideModal (#139) — geniş "split" modal: sol sidebar + sağ content (topbar + scroll body).
 * Müəllim profili kimi zəngin, iki-sütun modallar üçün layihə standartı (#113 — feature-daxili
 * raw Dialog QADAĞAN). Standart `Modal` (max 2xl) sığmadıqda bunu işlət.
 *
 * Slotlar: `sidebar` (sol — profil/naviqasiya), `header` (sağ topbar sol tərəf — başlıq),
 * `actions` (sağ topbar sağ — düymələr; bağla X avtomatik əlavə), `children` (scroll body).
 */
export function WideModal({
  open,
  onClose,
  title,
  sidebar,
  header,
  actions,
  children,
  rail,
  width = 1360,
  className,
}: {
  open: boolean;
  onClose: () => void;
  /** A11y başlığı (sr-only — vizual header `header` slot-undadır). */
  title: string;
  /** Sol sidebar (sabit, scroll daxili). */
  sidebar: ReactNode;
  /** Sağ topbar sol hissə (başlıq/eyebrow). */
  header?: ReactNode;
  /** Sağ topbar sağ hissə (düymələr). Bağla X avtomatik sonra əlavə olunur. */
  actions?: ReactNode;
  /** Scroll body (sağ content). */
  children: ReactNode;
  /**
   * Sağ insight rail (#200 — Student 360 "komanda mərkəzi"): content-in sağında
   * sabit 300px sütun (öz scroll-u). Verilməzsə render olunmur (teacher modal 2 sütun).
   */
  rail?: ReactNode;
  /** Maks en px (default 1360). */
  width?: number;
  className?: string;
}): React.ReactElement {
  // #186/#204b — stack: bağlanma yalnız üstdə olanda.
  const stack = useModalStackEntry(open);
  return (
    <Dialog open={open} onOpenChange={(o) => !o && stack.isTop && onClose()} modal={stack.modal}>
      <DialogContent
        showCloseButton={false}
        stackEntry={stack}
        style={{ maxWidth: `min(${width}px, calc(100vw - 3rem))` }}
        className={cn(
          'flex h-[calc(100vh-3rem)] max-h-[900px] w-[calc(100vw-3rem)]',
          'gap-0 overflow-hidden rounded-[24px] border-(--border-default) bg-white p-0',
          className,
        )}
      >
        <DialogTitle className="sr-only">{title}</DialogTitle>

        {/* Sol sidebar */}
        <aside className="border-(--border-default) flex w-[340px] shrink-0 flex-col border-r bg-(--surface-2)">
          {sidebar}
        </aside>

        {/* Sağ content */}
        <div className="flex min-w-0 flex-1 flex-col">
          {/* Topbar (header + actions + bağla) */}
          <header className="border-(--border-default) flex h-16 shrink-0 items-center justify-between border-b bg-white px-6">
            <div className="min-w-0">{header}</div>
            <div className="flex items-center gap-2">
              {actions}
              <button
                type="button"
                onClick={onClose}
                aria-label="Bağla"
                className="border-(--border-default) text-text-secondary hover:bg-(--surface-2) grid size-10 shrink-0 place-items-center rounded-xl border"
              >
                <X className="size-4" strokeWidth={1.75} />
              </button>
            </div>
          </header>

          {/* Scroll body */}
          <main className="flex-1 overflow-y-auto bg-(--surface-2) p-6">{children}</main>
        </div>

        {/* Sağ insight rail (#200) — yalnız verildikdə; dar ekranda gizli */}
        {rail && (
          <aside className="border-(--border-default) hidden w-[300px] shrink-0 overflow-y-auto border-l bg-(--surface-2) p-4 xl:block">
            {rail}
          </aside>
        )}
      </DialogContent>
    </Dialog>
  );
}
