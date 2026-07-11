'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Link } from '@/i18n/navigation';
import { LocaleSwitcher } from './locale-switcher';

export function SiteHeader() {
  const t = useTranslations('nav');
  const [open, setOpen] = useState(false);

  const links = [
    { href: '/projects', label: t('projects') },
    { href: '/services', label: t('services') },
    { href: '/blog', label: t('blog') },
    { href: '/about', label: t('about') },
    { href: '/contact', label: t('contact') },
  ] as const;

  return (
    <header id="siteHeader" className="site-header fixed inset-x-0 top-0 z-50 border-b border-transparent">
      <div className="mx-auto flex h-[76px] max-w-[1380px] items-center justify-between px-5 sm:px-7 lg:px-10">
        <Link
          href="/"
          className="brand-logo-link focus-ring group inline-flex items-center rounded-xl"
          aria-label="aibaycan.az ana səhifə"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/design/img-3.svg" alt="aibaycan" className="header-brand-logo" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Naviqasiya">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="focus-ring rounded-md text-sm font-semibold text-black/60 transition hover:text-black"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LocaleSwitcher />
          <Link href="/contact" className="button-primary focus-ring !min-h-[44px] !rounded-xl !px-4">
            {t('cta')}
            <Arrow />
          </Link>
        </div>

        <button
          className="focus-ring grid h-11 w-11 place-items-center rounded-xl border border-black/10 bg-white/70 lg:hidden"
          aria-expanded={open}
          aria-label={open ? 'Menyunu bağla' : 'Menyunu aç'}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <div className={`mobile-menu border-t border-black/[.06] bg-white/90 px-5 backdrop-blur-xl lg:hidden ${open ? 'open' : ''}`}>
        <nav className="flex flex-col gap-1 py-4" aria-label="Mobil naviqasiya">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-xl px-4 py-3 font-semibold hover:bg-black/[.04]"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <div className="mt-3 flex items-center justify-between gap-3 border-t border-black/[.06] pt-4">
            <LocaleSwitcher />
            <Link href="/contact" className="button-primary !min-h-[44px] !px-4" onClick={() => setOpen(false)}>
              {t('cta')}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

function Arrow() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
