import { test, expect } from "@playwright/test";
import { ShoesPage } from "../../src/Pages/ProductsPages/Apparel/ShoesPage";

// test("add shoes to card color radio buttons ", async ({ page }) => {
//   const shoesObject = new ShoesPage(page);
//   await page.goto("https://demo.nopcommerce.com/adidas-consortium-campus-80s-running-shoes");
//   await shoesObject.performAddToCardProcess(1, "Blue", "8", undefined, undefined);

//   expect(shoesObject.notificationBar).toHaveCSS("position", "fixed");
// }); // size in the ShoesPage = product_attribute_9

test("add shoes to card color drop down menu ", async ({ page }) => {
  const shoesObject = new ShoesPage(page);
  await page.goto("https://demo.nopcommerce.com/nike-floral-roshe-customized-running-shoes");
  await shoesObject.performAddToCardProcess(1, undefined, "11", "White/Black", 1);
  await expect(page.locator(".bar-notification .content")).toBeVisible();
}); // size in the ShoesPage = product_attribute_6

// test("add shoes to card ", async ({ page }) => {
//   const shoesObject = new ShoesPage(page);
//   await page.goto("https://demo.nopcommerce.com/nike-sb-zoom-stefan-janoski-medium-mint");
//   await shoesObject.performAddToCardProcess(1);
//   expect(shoesObject.notificationBar).toHaveCSS("position", "fixed");

//   await page.waitForTimeout(1000);
// });
