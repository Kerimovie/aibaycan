import * as z from 'zod';
import { nonEmptyString, slugSchema } from './common.js';

/**
 * Service create/update inputları.
 * Mənbə entity: packages/db Service modeli (docs/07).
 */
export const serviceCreateSchema = z.object({
  slug: slugSchema,
  title: nonEmptyString.max(200),
  description: nonEmptyString,
  icon: z.string().trim().nullish(),
  published: z.boolean().default(false),
  order: z.number().int().default(0),
});

export const serviceUpdateSchema = serviceCreateSchema.partial();

export type ServiceCreateInput = z.infer<typeof serviceCreateSchema>;
export type ServiceUpdateInput = z.infer<typeof serviceUpdateSchema>;
