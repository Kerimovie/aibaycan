// Next.js 16: middleware.ts → proxy.ts adlanır.
// next-intl locale routing-i burada işləyir (locale prefiksi, redirect, cookie).
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // API, statik fayllar və Next daxili yolları istisna
  matcher: '/((?!api|_next|_vercel|.*\\..*).*)',
};
