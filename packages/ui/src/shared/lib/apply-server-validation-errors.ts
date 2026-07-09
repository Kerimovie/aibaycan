import type { FieldValues, Path, UseFormReturn } from 'react-hook-form';

type ErrorBody = {
  message?: string;
  /** Gələcəkdə field-level (backend hələ {message} qaytarır). */
  errors?: Record<string, string[] | string>;
};

/**
 * Server xətasını React Hook Form field-lərinə map edir.
 *
 * Bizim backend `{ message }` qaytarır (AllExceptionsFilter — docs/06-api-design.md).
 * SƏRT QAYDA (CLAUDE.md): xəta input ALTINDA göstərilir, banner YOX.
 *
 * Davranış:
 *   - `fields` verilibsə → mesaj həmin field(lər)-in altında + input qırmızı
 *     (məs login: ['email','password'] → mesaj parol altında, hər ikisi qırmızı).
 *   - field-level `errors` obyekti gəlsə (gələcək) → hər field-ə birbaşa.
 *   - Heç biri yoxdursa → `root.serverError`.
 *
 * @param fields mesajın qoyulacağı field(lər). Birdən çoxdursa, sonuncuda
 *   mesaj göstərilir, qalanları yalnız qırmızı (boş mesaj).
 */
export function applyServerValidationErrors<T extends FieldValues>(
  err: unknown,
  form: UseFormReturn<T>,
  fields?: Path<T>[],
): void {
  const body = extractBody(err);

  // Field-level errors (gələcək backend formatı)
  if (body.errors && typeof body.errors === 'object') {
    for (const [field, msgs] of Object.entries(body.errors)) {
      const message = Array.isArray(msgs) ? msgs[0] : String(msgs);
      if (message) form.setError(field as Path<T>, { type: 'server', message });
    }
    return;
  }

  const message = body.message ?? 'Xəta baş verdi.';

  if (fields && fields.length > 0) {
    fields.forEach((f, i) => {
      const isLast = i === fields.length - 1;
      form.setError(
        f,
        { type: 'server', message: isLast ? message : '' },
        { shouldFocus: i === 0 },
      );
    });
    return;
  }

  form.setError('root.serverError' as Path<T>, { type: 'server', message });
}

function extractBody(err: unknown): ErrorBody {
  if (err && typeof err === 'object' && 'response' in err) {
    const data = (err as { response?: { data?: ErrorBody } }).response?.data;
    if (data && typeof data === 'object') return data;
  }
  return {};
}
