import { test, expect } from "@playwright/test";
import { LoginPage } from "../../src/Pages/LogInPage";
import { Header } from "../../src/Shared/Header";
test.beforeEach(async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com/");
});
test("Log in ", async ({ page }) => {
  const LoginObject = new LoginPage(page);
  const headerObject = new Header(page);
  await headerObject.clickLogin();
  await LoginObject.login("ahmed1@gmail.com", "123456");
  expect(headerObject.logout).toBeVisible();
  await page.waitForTimeout(1000);
});
