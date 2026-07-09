import {
  ok,
  paginationQuerySchema,
  testimonialCreateSchema,
  testimonialUpdateSchema,
  type PaginationQuery,
  type TestimonialCreateInput,
  type TestimonialUpdateInput,
} from '@aibaycan/shared';
import { prisma } from '@aibaycan/db';
import { Hono } from 'hono';
import { asDelegate, listPaginated } from '../../lib/crud.js';
import { HttpError } from '../../lib/http.js';
import { valid, validate } from '../../lib/validate.js';
import type { AppEnv } from '../../types.js';

export const adminTestimonialRoutes = new Hono<AppEnv>();
const include = { photo: true, caseStudy: { select: { id: true, title: true } } };

adminTestimonialRoutes.get('/', validate('query', paginationQuerySchema), async (c) => {
  const query = valid<PaginationQuery>(c, 'query');
  const result = await listPaginated(asDelegate(prisma.testimonial), query, {
    orderBy: { order: 'asc' },
    include,
  });
  return c.json(ok(result));
});

adminTestimonialRoutes.get('/:id', async (c) => {
  const item = await prisma.testimonial.findUnique({ where: { id: c.req.param('id') }, include });
  if (!item) throw new HttpError('NOT_FOUND', 'Rəy tapılmadı');
  return c.json(ok(item));
});

adminTestimonialRoutes.post('/', validate('json', testimonialCreateSchema), async (c) => {
  const input = valid<TestimonialCreateInput>(c, 'json');
  const created = await prisma.testimonial.create({ data: input, include });
  return c.json(ok(created), 201);
});

adminTestimonialRoutes.patch('/:id', validate('json', testimonialUpdateSchema), async (c) => {
  const input = valid<TestimonialUpdateInput>(c, 'json');
  const updated = await prisma.testimonial.update({ where: { id: c.req.param('id') }, data: input, include });
  return c.json(ok(updated));
});

adminTestimonialRoutes.delete('/:id', async (c) => {
  await prisma.testimonial.delete({ where: { id: c.req.param('id') } });
  return c.json(ok({ deleted: true }));
});
