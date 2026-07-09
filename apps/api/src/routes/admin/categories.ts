import {
  categoryCreateSchema,
  categoryUpdateSchema,
  ok,
  paginationQuerySchema,
  type CategoryCreateInput,
  type CategoryUpdateInput,
  type PaginationQuery,
} from '@aibaycan/shared';
import { prisma } from '@aibaycan/db';
import { Hono } from 'hono';
import { asDelegate, listPaginated } from '../../lib/crud.js';
import { HttpError } from '../../lib/http.js';
import { valid, validate } from '../../lib/validate.js';
import type { AppEnv } from '../../types.js';

export const adminCategoryRoutes = new Hono<AppEnv>();

adminCategoryRoutes.get('/', validate('query', paginationQuerySchema), async (c) => {
  const query = valid<PaginationQuery>(c, 'query');
  const result = await listPaginated(asDelegate(prisma.category), query, { orderBy: { order: 'asc' } });
  return c.json(ok(result));
});

adminCategoryRoutes.get('/:id', async (c) => {
  const category = await prisma.category.findUnique({ where: { id: c.req.param('id') } });
  if (!category) throw new HttpError('NOT_FOUND', 'Kateqoriya tapılmadı');
  return c.json(ok(category));
});

adminCategoryRoutes.post('/', validate('json', categoryCreateSchema), async (c) => {
  const input = valid<CategoryCreateInput>(c, 'json');
  const created = await prisma.category.create({ data: input });
  return c.json(ok(created), 201);
});

adminCategoryRoutes.patch('/:id', validate('json', categoryUpdateSchema), async (c) => {
  const input = valid<CategoryUpdateInput>(c, 'json');
  const updated = await prisma.category.update({ where: { id: c.req.param('id') }, data: input });
  return c.json(ok(updated));
});

adminCategoryRoutes.delete('/:id', async (c) => {
  await prisma.category.delete({ where: { id: c.req.param('id') } });
  return c.json(ok({ deleted: true }));
});
