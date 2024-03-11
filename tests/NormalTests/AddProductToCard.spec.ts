import { test, expect } from "@playwright/test";
import { BottomHeader } from "../../src/Shared/BottomHeader";
import { ProductPage } from "../../src/Pages/ProductPage";
test.beforeEach(async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com/");
});

test("Add product to card", async ({ page }) => {
  const searchBarObject = new BottomHeader(page);
  await searchBarObject.SearchProduct("Leica T Mirrorless Digital Camera");
  await page.goto("https://demo.nopcommerce.com/leica-t-mirrorless-digital-camera");
  const productObject = new ProductPage(page);
  await productObject.addToCard(5);

  await page.waitForSelector("#bar-notification");

  await expect(productObject.notificationBar).toBeVisible();
});

test("Add 0 proudect to card", async ({ page }) => {
  const searchBarObject = new BottomHeader(page);
  await searchBarObject.SearchProduct("Leica T Mirrorless Digital Camera");
  await page.goto("https://demo.nopcommerce.com/leica-t-mirrorless-digital-camera");
  const productObject = new ProductPage(page);
  await productObject.addToCard(0);

  await page.waitForSelector(".bar-notification.error");

  await expect(productObject.notificationBarError).toBeVisible();
});
