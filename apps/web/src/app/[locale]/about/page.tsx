import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { getTeam } from '@/lib/api';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });
  return { title: t('title'), description: t('subtitle') };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('about');

  const team = await getTeam();

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl font-bold">{t('title')}</h1>
      <p className="mb-10 mt-2 text-text-secondary">{t('subtitle')}</p>

      <h2 className="mb-6 text-2xl font-semibold">{t('team')}</h2>
      {!team || team.length === 0 ? (
        <p className="text-text-tertiary">{t('empty')}</p>
      ) : (
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <li key={member.id} className="text-center">
              {member.photo ? (
                <img
                  src={member.photo.url}
                  alt={member.photo.alt ?? member.name}
                  className="mx-auto h-32 w-32 rounded-full object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-surface-2 text-2xl font-semibold text-text-tertiary">
                  {member.name.charAt(0)}
                </div>
              )}
              <h3 className="mt-4 font-medium">{member.name}</h3>
              <p className="text-sm text-primary">{member.role}</p>
              {member.bio && <p className="mt-2 text-sm text-text-secondary">{member.bio}</p>}

              {Object.keys(member.socials).length > 0 && (
                <div className="mt-3 flex justify-center gap-3 text-sm">
                  {Object.entries(member.socials).map(([platform, url]) => (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-text-tertiary hover:text-primary"
                    >
                      {platform}
                    </a>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
