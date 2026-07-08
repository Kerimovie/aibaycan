import 'dotenv/config';
import { defineConfig, env } from 'prisma/config';

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
    seed: 'tsx prisma/seed.ts',
  },
  // Prisma 7: connection URL schema faylından buraya köçdü (CLI/migrate üçün).
  // Runtime client-i @prisma/adapter-pg ilə src/client.ts-də qurulur.
  datasource: {
    url: env('DATABASE_URL'),
  },
});
