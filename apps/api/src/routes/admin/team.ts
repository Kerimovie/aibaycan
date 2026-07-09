import {
  ok,
  paginationQuerySchema,
  teamMemberCreateSchema,
  teamMemberUpdateSchema,
  type PaginationQuery,
  type TeamMemberCreateInput,
  type TeamMemberUpdateInput,
} from '@aibaycan/shared';
import { prisma } from '@aibaycan/db';
import { Hono } from 'hono';
import { asDelegate, listPaginated } from '../../lib/crud.js';
import { HttpError } from '../../lib/http.js';
import { valid, validate } from '../../lib/validate.js';
import type { AppEnv } from '../../types.js';

export const adminTeamRoutes = new Hono<AppEnv>();
const include = { photo: true };

adminTeamRoutes.get('/', validate('query', paginationQuerySchema), async (c) => {
  const query = valid<PaginationQuery>(c, 'query');
  const result = await listPaginated(asDelegate(prisma.teamMember), query, {
    orderBy: { order: 'asc' },
    include,
  });
  return c.json(ok(result));
});

adminTeamRoutes.get('/:id', async (c) => {
  const item = await prisma.teamMember.findUnique({ where: { id: c.req.param('id') }, include });
  if (!item) throw new HttpError('NOT_FOUND', 'Üzv tapılmadı');
  return c.json(ok(item));
});

adminTeamRoutes.post('/', validate('json', teamMemberCreateSchema), async (c) => {
  const { socials, ...rest } = valid<TeamMemberCreateInput>(c, 'json');
  const created = await prisma.teamMember.create({
    data: { ...rest, socials: socials as object },
    include,
  });
  return c.json(ok(created), 201);
});

adminTeamRoutes.patch('/:id', validate('json', teamMemberUpdateSchema), async (c) => {
  const { socials, ...rest } = valid<TeamMemberUpdateInput>(c, 'json');
  const updated = await prisma.teamMember.update({
    where: { id: c.req.param('id') },
    data: { ...rest, ...(socials !== undefined ? { socials: socials as object } : {}) },
    include,
  });
  return c.json(ok(updated));
});

adminTeamRoutes.delete('/:id', async (c) => {
  await prisma.teamMember.delete({ where: { id: c.req.param('id') } });
  return c.json(ok({ deleted: true }));
});
