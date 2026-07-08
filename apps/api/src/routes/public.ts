import { ok, paginate } from '@aibaycan/shared';
import { prisma } from '@aibaycan/db';
import { Hono } from 'hono';
import type { AppEnv } from '../types.js';

/**
 * İctimai read-only endpoint-lər — auth-suz, yalnız `published` kontent.
 * CRUD (create/update/delete) admin route-larında olacaq (sonrakı addım).
 */
export const publicRoutes = new Hono<AppEnv>();

publicRoutes.get('/projects', async (c) => {
  const items = await prisma.project.findMany({
    where: { published: true },
    orderBy: [{ featured: 'desc' }, { order: 'asc' }],
  });
  return c.json(ok(paginate(items, items.length, 1, items.length || 1)));
});

publicRoutes.get('/projects/:slug', async (c) => {
  const project = await prisma.project.findFirst({
    where: { slug: c.req.param('slug'), published: true },
  });
  if (!project) {
    return c.json({ ok: false, error: { code: 'NOT_FOUND', message: 'Layihə tapılmadı' } }, 404);
  }
  return c.json(ok(project));
});

publicRoutes.get('/services', async (c) => {
  const items = await prisma.service.findMany({
    where: { published: true },
    orderBy: { order: 'asc' },
  });
  return c.json(ok(items));
});
