import {
  ok,
  paginationQuerySchema,
  serviceCreateSchema,
  serviceUpdateSchema,
  type PaginationQuery,
  type ServiceCreateInput,
  type ServiceUpdateInput,
} from '@aibaycan/shared';
import { prisma } from '@aibaycan/db';
import { Hono } from 'hono';
import { asDelegate, listPaginated } from '../../lib/crud.js';
import { asSlugModel, ensureUniqueSlug } from '../../lib/slug.js';
import { HttpError } from '../../lib/http.js';
import { valid, validate } from '../../lib/validate.js';
import type { AppEnv } from '../../types.js';

export const adminServiceRoutes = new Hono<AppEnv>();

const include = { caseStudies: true };

adminServiceRoutes.get('/', validate('query', paginationQuerySchema), async (c) => {
  const query = valid<PaginationQuery>(c, 'query');
  const result = await listPaginated(asDelegate(prisma.service), query, { orderBy: { order: 'asc' } });
  return c.json(ok(result));
});

adminServiceRoutes.get('/:id', async (c) => {
  const service = await prisma.service.findUnique({ where: { id: c.req.param('id') }, include });
  if (!service) throw new HttpError('NOT_FOUND', 'Xidmət tapılmadı');
  return c.json(ok(service));
});

adminServiceRoutes.post('/', validate('json', serviceCreateSchema), async (c) => {
  const { caseStudyIds, ...data } = valid<ServiceCreateInput>(c, 'json');
  // Slug gizli — başlıqdan avtomatik, server unikallıq təmin edir (lib/slug)
  const slug = await ensureUniqueSlug(asSlugModel(prisma.service), data.title);
  const created = await prisma.service.create({
    data: { ...data, slug, caseStudies: { connect: caseStudyIds.map((id) => ({ id })) } },
    include,
  });
  return c.json(ok(created), 201);
});

adminServiceRoutes.patch('/:id', validate('json', serviceUpdateSchema), async (c) => {
  const input = valid<ServiceUpdateInput>(c, 'json');
  const { caseStudyIds, ...data } = input;
  const updated = await prisma.service.update({
    where: { id: c.req.param('id') },
    data: {
      ...data,
      ...(caseStudyIds ? { caseStudies: { set: caseStudyIds.map((id) => ({ id })) } } : {}),
    },
    include,
  });
  return c.json(ok(updated));
});

adminServiceRoutes.delete('/:id', async (c) => {
  await prisma.service.delete({ where: { id: c.req.param('id') } });
  return c.json(ok({ deleted: true }));
});
