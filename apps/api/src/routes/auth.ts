import { loginSchema, ok, type LoginInput } from '@aibaycan/shared';
import { prisma } from '@aibaycan/db';
import { Hono } from 'hono';
import { deleteCookie, setCookie } from 'hono/cookie';
import { isProd } from '../env.js';
import { sendError } from '../lib/http.js';
import { AUTH_COOKIE, AUTH_COOKIE_MAX_AGE, signAuthToken } from '../lib/jwt.js';
import { fakeVerify, verifyPassword } from '../lib/password.js';
import { validate, valid } from '../lib/validate.js';
import { authMiddleware, type AuthUser } from '../middleware/auth.js';
import type { AppEnv } from '../types.js';

export const authRoutes = new Hono<AppEnv>();

authRoutes.post('/login', validate('json', loginSchema), async (c) => {
  const { email, password } = valid<LoginInput>(c, 'json');

  const user = await prisma.adminUser.findUnique({ where: { email } });

  // Enumeration/timing qorunması: user yoxdursa da hash müqayisəsi et (docs/05)
  if (!user) {
    await fakeVerify(password);
    return sendError(c, 'UNAUTHORIZED', 'Email və ya parol yanlışdır');
  }

  const valid_ = user.active && (await verifyPassword(user.passwordHash, password));
  if (!valid_) {
    return sendError(c, 'UNAUTHORIZED', 'Email və ya parol yanlışdır');
  }

  const token = await signAuthToken({ sub: user.id, email: user.email, role: user.role });
  setCookie(c, AUTH_COOKIE, token, {
    httpOnly: true,
    secure: isProd, // lokal HTTP-də işləsin
    sameSite: 'Strict',
    path: '/',
    maxAge: AUTH_COOKIE_MAX_AGE,
  });

  await prisma.adminUser.update({
    where: { id: user.id },
    data: { lastLoginAt: new Date() },
  });

  return c.json(ok({ id: user.id, email: user.email, role: user.role }));
});

authRoutes.post('/logout', (c) => {
  deleteCookie(c, AUTH_COOKIE, { path: '/' });
  return c.json(ok({ loggedOut: true }));
});

authRoutes.get('/me', authMiddleware, (c) => {
  const user = c.get('user') as AuthUser;
  return c.json(ok(user));
});
