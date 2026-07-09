import * as z from 'zod';
import { idSchema, nonEmptyString } from './common';

/** Sosial linklər — platform → URL (esnek) */
export const socialsSchema = z.record(z.string(), z.url()).default({});

/** TeamMember (komanda üzvü) create/update (docs/07, Faza 2) */
export const teamMemberCreateSchema = z.object({
  name: nonEmptyString.max(120),
  role: nonEmptyString.max(120),
  bio: nonEmptyString.max(2000).nullish(),
  photoId: idSchema.nullish(),
  socials: socialsSchema,
  published: z.boolean().default(false),
  order: z.number().int().default(0),
});
export const teamMemberUpdateSchema = teamMemberCreateSchema.partial();
export type TeamMemberCreateInput = z.infer<typeof teamMemberCreateSchema>;
export type TeamMemberUpdateInput = z.infer<typeof teamMemberUpdateSchema>;
