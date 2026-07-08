import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { getProjects, getServices } from '@/lib/api';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('home');
  const [projectsResult, services] = await Promise.all([getProjects(), getServices()]);
  const projects = projectsResult?.items.filter((p) => p.featured) ?? [];

  return (
    <div className="mx-auto max-w-5xl px-4">
      {/* Hero */}
      <section className="py-20 text-center">
        <h1 className="text-4xl font-bold sm:text-5xl">{t('hero.title')}</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
          {t('hero.subtitle')}
        </p>
        <Link
          href="/projects"
          className="mt-8 inline-block rounded-lg bg-brand px-6 py-3 font-medium text-white hover:bg-brand-dark"
        >
          {t('hero.cta')}
        </Link>
      </section>

      {/* Featured işlər */}
      <section className="py-12">
        <h2 className="mb-6 text-2xl font-semibold">{t('featured.title')}</h2>
        {projects.length === 0 ? (
          <p className="text-neutral-500">{t('featured.empty')}</p>
        ) : (
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <li
                key={p.id}
                className="rounded-lg border border-neutral-200 p-5 dark:border-neutral-800"
              >
                <h3 className="font-medium">{p.title}</h3>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{p.summary}</p>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Xidmətlər */}
      <section id="services" className="py-12">
        <h2 className="mb-6 text-2xl font-semibold">{t('services.title')}</h2>
        {!services || services.length === 0 ? (
          <p className="text-neutral-500">{t('services.empty')}</p>
        ) : (
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <li
                key={s.id}
                className="rounded-lg border border-neutral-200 p-5 dark:border-neutral-800"
              >
                <h3 className="font-medium">{s.title}</h3>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  {s.description}
                </p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
