'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { routing, type Locale } from '@/i18n/routing';

const LABELS: Record<Locale, string> = {
  az: 'AZ',
  en: 'EN',
  ru: 'RU',
};

export function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function onChange(next: Locale) {
    // Cari path-i saxlayaraq locale-i dəyiş
    router.replace(pathname, { locale: next });
  }

  return (
    <div className="flex gap-1 text-xs">
      {routing.locales.map((loc) => (
        <button
          key={loc}
          type="button"
          onClick={() => onChange(loc)}
          aria-current={loc === locale ? 'true' : undefined}
          className={
            loc === locale
              ? 'font-semibold text-brand'
              : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100'
          }
        >
          {LABELS[loc]}
        </button>
      ))}
    </div>
  );
}
