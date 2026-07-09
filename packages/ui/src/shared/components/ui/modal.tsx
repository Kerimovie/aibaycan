import type { ReactNode } from 'react';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/shared/components/ui/dialog';
import { ScrollArea } from '@/shared/components/ui/scroll-area';
import { useModalStackEntry } from '@/shared/lib/modal-stack';
import { cn } from '@/shared/lib/utils';

// `sm:` prefiks vacibdir — DialogContent base class-ı `sm:max-w-lg` saxlayır;
// non-responsive `max-w-*` onu desktop-da override edə bilmir. Eyni variantla
// (sm:) tailwind-merge düzgün əvəz edir. (user 2026-06-09 — modal böyümürdü)
const WIDTH: Record<NonNullable<ModalProps['size']>, string> = {
  sm: 'sm:max-w-md',
  md: 'sm:max-w-lg',
  lg: 'sm:max-w-2xl',
  xl: 'sm:max-w-3xl',
  '2xl': 'sm:max-w-4xl',
};

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  /** Modal eni: sm 448 · md 512 · lg 672 · xl 768 · 2xl 896. Default md. */
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  /** Əsas məzmun (scroll olunan body). */
  children: ReactNode;
  /**
   * Sərbəst footer slot — düymələri istehlakçı idarə edir (çoxaddımlı wizard
   * Növbəti/Geri, composer Göndər/Planlaşdır və s.). Verilməzsə footer
   * render olunmur. FormModal-dan fərq: FormModal forma + sabit primary/
   * secondary footer üçündür; bu Modal sərbəst content + sərbəst footer üçün.
   */
  footer?: ReactNode;
  className?: string;
};

/**
 * Modal — universal shared modal (Dialog primitivi üzərində). Sərbəst content
 * + opsional custom footer. Forma üçün `<FormModal>`, sadə təsdiq üçün
 * `FormModal mode="confirm"`, hər şey üçün bu `<Modal>`.
 *
 * BLOCKING (user 2026-06-09): yeni custom modal yazılırsa Dialog primitivini
 * birbaşa səhifədə işlətmə — bu wrapper-dən istifadə et.
 */
export function Modal({
  open,
  onClose,
  title,
  size = 'md',
  children,
  footer,
  className,
}: ModalProps) {
  // #186 — modal stack: z-index + overlay + modal prop (arxa modal=false, konflikt yox).
  const stack = useModalStackEntry(open);
  return (
    <Dialog open={open} onOpenChange={(o) => !o && stack.isTop && onClose()} modal={stack.modal}>
      <DialogContent
        stackEntry={stack}
        className={cn(
          WIDTH[size],
          'flex max-h-[90vh] flex-col gap-0 overflow-hidden rounded-xl bg-slate-50 p-0',
          className,
        )}
      >
        {/* Header — fərqli (boz) fon, body ağ panel ilə kontrast (user 2026-06-09) */}
        <DialogHeader className="shrink-0 bg-slate-50 px-5 py-4">
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        {/* Body — ağ panel, boz çərçivə ilə ayrılır.
            ⛔ #102: open=false → children render olunmur (daxili hooklar işləmir). HOC-suz
            birbaşa <Modal><Child/></Modal> halları üçün ikiqat təhlükəsizlik. */}
        <ScrollArea className="min-h-0 flex-1 border-y border-slate-200 bg-white px-5 py-5">
          {open ? children : null}
        </ScrollArea>
        {footer && (
          <div className="shrink-0 flex items-center justify-end gap-2 bg-slate-50 px-5 py-3.5">
            {footer}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
