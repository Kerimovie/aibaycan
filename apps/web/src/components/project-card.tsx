import { Link } from '@/i18n/navigation';
import type { PublicCaseStudy } from '@/lib/api';

/**
 * Şəkil-yönlü iş kartı — portfolio-nun əsas showcase elementi.
 * Ana səhifə (featured) + /projects listing tərəfindən paylaşılır (tutarlılıq).
 * Server komponent (RSC-safe).
 */
export function ProjectCard({
  caseStudy,
  priority = false,
}: {
  caseStudy: PublicCaseStudy;
  priority?: boolean;
}) {
  const { slug, title, tagline, coverImage, categories } = caseStudy;

  return (
    <Link
      href={`/projects/${slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card ring-1 ring-black/[0.03] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-surface-2">
        {coverImage ? (
          <img
            src={coverImage.url}
            alt={coverImage.alt ?? title}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            loading={priority ? 'eager' : 'lazy'}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary-100 to-primary-50">
            <span className="text-5xl font-bold text-primary/30">{title.charAt(0)}</span>
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="flex flex-1 flex-col p-5">
        {categories.length > 0 && (
          <div className="mb-2.5 flex flex-wrap gap-1.5">
            {categories.slice(0, 2).map((cat) => (
              <span
                key={cat.id}
                className="rounded-full bg-primary-50 px-2.5 py-0.5 text-xs font-medium text-primary"
              >
                {cat.name}
              </span>
            ))}
          </div>
        )}
        <h3 className="text-lg font-semibold tracking-tight text-text-primary transition-colors group-hover:text-primary">
          {title}
        </h3>
        {tagline && <p className="mt-1.5 line-clamp-2 text-sm text-text-secondary">{tagline}</p>}

        <span
          aria-hidden
          className="mt-4 inline-flex translate-x-0 items-center gap-1.5 text-sm font-medium text-primary opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100 motion-reduce:transition-none"
        >
          <ArrowRight />
        </span>
      </div>
    </Link>
  );
}

function ArrowRight() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
