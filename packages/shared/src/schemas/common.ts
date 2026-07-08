import * as z from 'zod';

/** URL-safe slug — kiçik hərf, rəqəm, tire */
export const slugSchema = z
  .string()
  .min(1)
  .max(120)
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'slug yalnız kiçik hərf, rəqəm və tire ola bilər');

/** cuid ID (Prisma default) */
export const idSchema = z.string().min(1);

/** Boş olmayan trim-lənmiş mətn */
export const nonEmptyString = z.string().trim().min(1);

/** Səhifələmə parametrləri — listing endpoint-ləri üçün */
export const paginationQuerySchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  pageSize: z.coerce.number().int().min(1).max(100).default(20),
});

export type PaginationQuery = z.infer<typeof paginationQuerySchema>;
