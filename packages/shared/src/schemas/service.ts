import * as z from 'zod';
import { idSchema, nonEmptyString } from './common';

/**
 * Service create/update inputları.
 * Mənbə entity: packages/db Service modeli (docs/07).
 */
export const serviceCreateSchema = z.object({
  title: nonEmptyString.max(200),
  description: nonEmptyString,
  icon: z.string().trim().nullish(),
  published: z.boolean().default(false),
  order: z.number().int().default(0),
  // "Bu xidmətə uyğun işlərimiz" cross-link (m2m)
  caseStudyIds: z.array(idSchema).default([]),
});

export const serviceUpdateSchema = serviceCreateSchema.partial();

export type ServiceCreateInput = z.infer<typeof serviceCreateSchema>;
export type ServiceUpdateInput = z.infer<typeof serviceUpdateSchema>;
