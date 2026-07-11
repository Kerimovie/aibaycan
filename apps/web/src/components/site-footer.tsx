import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export function SiteFooter() {
  const t = useTranslations('nav');
  const tf = useTranslations('footer');
  const year = new Date().getFullYear();

  const links = [
    { href: '/projects', label: t('projects') },
    { href: '/services', label: t('services') },
    { href: '/blog', label: t('blog') },
    { href: '/contact', label: t('contact') },
  ] as const;

  return (
    <footer className="border-t border-black/[.07] py-10">
      <div className="mx-auto max-w-[1380px] px-5 sm:px-7 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr_.8fr]">
          <div>
            <Link href="/" className="brand-logo-link inline-flex items-center rounded-xl" aria-label="aibaycan">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/design/img-7.svg" alt="aibaycan" className="footer-brand-logo" />
            </Link>
            <p className="mt-5 max-w-sm leading-7 text-black/45">{tf('tagline')}</p>
          </div>

          <div>
            <div className="text-xs font-extrabold uppercase tracking-[.13em] text-black/32">{tf('navTitle')}</div>
            <div className="mt-5 grid gap-3 text-sm font-semibold text-black/55">
              {links.map((l) => (
                <Link key={l.href} href={l.href} className="transition hover:text-violet">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs font-extrabold uppercase tracking-[.13em] text-black/32">{t('contact')}</div>
            <div className="mt-5 grid gap-3 text-sm font-semibold text-black/55">
              <a className="transition hover:text-violet" href="mailto:hello@aibaycan.az">
                hello@aibaycan.az
              </a>
              <span>Bakı, Azərbaycan</span>
              <span>AZ · EN · RU</span>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-black/[.07] pt-6 text-xs font-semibold text-black/35 sm:flex-row">
          <span>© {year} aibaycan.az — {tf('rights')}</span>
          <span>{tf('slogan')}</span>
        </div>
      </div>
    </footer>
  );
}
