import { execSync } from 'node:child_process';
import { E2E } from './playwright.config';

/**
 * E2E global setup — təmiz test DB hazırlayır (dev DB toxunulmur):
 * 1. `aibaycan_test` bazasını sıfırdan yarat (varsa sil)
 * 2. Migrasiyaları tətbiq et
 * 3. Seed (admin + nümunə kontent)
 *
 * Docker Postgres işləməlidir (docker compose up -d).
 */
export default function globalSetup(): void {
  const psql = (sql: string) =>
    execSync(`docker exec aibaycan-postgres psql -U postgres -d postgres -c "${sql}"`, {
      stdio: 'pipe',
    });

  console.log('[e2e] test DB hazırlanır…');

  // Aktiv bağlantıları kəs, bazanı yenidən yarat
  psql(
    `SELECT pg_terminate_backend(pid) FROM pg_stat_activity WHERE datname='aibaycan_test' AND pid<>pg_backend_pid();`,
  );
  psql('DROP DATABASE IF EXISTS aibaycan_test;');
  psql('CREATE DATABASE aibaycan_test;');

  const env = { ...process.env, DATABASE_URL: E2E.TEST_DB_URL };

  console.log('[e2e] migrasiyalar tətbiq olunur…');
  execSync('pnpm --filter @aibaycan/db exec prisma migrate deploy', {
    cwd: '..',
    env,
    stdio: 'inherit',
  });

  console.log('[e2e] seed…');
  execSync('pnpm --filter @aibaycan/db db:seed', { cwd: '..', env, stdio: 'inherit' });

  console.log('[e2e] test DB hazırdır.');
}
