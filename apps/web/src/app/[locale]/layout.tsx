import type { Metadata } from 'next';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';
import { routing } from '@/i18n/routing';
import { Analytics } from '@/components/analytics';
import { ConsentBanner } from '@/components/consent-banner';
import { SiteEffects } from '@/components/site-effects';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

const inter = Inter({
  subsets: ['latin', 'latin-ext', 'cyrillic'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  icons: { icon: '/design/img-1.svg' },
};

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

  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body className={`${inter.className} page-cinematic min-h-screen antialiased`}>
        <NextIntlClientProvider>
          <a className="skip-link" href="#main-content">
            Əsas məzmuna keç
          </a>

          <div className="page-intro" aria-hidden>
            <div className="intro-brand-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/design/img-2.svg" alt="" className="intro-horizontal-logo" />
              <span className="intro-brand-line" />
            </div>
          </div>

          <div className="site-shell">
            <SiteEffects />
            <SiteHeader />
            <main id="main-content" tabIndex={-1} className="pt-[76px]">
              {children}
            </main>
            <SiteFooter />
          </div>
          <ConsentBanner />
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
