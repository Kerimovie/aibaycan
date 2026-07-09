import * as z from 'zod';
import { idSchema, nonEmptyString } from './common';

/** Client (müştəri loqosu) create/update (docs/07, Faza 2) */
export const clientCreateSchema = z.object({
  name: nonEmptyString.max(200),
  logoId: idSchema.nullish(),
  websiteUrl: z.url().nullish(),
  published: z.boolean().default(false),
  order: z.number().int().default(0),
});
export const clientUpdateSchema = clientCreateSchema.partial();
export type ClientCreateInput = z.infer<typeof clientCreateSchema>;
export type ClientUpdateInput = z.infer<typeof clientUpdateSchema>;
