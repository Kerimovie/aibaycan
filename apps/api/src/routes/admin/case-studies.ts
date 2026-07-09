import {
  caseStudyCreateSchema,
  caseStudyUpdateSchema,
  ok,
  paginationQuerySchema,
  type CaseStudyCreateInput,
  type CaseStudyUpdateInput,
  type PaginationQuery,
} from '@aibaycan/shared';
import { prisma } from '@aibaycan/db';
import { Hono } from 'hono';
import { asDelegate, listPaginated } from '../../lib/crud.js';
import { asSlugModel, ensureUniqueSlug } from '../../lib/slug.js';
import { HttpError } from '../../lib/http.js';
import { valid, validate } from '../../lib/validate.js';
import type { AppEnv } from '../../types.js';

export const adminCaseStudyRoutes = new Hono<AppEnv>();

const include = { coverImage: true, categories: true, tags: true, services: true };

const connectIds = (ids: string[]) => ({ connect: ids.map((id) => ({ id })) });
const setIds = (ids: string[]) => ({ set: ids.map((id) => ({ id })) });

adminCaseStudyRoutes.get('/', validate('query', paginationQuerySchema), async (c) => {
  const query = valid<PaginationQuery>(c, 'query');
  const result = await listPaginated(asDelegate(prisma.caseStudy), query, {
    orderBy: [{ featured: 'desc' }, { order: 'asc' }],
    include,
  });
  return c.json(ok(result));
});

adminCaseStudyRoutes.get('/:id', async (c) => {
  const caseStudy = await prisma.caseStudy.findUnique({
    where: { id: c.req.param('id') },
    include,
  });
  if (!caseStudy) throw new HttpError('NOT_FOUND', 'İş tapılmadı');
  return c.json(ok(caseStudy));
});

adminCaseStudyRoutes.post('/', validate('json', caseStudyCreateSchema), async (c) => {
  const { categoryIds, tagIds, serviceIds, blocks, ...rest } = valid<CaseStudyCreateInput>(
    c,
    'json',
  );
  // Slug gizli — başlıqdan avtomatik, server unikallıq təmin edir (lib/slug)
  const slug = await ensureUniqueSlug(asSlugModel(prisma.caseStudy), rest.title);
  const created = await prisma.caseStudy.create({
    data: {
      ...rest,
      slug,
      blocks: blocks as object[],
      categories: connectIds(categoryIds),
      tags: connectIds(tagIds),
      services: connectIds(serviceIds),
    },
    include,
  });
  return c.json(ok(created), 201);
});

adminCaseStudyRoutes.patch('/:id', validate('json', caseStudyUpdateSchema), async (c) => {
  const { categoryIds, tagIds, serviceIds, blocks, ...rest } = valid<CaseStudyUpdateInput>(
    c,
    'json',
  );
  const updated = await prisma.caseStudy.update({
    where: { id: c.req.param('id') },
    data: {
      ...rest,
      ...(blocks !== undefined ? { blocks: blocks as object[] } : {}),
      // m2m — id massivi verilibsə tam əvəz (set)
      ...(categoryIds ? { categories: setIds(categoryIds) } : {}),
      ...(tagIds ? { tags: setIds(tagIds) } : {}),
      ...(serviceIds ? { services: setIds(serviceIds) } : {}),
    },
    include,
  });
  return c.json(ok(updated));
});

adminCaseStudyRoutes.delete('/:id', async (c) => {
  await prisma.caseStudy.delete({ where: { id: c.req.param('id') } });
  return c.json(ok({ deleted: true }));
});
