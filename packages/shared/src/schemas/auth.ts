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
