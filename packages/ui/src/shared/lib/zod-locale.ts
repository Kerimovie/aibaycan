import { z } from 'zod';

/** i18n tərcümə funksiyası (app ötürür — ui app-dən asılı deyil). */
type TFn = (key: string, opts?: Record<string, unknown>) => string;

/**
 * Zod 4 default error mesajlarını i18n ilə tərcümə edir (`z.config({customError})`).
 *
 * App `main.tsx`-dən bir dəfə çağırılır: `installZodLocale((k,o)=>i18n.t(k,o))`.
 * customError aktiv dilə əsasən `t()` çağırır — dil dəyişəndə yenidən qurmaq lazım deyil.
 * Schema-larda mesaj YAZMAĞA EHTİYAC YOX — default-lar avtomatik tərcümə olunur.
 *
 * QEYD: Zod 4-də error map API-si Zod 3-dən fərqlidir (setErrorMap → config,
 * issue kodları dəyişib). Bu, Zod 4-ə uyğunlaşdırılmış versiyadır.
 */
export function installZodLocale(t: TFn): void {
  z.config({
    customError: (iss) => {
      switch (iss.code) {
        case 'invalid_type': {
          // required (undefined/null gələn)
          if (iss.input === undefined || iss.input === null) {
            return t('validation.required');
          }
          return undefined; // default mesaj
        }

        case 'too_small': {
          const min = Number(iss.minimum);
          if (iss.origin === 'string') {
            if (min === 1) return t('validation.required');
            return t('validation.minChars', { count: min });
          }
          if (iss.origin === 'number') {
            return t('validation.minNumber', { value: min });
          }
          return undefined;
        }

        case 'too_big': {
          const max = Number(iss.maximum);
          if (iss.origin === 'string') return t('validation.maxChars', { count: max });
          if (iss.origin === 'number') return t('validation.maxNumber', { value: max });
          return undefined;
        }

        case 'invalid_format': {
          // Zod 4: email/url/uuid — iss.format
          const format = (iss as { format?: string }).format;
          if (format === 'email') return t('validation.email');
          if (format === 'url') return t('validation.url');
          if (format === 'uuid') return t('validation.uuid');
          return undefined;
        }

        default:
          return undefined; // Zod default mesajı
      }
    },
  });
}
