import { test, expect } from "@playwright/test";
import { PageManager } from "../src/PageManger/PageManger";

test.beforeEach(async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com/");
});
test("Vaild Register", async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com/register?returnUrl=%2F");

  const val = new PageManager(page);

  await val.onRegisterPage().fillRegisterPage("Ahmed", "Ahmed", "ahmed@gmail.com", "123456", "1", "January", "2001", "male", "NopCommerce", false);
  expect(page.locator(".master-wrapper-content .result")).toBeVisible();

  await page.waitForTimeout(100);
});
