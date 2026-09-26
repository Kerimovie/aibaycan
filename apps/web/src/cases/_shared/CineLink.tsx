import type { AnchorHTMLAttributes } from 'react';
import { Link } from '@/i18n/navigation';

export interface CineLinkTarget {
  label: string;
  /** `/contact` (locale-agnostic app path → next-intl Link), `#hero`, `mailto:…` or an absolute URL. */
  href: string;
  /** Opens in a new tab (`target="_blank" rel="noopener"`). */
  external?: boolean;
}

type CineLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & { href: string; external?: boolean };

/**
 * One anchor for every kind of href in the kit: app paths (`/contact`, `/projects/foodost`) go through next-intl's
 * `Link`, which adds the locale prefix; `#anchors`, `mailto:` and absolute URLs are plain `<a>`. Extra attributes
 * (className, data-*, aria-*) pass through.
 */
export function CineLink({ href, external, children, ...rest }: CineLinkProps) {
  const target = external ? { target: '_blank', rel: 'noopener' } : {};
  if (href.startsWith('/') && !external) {
    return (
      <Link href={href} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} {...target} {...rest}>
      {children}
    </a>
  );
}
