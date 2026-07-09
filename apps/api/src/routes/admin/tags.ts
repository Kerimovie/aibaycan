import {
  ok,
  paginationQuerySchema,
  tagCreateSchema,
  tagUpdateSchema,
  type PaginationQuery,
  type TagCreateInput,
  type TagUpdateInput,
} from '@aibaycan/shared';
import { prisma } from '@aibaycan/db';
import { Hono } from 'hono';
import { asDelegate, listPaginated } from '../../lib/crud.js';
import { HttpError } from '../../lib/http.js';
import { valid, validate } from '../../lib/validate.js';
import type { AppEnv } from '../../types.js';

export const adminTagRoutes = new Hono<AppEnv>();

adminTagRoutes.get('/', validate('query', paginationQuerySchema), async (c) => {
  const query = valid<PaginationQuery>(c, 'query');
  const result = await listPaginated(asDelegate(prisma.tag), query, { orderBy: { name: 'asc' } });
  return c.json(ok(result));
});

adminTagRoutes.get('/:id', async (c) => {
  const tag = await prisma.tag.findUnique({ where: { id: c.req.param('id') } });
  if (!tag) throw new HttpError('NOT_FOUND', 'Teq tapılmadı');
  return c.json(ok(tag));
});

adminTagRoutes.post('/', validate('json', tagCreateSchema), async (c) => {
  const input = valid<TagCreateInput>(c, 'json');
  const created = await prisma.tag.create({ data: input });
  return c.json(ok(created), 201);
});

adminTagRoutes.patch('/:id', validate('json', tagUpdateSchema), async (c) => {
  const input = valid<TagUpdateInput>(c, 'json');
  const updated = await prisma.tag.update({ where: { id: c.req.param('id') }, data: input });
  return c.json(ok(updated));
});

adminTagRoutes.delete('/:id', async (c) => {
  await prisma.tag.delete({ where: { id: c.req.param('id') } });
  return c.json(ok({ deleted: true }));
});
