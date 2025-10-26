import { test, expect } from "@playwright/test";

test.describe("Home Page", () => {

  test("Banner and navigation to shop", async ({ page }) => {
    await page.goto("https://next-bazaar-ashy.vercel.app/");
    await expect(page.locator("text=Featured Products")).toBeVisible();
    await page.click("text=Shop Now");
    await expect(page).toHaveURL(/shop/);
  });

  test("Navigation to About page", async ({ page }) => {
    await page.goto("https://next-bazaar-ashy.vercel.app/");
    await page.click("text=About");
    await expect(page).toHaveURL(/about/);
    await expect(page.locator("text=Our Story")).toBeVisible();
  });

});
