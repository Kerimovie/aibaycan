import { createNavigation } from 'next-intl/navigation';
import { routing } from './routing';

/** Routing-aware naviqasiya wrapper-ləri (locale prefiksini avtomatik idarə edir) */
export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
