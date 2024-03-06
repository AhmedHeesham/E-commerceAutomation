import { test, expect } from "@playwright/test";
import { PageManager } from "../src/PageManger/PageManger";

// test.beforeEach(async ({ page }) => {
//   await page.goto("https://demo.nopcommerce.com/");
// });

test("Vaild Register", async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com/");
  await new Promise((resolve) => setTimeout(resolve, Math.floor(Math.random() * 4000 + 1000)));

  // Scroll the page to load additional content
  await page.evaluate(() => window.scrollBy(0, window.innerHeight));

  // Add another random delay of 1 to 5 seconds
  await new Promise((resolve) => setTimeout(resolve, Math.floor(Math.random() * 4000 + 1000)));
  await page.locator("#products-orderby").click();
});
test("Product Order", async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com/leica-t-mirrorless-digital-camera");
  await page.locator(".add-to-cart-panel").getByRole("button").click();
  const input_field = page.locator(".add-to-cart-panel .qty-input");
  let currentValue = await input_field.inputValue();
  currentValue = "0";

  const newValue = parseInt(currentValue) + 5;
  await input_field.fill(newValue.toString());
});

test("search for items", async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com/search?q=Leica+T+Mirrorless+Digital+Camera");
  let itemImage = page.locator(".item-grid .item-box .picture");
  await itemImage.locator('img[alt="Picture of ' + "Leica T Mirrorless Digital Camera" + '"]').click();
});
