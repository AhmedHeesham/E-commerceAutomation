import { test, expect } from "@playwright/test";
import { RegisterPage } from "../../src/Pages/RegisterPage";

test.beforeEach(async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com/");
});
test("Vaild Register", async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com/register?returnUrl=%2F");

  const regusterObject = new RegisterPage(page);

  await regusterObject.fillRegisterPage("Ahmed", "Ahmed", "ahmed@gmail.com", "123456", "1", "January", "2001", "male", "NopCommerce", false);
  expect(page.locator(".master-wrapper-content .result")).toBeVisible();

  await page.waitForTimeout(100);
});
