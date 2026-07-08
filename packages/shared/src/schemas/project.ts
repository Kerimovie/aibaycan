import * as z from 'zod';
import { nonEmptyString, slugSchema } from './common.js';

/**
 * Project (case-study) create/update inputları.
 * Mənbə entity: packages/db Project modeli (docs/07).
 * Bu sxemlər API boundary-lərində validation üçündür.
 */
export const projectCreateSchema = z.object({
  slug: slugSchema,
  title: nonEmptyString.max(200),
  summary: nonEmptyString.max(500),
  description: nonEmptyString,
  coverImage: z.url().nullish(),
  images: z.array(z.url()).default([]),
  techStack: z.array(nonEmptyString).default([]),
  liveUrl: z.url().nullish(),
  repoUrl: z.url().nullish(),
  featured: z.boolean().default(false),
  published: z.boolean().default(false),
  order: z.number().int().default(0),
  completedAt: z.coerce.date().nullish(),
});

/** Update — bütün sahələr opsional (partial patch) */
export const projectUpdateSchema = projectCreateSchema.partial();

export type ProjectCreateInput = z.infer<typeof projectCreateSchema>;
export type ProjectUpdateInput = z.infer<typeof projectUpdateSchema>;
