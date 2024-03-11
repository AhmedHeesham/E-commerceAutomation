// import { test, expect } from "@playwright/test";
// import { PageManager } from "../../src/PageManger/PageManger";

// // test("add shoes to card color radio buttons ", async ({ page }) => {
// //   const val = new PageManager(page);
// //   await page.goto("https://demo.nopcommerce.com/adidas-consortium-campus-80s-running-shoes");
// //   await val.onShoesPage().performAddToCardProcess(1, "Blue", "8", undefined, undefined);

// //   expect(val.onProductPage().notificationBar).toHaveCSS("position", "fixed");
// // }); // size in the ShoesPage = product_attribute_9

// test("add shoes to card color drop down menu ", async ({ page }) => {
//   const val = new PageManager(page);
//   await page.goto("https://demo.nopcommerce.com/nike-floral-roshe-customized-running-shoes");
//   await val.onShoesPage().performAddToCardProcess(1, undefined, "11", "White/Black", 1);
//   expect(val.onProductPage().notificationBar).toHaveCSS("position", "fixed");
// }); // size in the ShoesPage = product_attribute_6

// // test("add shoes to card ", async ({ page }) => {
// //   const val = new PageManager(page);
// //   await page.goto("https://demo.nopcommerce.com/nike-sb-zoom-stefan-janoski-medium-mint");
// //   await val.onShoesPage().performAddToCardProcess(1);
// //   expect(val.onProductPage().notificationBar).toHaveCSS("position", "fixed");

// //   await page.waitForTimeout(1000);
// // });
