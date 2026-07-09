import { leadCreateSchema, ok, paginate, type LeadCreateInput } from '@aibaycan/shared';
import { prisma } from '@aibaycan/db';
import { Hono } from 'hono';
import { sendError } from '../lib/http.js';
import { valid, validate } from '../lib/validate.js';
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

// Blog listing (published, ən yeni əvvəl)
publicRoutes.get('/posts', async (c) => {
  const items = await prisma.post.findMany({
    where: { published: true },
    orderBy: [{ publishedAt: 'desc' }, { createdAt: 'desc' }],
    include: {
      coverImage: true,
      author: { select: { id: true, name: true } },
      categories: true,
      tags: true,
    },
  });
  return c.json(ok(paginate(items, items.length, 1, items.length || 1)));
});

// Blog detalı (slug üzrə)
publicRoutes.get('/posts/:slug', async (c) => {
  const post = await prisma.post.findFirst({
    where: { slug: c.req.param('slug'), published: true },
    include: {
      coverImage: true,
      author: { select: { id: true, name: true, role: true } },
      categories: true,
      tags: true,
    },
  });
  if (!post) {
    return sendError(c, 'NOT_FOUND', 'Məqalə tapılmadı');
  }
  return c.json(ok(post));
});

// Testimonials (published, sıralı)
publicRoutes.get('/testimonials', async (c) => {
  const items = await prisma.testimonial.findMany({
    where: { published: true },
    orderBy: { order: 'asc' },
    include: { photo: true },
  });
  return c.json(ok(items));
});

// Clients (loqo divarı)
publicRoutes.get('/clients', async (c) => {
  const items = await prisma.client.findMany({
    where: { published: true },
    orderBy: { order: 'asc' },
    include: { logo: true },
  });
  return c.json(ok(items));
});

// Team üzvləri
publicRoutes.get('/team', async (c) => {
  const items = await prisma.teamMember.findMany({
    where: { published: true },
    orderBy: { order: 'asc' },
    include: { photo: true },
  });
  return c.json(ok(items));
});

// Lead formu (saytdan müştəri sorğusu — auth-suz, honeypot qorunması)
publicRoutes.post('/leads', validate('json', leadCreateSchema), async (c) => {
  const { website, ...data } = valid<LeadCreateInput>(c, 'json');
  // website (honeypot) validate-dən keçib boşdursa — normal. Dolubsa Zod rədd edib.
  void website;
  await prisma.lead.create({ data });
  // İctimai form — yaradılan lead-i geri qaytarmırıq (məlumat sızması yox)
  return c.json(ok({ received: true }), 201);
});
