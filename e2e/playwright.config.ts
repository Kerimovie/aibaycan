import { defineConfig, devices } from '@playwright/test';

/**
 * E2E konfiqurasiyası — kritik axınlar (CLAUDE.md test piramidası: E2E ~10%).
 *
 * AYRICA TEST DB (`aibaycan_test`) — dev datası çirkləndirilmir.
 * globalSetup DB-ni yaradır/migrate edir və seed admin qurur.
 *
 * webServer: api (3101) + web (3100) + admin (3102) — dev portlardan fərqli,
 * dev serverlər işləyərkən də E2E qaça bilsin.
 */

const TEST_DB_URL = 'postgresql://postgres:postgres@localhost:5434/aibaycan_test?schema=public';
const API_PORT = 3101;
const WEB_PORT = 3100;
const ADMIN_PORT = 3102;

export const E2E = {
  TEST_DB_URL,
  apiUrl: `http://localhost:${API_PORT}`,
  webUrl: `http://localhost:${WEB_PORT}`,
  adminUrl: `http://localhost:${ADMIN_PORT}`,
  admin: { email: 'admin@aibaycan.az', password: 'admin12345' },
};

const apiEnv = {
  NODE_ENV: 'development',
  PORT: String(API_PORT),
  DATABASE_URL: TEST_DB_URL,
  JWT_SECRET: 'e2e-test-secret-at-least-32-characters-long',
  CORS_ORIGINS: `http://localhost:${WEB_PORT},http://localhost:${ADMIN_PORT}`,
  // Fixture hər test üçün yenidən login edir — rate-limit axını süni sındırmasın (docs/16).
  RATE_LIMIT_DISABLED: 'true',
};

export default defineConfig({
  testDir: './tests',
  fullyParallel: false, // DB paylaşılır — ardıcıl
  workers: 1,
  retries: process.env.CI ? 2 : 0,
  reporter: process.env.CI ? 'github' : 'list',
  timeout: 30_000,

  globalSetup: './global-setup.ts',

  use: {
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },

  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],

  webServer: [
    {
      command: 'pnpm --filter @aibaycan/api dev',
      port: API_PORT,
      reuseExistingServer: !process.env.CI,
      timeout: 60_000,
      env: apiEnv,
      cwd: '..',
    },
    {
      command: 'pnpm --filter @aibaycan/web dev',
      port: WEB_PORT,
      reuseExistingServer: !process.env.CI,
      timeout: 120_000,
      env: {
        PORT: String(WEB_PORT),
        API_URL: `http://localhost:${API_PORT}`,
        SITE_URL: `http://localhost:${WEB_PORT}`,
      },
      cwd: '..',
    },
    {
      command: `pnpm --filter @aibaycan/admin dev --port ${ADMIN_PORT}`,
      port: ADMIN_PORT,
      reuseExistingServer: !process.env.CI,
      timeout: 60_000,
      env: { API_PROXY_TARGET: `http://localhost:${API_PORT}` },
      cwd: '..',
    },
  ],
});
