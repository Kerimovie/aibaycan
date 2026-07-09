import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';
import { routing } from '@/i18n/routing';
import { Analytics } from '@/components/analytics';
import { ConsentBanner } from '@/components/consent-banner';
import { SiteHeader } from '@/components/site-header';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // next-intl API-lərindən ƏVVƏL çağırılmalıdır (static rendering üçün)
  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body className="min-h-screen bg-white text-text-primary">
        <NextIntlClientProvider>
          <SiteHeader />
          <main>{children}</main>
          <ConsentBanner />
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
