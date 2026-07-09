import { E2E, expect, test } from '../fixtures';

/**
 * Kritik axın: admin CRUD (kateqoriya nümunəsində).
 * Yarat → list-də görün → sil. RHF + Zod + API + DB zənciri.
 */
test.describe('admin CRUD (kateqoriyalar)', () => {
  const unique = `e2e-${Date.now()}`;

  test('kateqoriya yaradılır, listdə görünür və silinir', async ({ adminPage: page }) => {
    await page.goto(`${E2E.adminUrl}/categories`);
    await expect(page.getByRole('heading', { name: 'Kateqoriyalar' })).toBeVisible();

    // Yarat
    await page.getByRole('button', { name: 'Yeni' }).click();
    await expect(page.getByRole('dialog')).toBeVisible();

    await page.getByLabel('Ad').fill(`E2E Kateqoriya ${unique}`);
    await page.getByLabel('Slug').fill(unique);
    await page.getByRole('button', { name: 'Yarat' }).click();

    // Modal bağlandı, sətir listdə
    await expect(page.getByRole('dialog')).toBeHidden();
    const row = page.getByRole('row').filter({ hasText: unique });
    await expect(row).toBeVisible();

    // Sil (confirm dialogu qəbul et)
    page.once('dialog', (dialog) => void dialog.accept());
    await row.getByRole('button').last().click();

    await expect(page.getByRole('row').filter({ hasText: unique })).toHaveCount(0);
  });

  test('slug təkrarı validation xətası göstərir', async ({ adminPage: page }) => {
    await page.goto(`${E2E.adminUrl}/categories`);

    // Seed-dən gələn "web" slug-ı təkrarla
    await page.getByRole('button', { name: 'Yeni' }).click();
    await page.getByLabel('Ad').fill('Təkrar');
    await page.getByLabel('Slug').fill('web');
    await page.getByRole('button', { name: 'Yarat' }).click();

    // Server CONFLICT → sahə altında xəta, modal açıq qalır
    await expect(page.getByRole('dialog')).toBeVisible();
    await expect(page.getByText(/artıq istifadə olunub|artıq mövcuddur/i)).toBeVisible();
  });
});
