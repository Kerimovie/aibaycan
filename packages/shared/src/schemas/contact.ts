import * as z from 'zod';
import { nonEmptyString } from './common.js';

/** Prisma ContactMessageStatus enum ilə sinxron (docs/07) */
export const contactMessageStatusSchema = z.enum(['NEW', 'READ', 'ARCHIVED']);
export type ContactMessageStatus = z.infer<typeof contactMessageStatusSchema>;

/**
 * İctimai əlaqə formu inputu — saytdan gələn mesaj.
 * API boundary-də bu sxemlə validasiya olunur (CLAUDE.md: hər boundary-də Zod).
 */
export const contactMessageCreateSchema = z.object({
  name: nonEmptyString.max(120),
  email: z.email().max(200),
  subject: nonEmptyString.max(200).nullish(),
  message: nonEmptyString.max(5000),
});

export type ContactMessageCreateInput = z.infer<typeof contactMessageCreateSchema>;

/** Admin tərəfindən status yeniləmə */
export const contactMessageUpdateSchema = z.object({
  status: contactMessageStatusSchema,
});

export type ContactMessageUpdateInput = z.infer<typeof contactMessageUpdateSchema>;
