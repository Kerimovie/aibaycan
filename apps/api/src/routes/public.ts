import { ok, paginate } from '@aibaycan/shared';
import { prisma } from '@aibaycan/db';
import { Hono } from 'hono';
import { sendError } from '../lib/http.js';
import type { AppEnv } from '../types.js';

/**
 * İctimai read-only endpoint-lər — auth-suz, yalnız `published` kontent.
 * CRUD (create/update/delete) admin route-larında olacaq (sonrakı addım).
 */
export const publicRoutes = new Hono<AppEnv>();

// Case-study listing (yalnız published, featured əvvəl)
publicRoutes.get('/case-studies', async (c) => {
  const items = await prisma.caseStudy.findMany({
    where: { published: true },
    orderBy: [{ featured: 'desc' }, { order: 'asc' }],
    include: {
      coverImage: true,
      categories: true,
      tags: true,
    },
  });
  return c.json(ok(paginate(items, items.length, 1, items.length || 1)));
});

// Case-study detalı (slug üzrə)
publicRoutes.get('/case-studies/:slug', async (c) => {
  const caseStudy = await prisma.caseStudy.findFirst({
    where: { slug: c.req.param('slug'), published: true },
    include: {
      coverImage: true,
      categories: true,
      tags: true,
      services: true,
    },
  });
  if (!caseStudy) {
    return sendError(c, 'NOT_FOUND', 'İş tapılmadı');
  }
  return c.json(ok(caseStudy));
});

// Xidmətlər (published)
publicRoutes.get('/services', async (c) => {
  const items = await prisma.service.findMany({
    where: { published: true },
    orderBy: { order: 'asc' },
  });
  return c.json(ok(items));
});
