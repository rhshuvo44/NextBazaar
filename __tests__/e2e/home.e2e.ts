import { test, expect } from '@playwright/test';

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

    // Use exact text matching
    // const ExploreItemsLink = page.locator('text="Explore Items"');
    // await expect(ExploreItemsLink).toBeVisible({ timeout: 10000 });
    // await ExploreItemsLink.click();

    // Wait for a reliable element on the Shop page
    const exploreItemsButton = page.locator('a:has-text("Explore Items")').first();
    await expect(exploreItemsButton).toBeVisible({ timeout: 10000 });

    // Click the button
    await exploreItemsButton.click();

    // Verify navigation to shop
    await expect(page).toHaveURL(/shop/);
  });

});
