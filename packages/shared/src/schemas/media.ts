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

/**
 * Presigned upload URL sorğusu — client faylı yükləmədən ƏVVƏL göndərir.
 * Server R2 açarı + presigned PUT URL qaytarır.
 */
export const uploadUrlRequestSchema = z.object({
  fileName: nonEmptyString.max(255),
  contentType: nonEmptyString.max(120),
  sizeBytes: z
    .number()
    .int()
    .positive()
    .max(50 * 1024 * 1024), // 50MB limit
});
export type UploadUrlRequest = z.infer<typeof uploadUrlRequestSchema>;

export interface UploadUrlResponse {
  uploadUrl: string; // presigned PUT (R2-yə birbaşa)
  key: string; // R2 obyekt açarı
  publicUrl: string; // yükləmədən sonra ictimai URL
}
