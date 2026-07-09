import * as React from 'react';
import { XIcon } from 'lucide-react';
import * as DialogPrimitive from '@radix-ui/react-dialog';

import { cn } from '@/shared/lib/utils';
import { Button } from '@/shared/components/ui/button';
import type { ModalStackEntry } from '@/shared/lib/modal-stack';

function Dialog({ ...props }: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />;
}

function DialogTrigger({ ...props }: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
}

function DialogPortal({ ...props }: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
}

function DialogClose({ ...props }: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />;
}

function DialogOverlay({
  className,
  style,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      style={style}
      className={cn(
        'fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0',
        className,
      )}
      {...props}
    />
  );
}

function DialogContent({
  className,
  children,
  showCloseButton = true,
  stackEntry,
  style,
  onEscapeKeyDown,
  onPointerDownOutside,
  onInteractOutside,
  onFocusOutside,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & {
  showCloseButton?: boolean;
  /** #186 — modal stack (z-index + overlay şərti). Verilməzsə default z-50 (geriyə-uyğun). */
  stackEntry?: ModalStackEntry;
}) {
  // Stack varsa dinamik z-index; overlay yalnız üstdəki modalda (ikiqat qaranlıq yox).
  const zIndex = stackEntry?.zIndex;
  const contentStyle = zIndex !== undefined ? { ...style, zIndex } : style;
  const overlayStyle = zIndex !== undefined ? { zIndex: zIndex - 1 } : undefined;
  // ⛔ #186b (MƏRKƏZİ — #204b): üstdə BAŞQA modal varsa arxadakı dialog bağlanma
  // hadisələrinə (Esc/kənar klik/fokus itməsi) reaksiya VERMİR.
  //
  // ⛔ #209g İKİ İNCƏLİK:
  //  1. Radix pointerDownOutside-ı DƏRHAL yox, sonrakı CLICK anında dispatch edir.
  //     Üst modal X ilə bağlananda klik anında bu dialog artıq "top" olur → köhnə
  //     guard buraxırdı → alt modal da bağlanırdı (kaskad). Ona görə pointer-əsaslı
  //     qərar POINTERDOWN ANINDAKI isTop snapshot-una görə verilir.
  //  2. FOKUS-mənşəli "outside" HEÇ VAXT bağlamır — üst modal bağlananda fokus bir
  //     anlıq body-yə düşür və focusin→interactOutside default dismiss verirdi.
  const isTopRef = React.useRef(stackEntry?.isTop ?? true);
  isTopRef.current = stackEntry?.isTop ?? true;
  const wasTopAtPointerDown = React.useRef(true);
  React.useEffect(() => {
    const onPointerDown = (): void => {
      wasTopAtPointerDown.current = isTopRef.current;
    };
    document.addEventListener('pointerdown', onPointerDown, true);
    return () => document.removeEventListener('pointerdown', onPointerDown, true);
  }, []);

  function guarded<E extends { preventDefault: () => void }>(
    handler?: (e: E) => void,
    pointerBased = false,
  ): (e: E) => void {
    return (e) => {
      const wasTop = pointerBased
        ? wasTopAtPointerDown.current && (stackEntry?.isTop ?? true)
        : (stackEntry?.isTop ?? true);
      if (stackEntry && !wasTop) {
        e.preventDefault();
        return;
      }
      handler?.(e);
    };
  }
  const guardedInteract = (
    e: Parameters<
      NonNullable<React.ComponentProps<typeof DialogPrimitive.Content>['onInteractOutside']>
    >[0],
  ): void => {
    if (e.detail.originalEvent.type === 'focusin') {
      e.preventDefault();
      return;
    }
    guarded(onInteractOutside, true)(e);
  };
  return (
    <DialogPortal data-slot="dialog-portal">
      {(stackEntry?.showOverlay ?? true) && <DialogOverlay style={overlayStyle} />}
      <DialogPrimitive.Content
        data-slot="dialog-content"
        style={contentStyle}
        onEscapeKeyDown={guarded(onEscapeKeyDown)}
        onPointerDownOutside={guarded(onPointerDownOutside, true)}
        onInteractOutside={guardedInteract}
        onFocusOutside={(e) => {
          // Fokus itkisi dismiss deyil (yuxarı bax) — həmişə prevent.
          e.preventDefault();
          if (stackEntry && !stackEntry.isTop) return;
          onFocusOutside?.(e);
        }}
        className={cn(
          'border-(--border-default) fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border bg-background p-6 shadow-lg duration-200 outline-none data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 sm:max-w-lg',
          className,
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close
            data-slot="dialog-close"
            className="absolute top-4 right-4 rounded-xs opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
          >
            <XIcon />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  );
}

function DialogHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="dialog-header"
      className={cn('flex flex-col gap-2 text-center sm:text-left', className)}
      {...props}
    />
  );
}

function DialogFooter({
  className,
  showCloseButton = false,
  children,
  ...props
}: React.ComponentProps<'div'> & {
  showCloseButton?: boolean;
}) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn('flex flex-col-reverse gap-2 sm:flex-row sm:justify-end', className)}
      {...props}
    >
      {children}
      {showCloseButton && (
        <DialogPrimitive.Close asChild>
          <Button variant="secondary">Close</Button>
        </DialogPrimitive.Close>
      )}
    </div>
  );
}

function DialogTitle({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn('text-lg leading-none font-semibold', className)}
      {...props}
    />
  );
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn('text-sm text-muted-foreground', className)}
      {...props}
    />
  );
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
};
