import { expect, test } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('KimDongCheol Art');
});

test('go "/about" when click name link', async ({ page }) => {
  await page.goto('/');

  // Click the get started link.
  await page.getByRole('link', { name: 'by. KimDongCheol' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page).toHaveTitle('About | KimDongCheol Art');
});
