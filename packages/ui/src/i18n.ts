/**
 * i18n shim — komponentlərin `@/i18n` import-ı üçün.
 * App öz i18next instansını qurur; bu shim default instansı re-export edir
 * ki, ui komponentləri standalone typecheck olsun.
 */
import i18next from 'i18next';

export default i18next;
