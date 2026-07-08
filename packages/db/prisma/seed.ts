import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../src/generated/prisma/client.js';

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error('DATABASE_URL təyin olunmayıb — seed işə salına bilməz');
}

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

async function main(): Promise<void> {
  // İlk admin istifadəçi (parol hash sonra auth axınında real hash ilə əvəz olunmalıdır)
  await prisma.adminUser.upsert({
    where: { email: 'admin@aibaycan.az' },
    update: {},
    create: {
      email: 'admin@aibaycan.az',
      // PLACEHOLDER — real deploy-dan əvvəl bcrypt/argon2 hash ilə əvəz et (docs/05)
      passwordHash: 'CHANGE_ME_BEFORE_DEPLOY',
      name: 'Admin',
      role: 'ADMIN',
    },
  });

  // Nümunə xidmət
  await prisma.service.upsert({
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

  console.log('✓ Seed tamamlandı');
}

main()
  .catch((error: unknown) => {
    console.error('Seed xətası:', error);
    process.exit(1);
  })
  .finally(() => {
    void prisma.$disconnect();
  });
