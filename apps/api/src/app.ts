import { ok } from '@aibaycan/shared';
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
import { corsOrigins } from './env.js';
import { HttpError, sendError, toHttpError } from './lib/http.js';
import { adminRoutes } from './routes/admin/index.js';
import { authRoutes } from './routes/auth.js';
import { publicRoutes } from './routes/public.js';
import type { AppEnv } from './types.js';

export function createApp() {
  const app = new Hono<AppEnv>();

  app.use('*', logger());
  app.use(
    '/api/*',
    cors({
      origin: corsOrigins,
      credentials: true, // cookie auth üçün
    }),
  );

  // Health check (auth-suz)
  app.get('/health', (c) => c.json(ok({ status: 'up' })));

  // İctimai read endpoint-lər
  app.route('/api', publicRoutes);

  // Admin auth
  app.route('/api/admin/auth', authRoutes);

  // Admin CRUD (authMiddleware daxildə)
  app.route('/api/admin', adminRoutes);

  // 404
  app.notFound((c) => sendError(c, 'NOT_FOUND', 'Endpoint tapılmadı'));

  // Mərkəzi error handler — no silent catch (CLAUDE.md)
  app.onError((error, c) => {
    if (error instanceof HttpError) {
      // Bilinən domain xətaları — 5xx-dən başqa loglama səviyyəsi aşağı
      return sendError(c, error.code, error.message, error.details);
    }
    // Prisma bilinən xətaları (unique/not-found) → uyğun envelope
    const prismaError = toHttpError(error);
    if (prismaError) {
      return sendError(c, prismaError.code, prismaError.message, prismaError.details);
    }
    // Gözlənilməz — həmişə loglanır
    console.error('[api] gözlənilməz xəta:', error);
    return sendError(c, 'INTERNAL', 'Daxili server xətası');
  });

  return app;
}
