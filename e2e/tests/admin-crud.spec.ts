import { E2E, expect, test } from '../fixtures';

/**
 * Kritik axın: admin CRUD (kateqoriya nümunəsində).
 * Yarat → list-də görün → sil. RHF + Zod + API + DB zənciri.
 * Slug formada YOXDUR — server addan avtomatik yaradır (unikal).
 */
test.describe('admin CRUD (kateqoriyalar)', () => {
  test('kateqoriya yaradılır, listdə görünür və silinir', async ({ adminPage: page }) => {
    const unique = `e2e-${Date.now()}`;

    await page.goto(`${E2E.adminUrl}/categories`);
    await expect(page.getByRole('heading', { name: 'Kateqoriyalar' })).toBeVisible();

    // Yarat — yalnız ad (slug avtomatik)
    await page.getByRole('button', { name: 'Yeni' }).click();
    await expect(page.getByRole('dialog')).toBeVisible();
    await page.getByLabel('Ad').fill(unique);
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

  test('eyni ad iki dəfə → hər ikisi yaranır (server unikal slug verir)', async ({
    adminPage: page,
  }) => {
    const name = `Dublikat ${Date.now()}`;

    await page.goto(`${E2E.adminUrl}/categories`);

    for (let i = 0; i < 2; i++) {
      await page.getByRole('button', { name: 'Yeni' }).click();
      await page.getByLabel('Ad').fill(name);
      await page.getByRole('button', { name: 'Yarat' }).click();
      // Hər dəfə modal bağlanmalıdır — CONFLICT xətası OLMAMALIDIR
      await expect(page.getByRole('dialog')).toBeHidden();
    }

    // İki sətir eyni adla
    await expect(page.getByRole('row').filter({ hasText: name })).toHaveCount(2);
  });
});
