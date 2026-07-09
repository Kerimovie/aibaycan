import {
  adminUserCreateSchema,
  adminUserUpdateSchema,
  ok,
  paginationQuerySchema,
  type AdminUserCreateInput,
  type AdminUserUpdateInput,
  type PaginationQuery,
} from '@aibaycan/shared';
import { prisma } from '@aibaycan/db';
import { Hono } from 'hono';
import { asDelegate, listPaginated } from '../../lib/crud.js';
import { HttpError } from '../../lib/http.js';
import { hashPassword } from '../../lib/password.js';
import { valid, validate } from '../../lib/validate.js';
import { requireRole, type AuthUser } from '../../middleware/auth.js';
import type { AppEnv } from '../../types.js';

/**
 * Admin istifadəçi idarəetməsi — YALNIZ ADMIN rolu (requireRole).
 * passwordHash heç vaxt cavabda qaytarılmır (select ilə istisna).
 * Öz hesabını silmə/deaktiv etmə qorunması.
 */
export const adminUserRoutes = new Hono<AppEnv>();

// Bütün admin idarəetmə ADMIN rolu tələb edir
adminUserRoutes.use('*', requireRole('ADMIN'));

const safeSelect = {
  id: true,
  email: true,
  name: true,
  role: true,
  active: true,
  lastLoginAt: true,
  createdAt: true,
} as const;

adminUserRoutes.get('/', validate('query', paginationQuerySchema), async (c) => {
  const query = valid<PaginationQuery>(c, 'query');
  const result = await listPaginated(asDelegate(prisma.adminUser), query, {
    orderBy: { createdAt: 'desc' },
  });
  // passwordHash-ı listdən təmizlə (listPaginated select dəstəkləmir)
  const items = (result.items as { passwordHash?: string }[]).map(({ passwordHash: _pw, ...rest }) => rest);
  return c.json(ok({ ...result, items }));
});

adminUserRoutes.get('/:id', async (c) => {
  const user = await prisma.adminUser.findUnique({
    where: { id: c.req.param('id') },
    select: safeSelect,
  });
  if (!user) throw new HttpError('NOT_FOUND', 'İstifadəçi tapılmadı');
  return c.json(ok(user));
});

adminUserRoutes.post('/', validate('json', adminUserCreateSchema), async (c) => {
  const { password, ...data } = valid<AdminUserCreateInput>(c, 'json');
  const passwordHash = await hashPassword(password);
  const created = await prisma.adminUser.create({
    data: { ...data, passwordHash },
    select: safeSelect,
  });
  return c.json(ok(created), 201);
});

adminUserRoutes.patch('/:id', validate('json', adminUserUpdateSchema), async (c) => {
  const id = c.req.param('id');
  const current = c.get('user') as AuthUser;
  const { password, active, ...data } = valid<AdminUserUpdateInput>(c, 'json');

  // Öz hesabını deaktiv etmə qorunması (özünü kilidləmə)
  if (id === current.id && active === false) {
    throw new HttpError('FORBIDDEN', 'Öz hesabınızı deaktiv edə bilməzsiniz');
  }

  const updated = await prisma.adminUser.update({
    where: { id },
    data: {
      ...data,
      ...(active !== undefined ? { active } : {}),
      ...(password ? { passwordHash: await hashPassword(password) } : {}),
    },
    select: safeSelect,
  });
  return c.json(ok(updated));
});

adminUserRoutes.delete('/:id', async (c) => {
  const id = c.req.param('id');
  const current = c.get('user') as AuthUser;

  // Öz hesabını silmə qorunması
  if (id === current.id) {
    throw new HttpError('FORBIDDEN', 'Öz hesabınızı silə bilməzsiniz');
  }
  await prisma.adminUser.delete({ where: { id } });
  return c.json(ok({ deleted: true }));
});
