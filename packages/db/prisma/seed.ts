import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import argon2 from 'argon2';
import { PrismaClient } from '../src/generated/prisma/client.js';

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error('DATABASE_URL təyin olunmayıb — seed işə salına bilməz');
}

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

/**
 * Seed — hamısı idempotent (upsert). Kontent aibaycan-ın real portfelini əks etdirir;
 * mətnlər faktiki və qısadır — detallar admin paneldən dəqiqləşdirilir.
 */

function upsertCategory(slug: string, name: string, order: number) {
  return prisma.category.upsert({
    where: { slug },
    update: { name, order },
    create: { slug, name, order },
  });
}

function upsertService(
  slug: string,
  title: string,
  description: string,
  icon: string,
  order: number,
) {
  return prisma.service.upsert({
    where: { slug },
    update: { title, description, icon, order, published: true },
    create: { slug, title, description, icon, order, published: true },
  });
}

async function main(): Promise<void> {
  // ── Admin ──────────────────────────────────────────────────
  const adminEmail = process.env.SEED_ADMIN_EMAIL ?? 'admin@aibaycan.az';
  const adminPassword = process.env.SEED_ADMIN_PASSWORD ?? 'admin12345';
  const passwordHash = await argon2.hash(adminPassword, { type: argon2.argon2id });

  await prisma.adminUser.upsert({
    where: { email: adminEmail },
    update: {},
    create: { email: adminEmail, passwordHash, name: 'Admin', role: 'ADMIN' },
  });

  // ── Kateqoriyalar (iş filtri) ──────────────────────────────
  const cat = {
    veb: await upsertCategory('veb-platformalar', 'Veb & Platformalar', 1),
    erp: await upsertCategory('erp-crm', 'ERP / CRM', 2),
    ai: await upsertCategory('ai-media', 'AI & Media', 3),
    ecom: await upsertCategory('e-commerce', 'E-commerce', 4),
    data: await upsertCategory('data-analitika', 'Data & Analitika', 5),
  };

  // ── Xidmət sütunları (6 bacarıq) ───────────────────────────
  const svc = {
    veb: await upsertService(
      'veb-saytlar',
      'Veb saytlar & platformalar',
      'Müasir, sürətli və SEO-dostu veb saytlar və platformalar.',
      '🌐',
      1,
    ),
    erp: await upsertService(
      'erp-crm',
      'ERP / CRM sistemləri',
      'Biznes əməliyyatları üçün fərdi ERP və CRM həlləri.',
      '🗂️',
      2,
    ),
    ai: await upsertService(
      'ai-media',
      'AI həllər & media',
      'AI ilə mahnı, video və şəkil generasiyası; ağıllı biznes həlləri.',
      '✨',
      3,
    ),
    automation: await upsertService(
      'avtomatlasdirma',
      'Biznes avtomatlaşdırma',
      'Təkrarlanan proseslərin avtomatlaşdırılması və inteqrasiyalar.',
      '⚙️',
      4,
    ),
    data: await upsertService(
      'data-analitika',
      'Data arxitektura & analitika',
      'Data arxitektura, analitika və biznes-analitika həlləri.',
      '📊',
      5,
    ),
    saas: await upsertService(
      'saas',
      'SaaS məhsul inkişafı',
      'Sıfırdan bulud əsaslı SaaS məhsullarının qurulması.',
      '🚀',
      6,
    ),
  };

  // ── İşlər (real portfel — canlı linklərlə) ─────────────────
  type CaseSeed = {
    slug: string;
    title: string;
    tagline: string;
    summary: string;
    liveUrl?: string;
    categoryId: string;
    serviceId: string;
    order: number;
    body: string;
  };

  const cases: CaseSeed[] = [
    {
      slug: 'etehsil-az',
      title: 'Etehsil.az',
      tagline: 'Onlayn təhsil platforması',
      summary: 'Təhsil üçün onlayn platforma — kurslar və öyrənmə təcrübəsi.',
      liveUrl: 'https://etehsil.az',
      categoryId: cat.veb.id,
      serviceId: svc.veb.id,
      order: 1,
      body: 'Onlayn təhsil üçün qurduğumuz platforma. Ətraflı case-study tezliklə.',
    },
    {
      slug: 'sahil-transport',
      title: 'Sahil Transport ERP',
      tagline: 'Transport əməliyyatlarının idarəetməsi',
      summary: 'Nəqliyyat şirkəti üçün əməliyyatların idarə olunması sistemi (ERP).',
      // Daxili ERP — ictimai canlı link yoxdur; demo sorğu ilə göstərilir.
      categoryId: cat.erp.id,
      serviceId: svc.erp.id,
      order: 2,
      body: 'Nəqliyyat əməliyyatlarının uçdan-uca idarə olunması üçün ERP sistemi.',
    },
    {
      slug: 'foodost',
      title: 'Foodost',
      tagline: 'Restoran POS & idarəetmə SaaS',
      summary: 'Restoranlar üçün bulud əsaslı POS, anbar və hesabat platforması.',
      liveUrl: 'https://foodost.com',
      categoryId: cat.veb.id,
      serviceId: svc.saas.id,
      order: 3,
      body: 'Restoran idarəetməsi üçün bulud SaaS — POS, anbar, hesabatlar.',
    },
    {
      slug: 'molecion-az',
      title: 'Molecion.az',
      tagline: 'Parfümeriya e-commerce',
      summary: 'Onlayn parfüm mağazası — kataloq, səbət və ödəniş.',
      liveUrl: 'https://molecion.az',
      categoryId: cat.ecom.id,
      serviceId: svc.veb.id,
      order: 4,
      body: 'Parfüm satışı üçün e-commerce sayt — kataloq, səbət, ödəniş axını.',
    },
    {
      slug: 'cavably',
      title: 'Cavably',
      tagline: 'Rəqəmsal həll',
      summary: 'Cavably.com üçün qurduğumuz rəqəmsal məhsul.',
      liveUrl: 'https://cavably.com',
      categoryId: cat.veb.id,
      serviceId: svc.veb.id,
      order: 5,
      body: 'Cavably.com rəqəmsal məhsulu. Ətraflı case-study tezliklə.',
    },
  ];

  for (const c of cases) {
    await prisma.caseStudy.upsert({
      where: { slug: c.slug },
      update: {
        title: c.title,
        tagline: c.tagline,
        summary: c.summary,
        liveUrl: c.liveUrl ?? null,
        published: true,
        featured: true,
        order: c.order,
        categories: { set: [{ id: c.categoryId }] },
        services: { set: [{ id: c.serviceId }] },
      },
      create: {
        slug: c.slug,
        title: c.title,
        tagline: c.tagline,
        summary: c.summary,
        liveUrl: c.liveUrl ?? null,
        blocks: [{ type: 'richText', html: `<p>${c.body}</p>` }],
        published: true,
        featured: true,
        order: c.order,
        categories: { connect: { id: c.categoryId } },
        services: { connect: { id: c.serviceId } },
      },
    });
  }

  // Köhnə nümunə işi/xidməti gizlət (real portfel görünsün)
  await prisma.caseStudy
    .update({ where: { slug: 'numune-layihe' }, data: { published: false } })
    .catch(() => undefined);
  await prisma.service
    .update({ where: { slug: 'web-development' }, data: { published: false } })
    .catch(() => undefined);

  console.log(`✓ Seed tamamlandı — admin: ${adminEmail}`);
  console.log(`  ${cases.length} iş + ${Object.keys(svc).length} xidmət + ${Object.keys(cat).length} kateqoriya`);
  if (!process.env.SEED_ADMIN_PASSWORD) {
    console.log('  (dev default parol: admin12345 — production-da SEED_ADMIN_PASSWORD təyin et)');
  }
}

main()
  .catch((error: unknown) => {
    console.error('Seed xətası:', error);
    process.exit(1);
  })
  .finally(() => {
    void prisma.$disconnect();
  });
