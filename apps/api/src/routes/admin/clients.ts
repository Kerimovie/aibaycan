import {
  clientCreateSchema,
  clientUpdateSchema,
  ok,
  paginationQuerySchema,
  type ClientCreateInput,
  type ClientUpdateInput,
  type PaginationQuery,
} from '@aibaycan/shared';
import { prisma } from '@aibaycan/db';
import { Hono } from 'hono';
import { asDelegate, listPaginated } from '../../lib/crud.js';
import { HttpError } from '../../lib/http.js';
import { valid, validate } from '../../lib/validate.js';
import type { AppEnv } from '../../types.js';

export const adminClientRoutes = new Hono<AppEnv>();
const include = { logo: true };

adminClientRoutes.get('/', validate('query', paginationQuerySchema), async (c) => {
  const query = valid<PaginationQuery>(c, 'query');
  const result = await listPaginated(asDelegate(prisma.client), query, {
    orderBy: { order: 'asc' },
    include,
  });
  return c.json(ok(result));
});

adminClientRoutes.get('/:id', async (c) => {
  const item = await prisma.client.findUnique({ where: { id: c.req.param('id') }, include });
  if (!item) throw new HttpError('NOT_FOUND', 'Müştəri tapılmadı');
  return c.json(ok(item));
});

adminClientRoutes.post('/', validate('json', clientCreateSchema), async (c) => {
  const input = valid<ClientCreateInput>(c, 'json');
  const created = await prisma.client.create({ data: input, include });
  return c.json(ok(created), 201);
});

adminClientRoutes.patch('/:id', validate('json', clientUpdateSchema), async (c) => {
  const input = valid<ClientUpdateInput>(c, 'json');
  const updated = await prisma.client.update({ where: { id: c.req.param('id') }, data: input, include });
  return c.json(ok(updated));
});

adminClientRoutes.delete('/:id', async (c) => {
  await prisma.client.delete({ where: { id: c.req.param('id') } });
  return c.json(ok({ deleted: true }));
});
