import { test, expect } from "@playwright/test";
import { PageManager } from "../src/PageManger/PageManger";

test.beforeEach(async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com/");
});

test("Add product to card", async ({ page }) => {
  const val = new PageManager(page);
  await val.onBottomHeader().SearchProduct("Leica T Mirrorless Digital Camera");
  await page.goto("https://demo.nopcommerce.com/leica-t-mirrorless-digital-camera");
  await val.onProductPage().addToCard(5);
  expect(val.onProductPage().notificationBar).toHaveCSS("position", "fixed");
});

test("Add product to wishlist", async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com/leica-t-mirrorless-digital-camera");

  await page.locator(".overview-buttons .add-to-wishlist-button").click();
  await page.locator(".overview-buttons .add-to-compare-list-button").click();
  await page.locator(".overview-buttons .email-a-friend-button").click();
});
