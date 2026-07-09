import * as z from 'zod';
import { idSchema, nonEmptyString } from './common';

/** Testimonial (müştəri rəyi) create/update (docs/07, Faza 2) */
export const testimonialCreateSchema = z.object({
  quote: nonEmptyString.max(2000),
  author: nonEmptyString.max(120),
  role: nonEmptyString.max(120).nullish(),
  company: nonEmptyString.max(200).nullish(),
  photoId: idSchema.nullish(),
  caseStudyId: idSchema.nullish(),
  published: z.boolean().default(false),
  order: z.number().int().default(0),
});
export const testimonialUpdateSchema = testimonialCreateSchema.partial();
export type TestimonialCreateInput = z.infer<typeof testimonialCreateSchema>;
export type TestimonialUpdateInput = z.infer<typeof testimonialUpdateSchema>;
