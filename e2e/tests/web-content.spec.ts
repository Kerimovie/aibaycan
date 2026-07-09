import { expect, test } from '@playwright/test';
import { E2E } from '../playwright.config';

/**
 * Kritik axın: ictimai kontent (case-study listing → detal, blocks render).
 * Plus: GDPR consent banner + GA4 gate.
 */
test.describe('web kontent', () => {
  test('case-study listing → detal, blocks render olunur', async ({ page }) => {
    await page.goto(`${E2E.webUrl}/az/projects`);
    await expect(page.getByRole('heading', { name: 'İşlərimiz' })).toBeVisible();

    // Seed case-study
    const card = page.getByRole('link').filter({ hasText: 'Nümunə Layihə' });
    await expect(card).toBeVisible();
    await card.click();

    // Detal səhifəsi
    await expect(page).toHaveURL(/\/projects\/numune-layihe/);
    await expect(page.getByRole('heading', { name: 'Nümunə Layihə', level: 1 })).toBeVisible();

    // Block render (richText seed-dən)
    await expect(page.getByText(/Layihənin təsviri/)).toBeVisible();

    // Geri linki
    await expect(page.getByRole('link', { name: /İşlərə qayıt/ })).toBeVisible();
  });

  test('i18n — EN locale ingiliscə göstərir', async ({ page }) => {
    await page.goto(`${E2E.webUrl}/en/projects`);
    await expect(page.getByRole('heading', { name: 'Our Work' })).toBeVisible();
  });
});

test.describe('GDPR consent', () => {
  test('banner görünür və GA4 razılıqsız yüklənmir', async ({ page }) => {
    await page.goto(`${E2E.webUrl}/az`);

    // Banner
    const banner = page.getByRole('dialog', { name: /Cookie razılığı/i });
    await expect(banner).toBeVisible();

    // GA4 script razılıqsız YOX
    await expect(page.locator('script[src*="googletagmanager"]')).toHaveCount(0);

    // İmtina → banner gizlənir, GA4 hələ yox
    await banner.getByRole('button', { name: 'İmtina et' }).click();
    await expect(banner).toBeHidden();
    await expect(page.locator('script[src*="googletagmanager"]')).toHaveCount(0);
  });

  test('imtinadan sonra banner yenidən göstərilmir', async ({ page }) => {
    await page.goto(`${E2E.webUrl}/az`);
    await page.getByRole('button', { name: 'İmtina et' }).click();

    await page.reload();
    await expect(page.getByRole('dialog', { name: /Cookie razılığı/i })).toBeHidden();
  });
});
