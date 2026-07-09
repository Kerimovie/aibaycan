import * as z from 'zod';

/** Prisma AdminRole enum ilə sinxron (docs/07) */
export const adminRoleSchema = z.enum(['ADMIN', 'EDITOR']);
export type AdminRole = z.infer<typeof adminRoleSchema>;

/** Admin login inputu (docs/05 auth) */
export const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(8, 'parol ən azı 8 simvol olmalıdır'),
});

export type LoginInput = z.infer<typeof loginSchema>;

/** Yeni admin yaratma / parol dəyişmə üçün güclü parol qaydası */
export const strongPasswordSchema = z
  .string()
  .min(10, 'parol ən azı 10 simvol olmalıdır')
  .max(200);

/** Admin istifadəçi yaratma (parol məcburi) */
export const adminUserCreateSchema = z.object({
  email: z.email().max(200),
  name: z.string().trim().max(120).nullish(),
  role: adminRoleSchema.default('EDITOR'),
  password: strongPasswordSchema,
});
export type AdminUserCreateInput = z.infer<typeof adminUserCreateSchema>;

/** Admin yeniləmə (parol opsional — dəyişmək istəməyəndə boş) */
export const adminUserUpdateSchema = z.object({
  name: z.string().trim().max(120).nullish(),
  role: adminRoleSchema.optional(),
  active: z.boolean().optional(),
  password: strongPasswordSchema.optional(),
});
export type AdminUserUpdateInput = z.infer<typeof adminUserUpdateSchema>;
