import * as z from 'zod';
import { nonEmptyString, slugSchema } from './common';

/** Category create/update (docs/07) */
export const categoryCreateSchema = z.object({
  slug: slugSchema,
  name: nonEmptyString.max(120),
  description: nonEmptyString.max(500).nullish(),
  order: z.number().int().default(0),
});
export const categoryUpdateSchema = categoryCreateSchema.partial();
export type CategoryCreateInput = z.infer<typeof categoryCreateSchema>;
export type CategoryUpdateInput = z.infer<typeof categoryUpdateSchema>;

/** Tag create/update */
export const tagCreateSchema = z.object({
  slug: slugSchema,
  name: nonEmptyString.max(80),
});
export const tagUpdateSchema = tagCreateSchema.partial();
export type TagCreateInput = z.infer<typeof tagCreateSchema>;
export type TagUpdateInput = z.infer<typeof tagUpdateSchema>;
