import * as React from 'react';

import { cn } from '@/shared/lib/utils';

/**
 * Textarea — Input ilə eyni subtle focus tokens (2026-05-23):
 * border color dəyişikliyi, halo/ring YOX.
 */
function Textarea({ className, value, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      // ⛔ #070 mərkəzi: null→'' (Input ilə eyni — nullable RHF field controlled warning-i).
      value={value ?? ''}
      data-slot="textarea"
      className={cn(
        // Layout + size
        'flex field-sizing-content min-h-16 w-full rounded-lg border bg-white px-3 py-2 text-sm',
        // Typography
        'text-text-primary placeholder:text-text-tertiary',
        // Default + hover
        'border-(--border-default) transition-colors hover:border-(--border-strong)',
        // Focus — yalnız border color, halo YOX
        'focus:outline-none focus-visible:outline-none focus-visible:border-(--primary-600)',
        // Invalid — yalnız border color
        'aria-invalid:border-(--danger) aria-invalid:focus-visible:border-(--danger)',
        // Disabled
        'disabled:cursor-not-allowed disabled:bg-(--surface-2) disabled:text-text-tertiary',
        // Read-only
        'read-only:bg-(--surface-2) read-only:text-text-secondary read-only:cursor-default',
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
