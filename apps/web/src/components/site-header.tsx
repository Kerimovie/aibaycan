import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { LocaleSwitcher } from './locale-switcher';

export function SiteHeader() {
  const t = useTranslations('nav');

  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-semibold">
          aibaycan.az
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/projects" className="hover:text-primary">
            {t('projects')}
          </Link>
          <Link href="/#services" className="hover:text-primary">
            {t('services')}
          </Link>
          <Link href="/contact" className="hover:text-primary">
            {t('contact')}
          </Link>
          <LocaleSwitcher />
        </nav>
      </div>
    </header>
  );
}
