import * as z from 'zod';
import { nonEmptyString } from './common';

/** Prisma MediaType enum ilə sinxron (docs/07) */
export const mediaTypeSchema = z.enum(['IMAGE', 'VIDEO', 'DOCUMENT']);
export type MediaType = z.infer<typeof mediaTypeSchema>;

/**
 * MediaAsset metadata — R2-yə yükləmədən SONRA DB-yə yazılan qeyd.
 * Fayl özü R2-də; bu, url + metadata-dır (docs/09 #011).
 */
export const mediaCreateSchema = z.object({
  url: z.url(),
  key: nonEmptyString, // R2 obyekt açarı
  type: mediaTypeSchema.default('IMAGE'),
  mimeType: nonEmptyString,
  fileName: nonEmptyString,
  alt: nonEmptyString.max(300).nullish(),
  width: z.number().int().positive().nullish(),
  height: z.number().int().positive().nullish(),
  sizeBytes: z.number().int().nonnegative(),
});

export type MediaCreateInput = z.infer<typeof mediaCreateSchema>;

/** Yalnız alt mətnin yenilənməsi (admin media kitabxanasında) */
export const mediaUpdateSchema = z.object({
  alt: nonEmptyString.max(300).nullish(),
});
export type MediaUpdateInput = z.infer<typeof mediaUpdateSchema>;
