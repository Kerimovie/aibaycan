import * as z from 'zod';
import { blocksSchema } from './blocks.js';
import { idSchema, nonEmptyString, slugSchema } from './common.js';

/**
 * CaseStudy create/update inputları (docs/07).
 * Blocks discriminated union ilə validasiya (blocks.ts).
 * m2m əlaqələr id massivi kimi ötürülür.
 */
export const caseStudyCreateSchema = z.object({
  slug: slugSchema,
  title: nonEmptyString.max(200),
  tagline: nonEmptyString.max(300).nullish(),
  summary: nonEmptyString.max(500),
  clientName: nonEmptyString.max(200).nullish(),
  projectYear: z.number().int().min(1990).max(2100).nullish(),

  blocks: blocksSchema.default([]),

  coverImageId: idSchema.nullish(),

  liveUrl: z.url().nullish(),
  repoUrl: z.url().nullish(),

  featured: z.boolean().default(false),
  published: z.boolean().default(false),
  order: z.number().int().default(0),

  metaTitle: nonEmptyString.max(200).nullish(),
  metaDescription: nonEmptyString.max(500).nullish(),

  // m2m — bağlanacaq id-lər
  categoryIds: z.array(idSchema).default([]),
  tagIds: z.array(idSchema).default([]),
  serviceIds: z.array(idSchema).default([]),

  completedAt: z.coerce.date().nullish(),
});

export const caseStudyUpdateSchema = caseStudyCreateSchema.partial();

export type CaseStudyCreateInput = z.infer<typeof caseStudyCreateSchema>;
export type CaseStudyUpdateInput = z.infer<typeof caseStudyUpdateSchema>;
