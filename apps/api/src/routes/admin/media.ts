import {
  mediaCreateSchema,
  mediaUpdateSchema,
  ok,
  paginationQuerySchema,
  type MediaCreateInput,
  type MediaUpdateInput,
  type PaginationQuery,
} from '@aibaycan/shared';
import { prisma } from '@aibaycan/db';
import { Hono } from 'hono';
import { asDelegate, listPaginated } from '../../lib/crud.js';
import { valid, validate } from '../../lib/validate.js';
import type { AppEnv } from '../../types.js';

/**
 * Media admin route-ları — list + metadata create + alt update + delete.
 * QEYD: real R2 upload ayrı endpoint olacaq (presigned URL). Bu, upload-dan
 * SONRA metadata-nı DB-yə yazır (docs/09 #011).
 */
export const adminMediaRoutes = new Hono<AppEnv>();

adminMediaRoutes.get('/', validate('query', paginationQuerySchema), async (c) => {
  const query = valid<PaginationQuery>(c, 'query');
  const result = await listPaginated(asDelegate(prisma.mediaAsset), query, { orderBy: { createdAt: 'desc' } });
  return c.json(ok(result));
});

// Upload-dan sonra metadata qeydiyyatı (R2 URL + ölçü və s.)
adminMediaRoutes.post('/', validate('json', mediaCreateSchema), async (c) => {
  const input = valid<MediaCreateInput>(c, 'json');
  const created = await prisma.mediaAsset.create({ data: input });
  return c.json(ok(created), 201);
});

adminMediaRoutes.patch('/:id', validate('json', mediaUpdateSchema), async (c) => {
  const input = valid<MediaUpdateInput>(c, 'json');
  const updated = await prisma.mediaAsset.update({ where: { id: c.req.param('id') }, data: input });
  return c.json(ok(updated));
});

adminMediaRoutes.delete('/:id', async (c) => {
  // QEYD: real R2 obyektinin silinməsi upload inteqrasiyası ilə əlavə olunacaq.
  await prisma.mediaAsset.delete({ where: { id: c.req.param('id') } });
  return c.json(ok({ deleted: true }));
});
