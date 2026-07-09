import * as z from 'zod';
import { nonEmptyString } from './common.js';

/** Prisma LeadStatus enum ilə sinxron (docs/07) */
export const leadStatusSchema = z.enum(['NEW', 'CONTACTED', 'QUALIFIED', 'WON', 'LOST']);
export type LeadStatus = z.infer<typeof leadStatusSchema>;

/**
 * İctimai lead formu — saytdan gələn müştəri sorğusu.
 * API boundary-də validasiya (CLAUDE.md). Zəngin (docs/07).
 */
export const leadCreateSchema = z.object({
  name: nonEmptyString.max(120),
  email: z.email().max(200),
  phone: nonEmptyString.max(40).nullish(),
  company: nonEmptyString.max(200).nullish(),

  interestedIn: nonEmptyString.max(200).nullish(),
  budgetRange: nonEmptyString.max(100).nullish(),
  message: nonEmptyString.max(5000),

  // Mənbə — client tərəfindən doldurulur (UTM/referrer/pageUrl)
  source: nonEmptyString.max(200).nullish(),
  pageUrl: z.url().max(500).nullish(),

  // Anti-spam: honeypot (boş qalmalıdır — dolubsa bot)
  website: z.string().max(0).optional(),
});

export type LeadCreateInput = z.infer<typeof leadCreateSchema>;

/** Admin tərəfindən status yeniləmə (mini-CRM) */
export const leadUpdateSchema = z.object({
  status: leadStatusSchema,
});
export type LeadUpdateInput = z.infer<typeof leadUpdateSchema>;
