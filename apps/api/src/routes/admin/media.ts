import {
  mediaCreateSchema,
  mediaUpdateSchema,
  ok,
  paginationQuerySchema,
  uploadUrlRequestSchema,
  type MediaCreateInput,
  type MediaUpdateInput,
  type PaginationQuery,
  type UploadUrlRequest,
  type UploadUrlResponse,
} from '@aibaycan/shared';
import { prisma } from '@aibaycan/db';
import { Hono } from 'hono';
import { asDelegate, listPaginated } from '../../lib/crud.js';
import { HttpError } from '../../lib/http.js';
import { buildObjectKey, createUploadUrl, deleteObject, isR2Configured } from '../../lib/r2.js';
import { valid, validate } from '../../lib/validate.js';
import type { AppEnv } from '../../types.js';

/**
 * Media admin route-ları — presigned upload + list + metadata + alt update + delete.
 * Upload axını: (1) upload-url al → (2) client R2-yə PUT → (3) metadata DB-yə yaz.
 * docs/09 #011.
 */
export const adminMediaRoutes = new Hono<AppEnv>();

adminMediaRoutes.get('/', validate('query', paginationQuerySchema), async (c) => {
  const query = valid<PaginationQuery>(c, 'query');
  const result = await listPaginated(asDelegate(prisma.mediaAsset), query, {
    orderBy: { createdAt: 'desc' },
  });
  return c.json(ok(result));
});

// (1) Presigned upload URL — client faylı yükləmədən əvvəl
adminMediaRoutes.post('/upload-url', validate('json', uploadUrlRequestSchema), async (c) => {
  if (!isR2Configured()) {
    throw new HttpError('INTERNAL', 'R2 storage konfiqurasiya olunmayıb');
  }
  const { fileName, contentType } = valid<UploadUrlRequest>(c, 'json');
  const key = buildObjectKey(fileName);
  const { uploadUrl, publicUrl } = await createUploadUrl({ key, contentType });
  return c.json(ok<UploadUrlResponse>({ uploadUrl, key, publicUrl }));
});

// (3) Upload-dan sonra metadata qeydiyyatı (R2 URL + ölçü və s.)
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
  const asset = await prisma.mediaAsset.findUnique({ where: { id: c.req.param('id') } });
  if (!asset) throw new HttpError('NOT_FOUND', 'Media tapılmadı');

  // Əvvəl R2 obyektini sil (konfiq varsa), sonra DB qeydini.
  if (isR2Configured()) {
    await deleteObject(asset.key).catch((err: unknown) => {
      // R2 silmə uğursuz olsa da DB-dən silirik, amma loglayırıq (no silent catch)
      console.error(`[media] R2 obyekt silinmədi (${asset.key}):`, err);
    });
  }
  await prisma.mediaAsset.delete({ where: { id: asset.id } });
  return c.json(ok({ deleted: true }));
});
