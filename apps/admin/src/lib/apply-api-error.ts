import type { FieldValues, Path, UseFormSetError } from 'react-hook-form';
import { ApiClientError } from './api';

/**
 * ApiClientError-un sahə-səviyyəli detallarını (VALIDATION_ERROR envelope)
 * RHF field error-larına map edir → mesaj input ALTINDA (docs/30 sərt qayda).
 * Sahə tapılmasa forma səviyyəli (root) error.
 */
export function applyApiError<T extends FieldValues>(
  err: unknown,
  setError: UseFormSetError<T>,
): void {
  if (err instanceof ApiClientError && err.details) {
    for (const [field, messages] of Object.entries(err.details)) {
      const message = messages[0];
      if (message) setError(field as Path<T>, { type: 'server', message });
    }
    return;
  }
  // Naməlum xəta → root
  const message = err instanceof Error ? err.message : 'Xəta baş verdi';
  setError('root' as Path<T>, { type: 'server', message });
}
