import type { AdminRole } from '@aibaycan/shared';
import type { MiddlewareHandler } from 'hono';
import { getCookie } from 'hono/cookie';
import { prisma } from '@aibaycan/db';
import { HttpError } from '../lib/http.js';
import { AUTH_COOKIE, verifyAuthToken } from '../lib/jwt.js';

export interface AuthUser {
  id: string;
  email: string;
  role: AdminRole;
}

/**
 * Cookie-dən JWT oxu, doğrula, aktiv admin-i konteksdə qoy.
 * Token yox/etibarsız/deaktiv → 401 (docs/05).
 */
export const authMiddleware: MiddlewareHandler = async (c, next) => {
  const token = getCookie(c, AUTH_COOKIE);
  if (!token) {
    throw new HttpError('UNAUTHORIZED', 'Autentifikasiya tələb olunur');
  }

  const payload = await verifyAuthToken(token);
  if (!payload) {
    throw new HttpError('UNAUTHORIZED', 'Sessiya etibarsızdır');
  }

  // Token etibarlı olsa belə, deaktiv edilmiş hesabı bloklamaq üçün DB yoxlaması
  const user = await prisma.adminUser.findUnique({
    where: { id: payload.sub },
    select: { id: true, email: true, role: true, active: true },
  });
  if (!user || !user.active) {
    throw new HttpError('UNAUTHORIZED', 'Hesab mövcud deyil və ya deaktivdir');
  }

  c.set('user', { id: user.id, email: user.email, role: user.role } satisfies AuthUser);
  await next();
};

/** Rol tələbi — auth-dan SONRA istifadə olunur */
export function requireRole(...roles: AdminRole[]): MiddlewareHandler {
  return async (c, next) => {
    const user = c.get('user') as AuthUser | undefined;
    if (!user) {
      throw new HttpError('UNAUTHORIZED', 'Autentifikasiya tələb olunur');
    }
    if (!roles.includes(user.role)) {
      throw new HttpError('FORBIDDEN', 'Bu əməliyyat üçün icazəniz yoxdur');
    }
    await next();
  };
}
