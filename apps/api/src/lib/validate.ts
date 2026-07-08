import type { Context, MiddlewareHandler } from 'hono';
import * as z from 'zod';
import { sendError } from './http.js';

type Target = 'json' | 'query' | 'param';

/**
 * Zod validation middleware — target-i parse edir, uğurlu nəticəni
 * c.set('valid:<target>')-ə qoyur. Xəta → VALIDATION_ERROR envelope (docs/06).
 */
export function validate<S extends z.ZodType>(target: Target, schema: S): MiddlewareHandler {
  return async (c, next) => {
    const raw =
      target === 'json'
        ? await c.req.json().catch(() => ({}))
        : target === 'query'
          ? c.req.query()
          : c.req.param();

    const result = schema.safeParse(raw);
    if (!result.success) {
      const details = fieldErrors(result.error);
      return sendError(c, 'VALIDATION_ERROR', 'Giriş məlumatı yanlışdır', details);
    }
    c.set(`valid:${target}`, result.data);
    await next();
  };
}

/** Validasiya olunmuş məlumatı tip-təhlükəsiz oxu */
export function valid<T>(c: Context, target: Target): T {
  return c.get(`valid:${target}`) as T;
}

/** Zod xətasını sahə→mesajlar xəritəsinə çevir (docs/06 envelope details) */
function fieldErrors(error: z.ZodError): Record<string, string[]> {
  const out: Record<string, string[]> = {};
  for (const issue of error.issues) {
    const key = issue.path.length > 0 ? issue.path.map(String).join('.') : '_';
    (out[key] ??= []).push(issue.message);
  }
  return out;
}
