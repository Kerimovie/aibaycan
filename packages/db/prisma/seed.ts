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

async function main(): Promise<void> {
  // İlk admin. Parol env-dən oxunur (hardcoded parol commit olunmur).
  // Lokal dev üçün default var; production-da SEED_ADMIN_PASSWORD mütləq təyin olunmalıdır.
  const adminEmail = process.env.SEED_ADMIN_EMAIL ?? 'admin@aibaycan.az';
  const adminPassword = process.env.SEED_ADMIN_PASSWORD ?? 'admin12345';
  const passwordHash = await argon2.hash(adminPassword, { type: argon2.argon2id });

  await prisma.adminUser.upsert({
    where: { email: adminEmail },
    update: {},
    create: {
      email: adminEmail,
      passwordHash, // real argon2id hash
      name: 'Admin',
      role: 'ADMIN',
    },
  });

  // Nümunə xidmət
  const webService = await prisma.service.upsert({
    where: { slug: 'web-development' },
    update: {},
    create: {
      slug: 'web-development',
      title: 'Veb Development',
      description: 'Müasir, sürətli və SEO-dostu veb saytlar və tətbiqlər.',
      published: true,
      order: 1,
    },
  });

  // Nümunə kateqoriya + teq
  const webCategory = await prisma.category.upsert({
    where: { slug: 'web' },
    update: {},
    create: { slug: 'web', name: 'Veb', order: 1 },
  });
  const nextTag = await prisma.tag.upsert({
    where: { slug: 'nextjs' },
    update: {},
    create: { slug: 'nextjs', name: 'Next.js' },
  });

  // Nümunə case-study (block-based content + əlaqələr)
  await prisma.caseStudy.upsert({
    where: { slug: 'numune-layihe' },
    update: {},
    create: {
      slug: 'numune-layihe',
      title: 'Nümunə Layihə',
      tagline: 'Müasir veb platforma',
      summary: 'Bir müştəri üçün qurduğumuz nümunə case-study.',
      clientName: 'Nümunə Müştəri',
      projectYear: 2026,
      blocks: [
        { type: 'richText', html: '<p>Layihənin təsviri buraya gələcək.</p>' },
      ],
      published: true,
      featured: true,
      order: 1,
      categories: { connect: { id: webCategory.id } },
      tags: { connect: { id: nextTag.id } },
      services: { connect: { id: webService.id } },
    },
  });

  console.log(`✓ Seed tamamlandı — admin: ${adminEmail}`);
  if (!process.env.SEED_ADMIN_PASSWORD) {
    console.log('  (dev default parol istifadə olundu: admin12345 — production-da SEED_ADMIN_PASSWORD təyin et)');
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
