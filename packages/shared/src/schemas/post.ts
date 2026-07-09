import * as z from 'zod';
import { blocksSchema } from './blocks';
import { idSchema, nonEmptyString, slugSchema } from './common';

/**
 * Post (blog məqaləsi) create/update — CaseStudy ilə eyni block sistemi (docs/28).
 * m2m əlaqələr id massivi kimi ötürülür.
 */
export const postCreateSchema = z.object({
  slug: slugSchema,
  title: nonEmptyString.max(200),
  excerpt: nonEmptyString.max(500),

  blocks: blocksSchema.default([]),

  coverImageId: idSchema.nullish(),
  authorId: idSchema.nullish(),

  categoryIds: z.array(idSchema).default([]),
  tagIds: z.array(idSchema).default([]),

  published: z.boolean().default(false),
  publishedAt: z.coerce.date().nullish(),

  metaTitle: nonEmptyString.max(200).nullish(),
  metaDescription: nonEmptyString.max(500).nullish(),
});

export const postUpdateSchema = postCreateSchema.partial();

export type PostCreateInput = z.infer<typeof postCreateSchema>;
export type PostUpdateInput = z.infer<typeof postUpdateSchema>;
