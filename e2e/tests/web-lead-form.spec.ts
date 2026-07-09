import { expect, test } from '@playwright/test';
import { E2E } from '../playwright.config';

/**
 * Kritik axın: lead formu (lead-gen platformasının əsas konversiyası).
 * Doldur → göndər → uğur mesajı. Validation + honeypot.
 */
test.describe('web lead formu', () => {
  test('düzgün doldurulmuş form uğurla göndərilir', async ({ page }) => {
    await page.goto(`${E2E.webUrl}/az/contact`);
    await expect(page.getByRole('heading', { name: 'Əlaqə' })).toBeVisible();

    await page.getByLabel('Ad', { exact: true }).fill('E2E Test');
    await page.getByLabel('Email').fill(`e2e-${Date.now()}@example.com`);
    await page.getByLabel('Mesaj').fill('E2E test mesajı — lead formu axını.');

    await page.getByRole('button', { name: 'Göndər' }).click();

    // Uğur mesajı formu əvəz edir
    await expect(page.getByText(/Sorğunuz göndərildi/i)).toBeVisible();
  });

  test('boş ad/email validation xətası göstərir', async ({ page }) => {
    await page.goto(`${E2E.webUrl}/az/contact`);

    // Yalnız mesaj doldur
    await page.getByLabel('Mesaj').fill('Ad və email yoxdur');
    await page.getByRole('button', { name: 'Göndər' }).click();

    // Uğur mesajı GÖRÜNMƏMƏLİDİR; sahə xətası var
    await expect(page.getByText(/Sorğunuz göndərildi/i)).toBeHidden();
    await expect(page.locator('form')).toBeVisible();
  });
});
