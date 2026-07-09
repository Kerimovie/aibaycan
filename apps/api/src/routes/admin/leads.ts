import {
  leadUpdateSchema,
  ok,
  paginationQuerySchema,
  type LeadUpdateInput,
  type PaginationQuery,
} from '@aibaycan/shared';
import { prisma } from '@aibaycan/db';
import { Hono } from 'hono';
import { asDelegate, listPaginated } from '../../lib/crud.js';
import { HttpError } from '../../lib/http.js';
import { valid, validate } from '../../lib/validate.js';
import type { AppEnv } from '../../types.js';

/**
 * Lead admin route-ları — READ + status update yalnız.
 * Lead-lər public formdan yaranır (create admin-də yox). Silmə də yox (audit).
 */
export const adminLeadRoutes = new Hono<AppEnv>();

adminLeadRoutes.get('/', validate('query', paginationQuerySchema), async (c) => {
  const query = valid<PaginationQuery>(c, 'query');
  const result = await listPaginated(asDelegate(prisma.lead), query, { orderBy: { createdAt: 'desc' } });
  return c.json(ok(result));
});

adminLeadRoutes.get('/:id', async (c) => {
  const lead = await prisma.lead.findUnique({ where: { id: c.req.param('id') } });
  if (!lead) throw new HttpError('NOT_FOUND', 'Sorğu tapılmadı');
  return c.json(ok(lead));
});

adminLeadRoutes.patch('/:id', validate('json', leadUpdateSchema), async (c) => {
  const input = valid<LeadUpdateInput>(c, 'json');
  const updated = await prisma.lead.update({ where: { id: c.req.param('id') }, data: input });
  return c.json(ok(updated));
});
