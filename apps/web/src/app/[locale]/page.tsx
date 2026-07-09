import { getTranslations, setRequestLocale } from 'next-intl/server';
import { JsonLd, organizationJsonLd } from '@/components/json-ld';
import { Link } from '@/i18n/navigation';
import { getCaseStudies, getClients, getServices, getTestimonials } from '@/lib/api';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('home');
  const [caseStudiesResult, services, testimonials, clients] = await Promise.all([
    getCaseStudies(),
    getServices(),
    getTestimonials(),
    getClients(),
  ]);
  const projects = caseStudiesResult?.items.filter((p) => p.featured) ?? [];

  return (
    <div className="mx-auto max-w-5xl px-4">
      <JsonLd data={organizationJsonLd()} />
      {/* Hero */}
      <section className="py-20 text-center">
        <h1 className="text-4xl font-bold sm:text-5xl">{t('hero.title')}</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-text-secondary">
          {t('hero.subtitle')}
        </p>
        <Link
          href="/projects"
          className="mt-8 inline-flex rounded-lg bg-primary px-6 py-3 text-lg font-medium text-white transition-colors hover:bg-primary-700"
        >
          {t('hero.cta')}
        </Link>
      </section>

      {/* Featured işlər */}
      <section className="py-12">
        <h2 className="mb-6 text-2xl font-semibold">{t('featured.title')}</h2>
        {projects.length === 0 ? (
          <p className="text-text-tertiary">{t('featured.empty')}</p>
        ) : (
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <li key={p.id}>
                <div className="rounded-lg border border-border bg-card p-5">
                  <h3 className="font-medium">{p.title}</h3>
                  <p className="mt-2 text-sm text-text-secondary">{p.summary}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Xidmətlər */}
      <section id="services" className="py-12">
        <h2 className="mb-6 text-2xl font-semibold">{t('services.title')}</h2>
        {!services || services.length === 0 ? (
          <p className="text-text-tertiary">{t('services.empty')}</p>
        ) : (
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <li key={s.id}>
                <div className="rounded-lg border border-border bg-card p-5">
                  <h3 className="font-medium">{s.title}</h3>
                  <p className="mt-2 text-sm text-text-secondary">{s.description}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Müştəri rəyləri — sosial sübut */}
      {testimonials && testimonials.length > 0 && (
        <section className="py-12">
          <h2 className="mb-6 text-2xl font-semibold">{t('testimonials.title')}</h2>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item) => (
              <li key={item.id} className="rounded-lg border border-border bg-card p-5">
                <blockquote className="text-text-secondary">“{item.quote}”</blockquote>
                <div className="mt-4 flex items-center gap-3">
                  {item.photo && (
                    <img
                      src={item.photo.url}
                      alt={item.photo.alt ?? item.author}
                      className="h-10 w-10 rounded-full object-cover"
                      loading="lazy"
                    />
                  )}
                  <div>
                    <p className="text-sm font-medium">{item.author}</p>
                    {(item.role ?? item.company) && (
                      <p className="text-xs text-text-tertiary">
                        {[item.role, item.company].filter(Boolean).join(', ')}
                      </p>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Müştəri loqo divarı */}
      {clients && clients.length > 0 && (
        <section className="py-12">
          <h2 className="mb-6 text-2xl font-semibold">{t('clients.title')}</h2>
          <ul className="flex flex-wrap items-center gap-8">
            {clients.map((client) => {
              const logo = client.logo ? (
                <img
                  src={client.logo.url}
                  alt={client.logo.alt ?? client.name}
                  className="h-10 w-auto opacity-70 transition-opacity hover:opacity-100"
                  loading="lazy"
                />
              ) : (
                <span className="text-text-secondary">{client.name}</span>
              );
              return (
                <li key={client.id}>
                  {client.websiteUrl ? (
                    <a href={client.websiteUrl} target="_blank" rel="noreferrer">
                      {logo}
                    </a>
                  ) : (
                    logo
                  )}
                </li>
              );
            })}
          </ul>
        </section>
      )}
    </div>
  );
}
