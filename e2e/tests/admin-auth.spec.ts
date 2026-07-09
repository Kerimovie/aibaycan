import { expect, test } from '@playwright/test';
import { E2E } from '../playwright.config';

/**
 * Kritik axın: admin auth.
 * Login → dashboard; auth-suz qorunan səhifə → login-ə redirect.
 */
test.describe('admin auth', () => {
  test('qorunan səhifə auth-suz login-ə yönləndirir', async ({ page }) => {
    await page.goto(`${E2E.adminUrl}/categories`);
    await expect(page).toHaveURL(/\/login/);
  });

  test('düzgün məlumatla login → dashboard', async ({ page }) => {
    await page.goto(`${E2E.adminUrl}/login`);

    await page.getByLabel('Email').fill(E2E.admin.email);
    await page.locator('#password').fill(E2E.admin.password);
    await page.getByRole('button', { name: 'Daxil ol' }).click();

    // Dashboard yükləndi
    await expect(page).toHaveURL(`${E2E.adminUrl}/`);
    await expect(page.getByRole('heading', { name: 'İcmal' })).toBeVisible();
    // Header-də istifadəçi göstərilir
    await expect(page.getByText(E2E.admin.email).first()).toBeVisible();
  });

  test('yanlış parol → xəta mesajı, dashboard-a keçmir', async ({ page }) => {
    await page.goto(`${E2E.adminUrl}/login`);

    await page.getByLabel('Email').fill(E2E.admin.email);
    await page.locator('#password').fill('yanlis-parol-12345');
    await page.getByRole('button', { name: 'Daxil ol' }).click();

    await expect(page.getByText(/Email və ya parol yanlışdır/i)).toBeVisible();
    await expect(page).toHaveURL(/\/login/);
  });
});
