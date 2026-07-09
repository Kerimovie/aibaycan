import { test as base, type Page } from '@playwright/test';
import { E2E } from './playwright.config';

/** Admin login helper — UI vasitəsilə (real auth zənciri) */
export async function loginAsAdmin(page: Page): Promise<void> {
  await page.goto(`${E2E.adminUrl}/login`);
  await page.getByLabel('Email').fill(E2E.admin.email);
  await page.locator('#password').fill(E2E.admin.password);
  await page.getByRole('button', { name: 'Daxil ol' }).click();
  await page.waitForURL(`${E2E.adminUrl}/`);
}

/** `adminPage` fixture — artıq login olunmuş səhifə */
export const test = base.extend<{ adminPage: Page }>({
  adminPage: async ({ page }, use) => {
    await loginAsAdmin(page);
    await use(page);
  },
});

export { expect } from '@playwright/test';
export { E2E };
