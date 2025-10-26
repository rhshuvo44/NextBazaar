import { expect, test } from '@playwright/test';

test.describe('Home Page', () => {

  test('Banner and navigation to shop', async ({ page }) => {
    await page.goto('/');

    // Wait for the first "Shop Now" button in the main banner
    const shopNowButton = page.locator('a:has-text("Shop Now")').first();
    await expect(shopNowButton).toBeVisible({ timeout: 10000 });

    // Click the button
    await shopNowButton.click();

    // Verify navigation to shop
    await expect(page).toHaveURL(/shop/);
  });

  test('Navigation Explore Items to Shop page', async ({ page }) => {
    await page.goto('/');

    // Wait for the "Explore Items" button on the Home page
    const exploreItemsButton = page.locator('a:has-text("Explore Items")').first();
    await expect(exploreItemsButton).toBeVisible({ timeout: 10000 });

    // Click the button
    await exploreItemsButton.click();

    // Verify navigation to shop
    await expect(page).toHaveURL(/shop/);
  });

});
