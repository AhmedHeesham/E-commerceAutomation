import { test, expect } from "@playwright/test";
import { RegisterPage } from "../../src/Pages/RegisterPage";

test.beforeEach(async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com/");
});
test("Valid Register", async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com/register?returnUrl=%2F");

  const registerObject = new RegisterPage(page);

  await registerObject.fillRegisterPage(
    "Ahmed",
    "Ahmed",
    "ahmed1@gmail.com",
    "123456",
    "1",
    "January",
    "2001",
    "male",
    "NopCommerce",
    false
  );
  expect(page.locator(".master-wrapper-content .result")).toBeVisible();

  await page.waitForTimeout(100);
});
