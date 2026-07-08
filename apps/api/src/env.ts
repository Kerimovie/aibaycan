import * as z from 'zod';

/**
 * Env dəyişənləri boundary-dir → Zod ilə validasiya olunur.
 * Yanlış/əskik konfiq zamanı server startda dərhal dayanır (fail-fast).
 */
const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  PORT: z.coerce.number().int().positive().default(3001),
  DATABASE_URL: z.string().min(1, 'DATABASE_URL tələb olunur'),
  JWT_SECRET: z.string().min(32, 'JWT_SECRET ən azı 32 simvol olmalıdır'),
  // Vergüllə ayrılmış icazəli origin-lər (CORS) — admin/web frontend URL-ləri
  CORS_ORIGINS: z.string().default('http://localhost:3000,http://localhost:5173'),
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  console.error('❌ Env konfiqurasiyası yanlışdır:', z.treeifyError(parsed.error));
  throw new Error('Env validasiyası uğursuz — server başlaya bilməz');
}

export const env = parsed.data;

export const corsOrigins = env.CORS_ORIGINS.split(',')
  .map((o) => o.trim())
  .filter(Boolean);

export const isProd = env.NODE_ENV === 'production';
