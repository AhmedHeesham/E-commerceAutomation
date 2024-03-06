import { test, expect } from "@playwright/test";
import { PageManager } from "../../src/PageManger/PageManger";
import { LoginPage } from "../../src/Pages/LoginPage";
import { Header } from "../../src/Shared/Header";
test.beforeEach(async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com/");
});
test("Log in ", async ({ page }) => {
  const LoginObject = new LoginPage(page);
  const headerObject = new PageManager(page);
  await LoginObject.clickLogin();
  await LoginObject.onLoginPage().login("ahmed16@gmail.com", "123456");
  expect(val.onHeader().logout).toBeVisible();
  await page.waitForTimeout(1000);
});
ص