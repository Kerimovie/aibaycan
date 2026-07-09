import {
  ok,
  paginationQuerySchema,
  postCreateSchema,
  postUpdateSchema,
  type PaginationQuery,
  type PostCreateInput,
  type PostUpdateInput,
} from '@aibaycan/shared';
import { prisma } from '@aibaycan/db';
import { Hono } from 'hono';
import { asDelegate, listPaginated } from '../../lib/crud.js';
import { asSlugModel, ensureUniqueSlug } from '../../lib/slug.js';
import { HttpError } from '../../lib/http.js';
import { valid, validate } from '../../lib/validate.js';
import type { AppEnv } from '../../types.js';

export const adminPostRoutes = new Hono<AppEnv>();

const include = {
  coverImage: true,
  author: { select: { id: true, name: true } },
  categories: true,
  tags: true,
};

const connectIds = (ids: string[]) => ({ connect: ids.map((id) => ({ id })) });
const setIds = (ids: string[]) => ({ set: ids.map((id) => ({ id })) });

adminPostRoutes.get('/', validate('query', paginationQuerySchema), async (c) => {
  const query = valid<PaginationQuery>(c, 'query');
  const result = await listPaginated(asDelegate(prisma.post), query, {
    orderBy: [{ publishedAt: 'desc' }, { createdAt: 'desc' }],
    include,
  });
  return c.json(ok(result));
});

adminPostRoutes.get('/:id', async (c) => {
  const post = await prisma.post.findUnique({ where: { id: c.req.param('id') }, include });
  if (!post) throw new HttpError('NOT_FOUND', 'Məqalə tapılmadı');
  return c.json(ok(post));
});

adminPostRoutes.post('/', validate('json', postCreateSchema), async (c) => {
  const { categoryIds, tagIds, blocks, ...rest } = valid<PostCreateInput>(c, 'json');
  // Slug gizli — başlıqdan avtomatik, server unikallıq təmin edir (lib/slug)
  const slug = await ensureUniqueSlug(asSlugModel(prisma.post), rest.title);
  const created = await prisma.post.create({
    data: {
      ...rest,
      slug,
      blocks: blocks as object[],
      categories: connectIds(categoryIds),
      tags: connectIds(tagIds),
    },
    include,
  });
  return c.json(ok(created), 201);
});

adminPostRoutes.patch('/:id', validate('json', postUpdateSchema), async (c) => {
  const { categoryIds, tagIds, blocks, ...rest } = valid<PostUpdateInput>(c, 'json');
  const updated = await prisma.post.update({
    where: { id: c.req.param('id') },
    data: {
      ...rest,
      ...(blocks !== undefined ? { blocks: blocks as object[] } : {}),
      ...(categoryIds ? { categories: setIds(categoryIds) } : {}),
      ...(tagIds ? { tags: setIds(tagIds) } : {}),
    },
    include,
  });
  return c.json(ok(updated));
});

adminPostRoutes.delete('/:id', async (c) => {
  await prisma.post.delete({ where: { id: c.req.param('id') } });
  return c.json(ok({ deleted: true }));
});
