import { test, expect } from "@playwright/test";
import { SearchPage } from "../../src/Pages/SearchPage";
import { BottomHeader } from "../../src/Shared/BottomHeader";
test.beforeEach(async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com/");
});
test("Search for item", async ({ page }) => {
  const searchBarObject = new BottomHeader(page);
  const item = "Leica T Mirrorless Digital Camera";
  //   const secondPageSelector = val.onSearchPage().itemImage;
  await searchBarObject.SearchProduct(item);
  const searchObject = new SearchPage(page);
  const imgLocator = `img[alt="Picture of ${item}"]`;
  await page.waitForSelector(imgLocator);
  await searchObject.clickItemImage(item);
  await expect(page.locator("product-reviews-overview")).toBeDefined();
});
