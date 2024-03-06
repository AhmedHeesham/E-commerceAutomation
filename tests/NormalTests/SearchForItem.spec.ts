import { test, expect } from "@playwright/test";
import { PageManager } from "../../src/PageManger/PageManger";

test.beforeEach(async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com/");
});
test("Search for item", async ({ page }) => {
  const val = new PageManager(page);
  const item = "Leica T Mirrorless Digital Camera";
  //   const secondPageSeclector = val.onSearchPage().itemImage;
  await val.onBottomHeader().SearchProduct(item);

  await page.waitForSelector("item-grid .item-box .picture");
  await val.onSearchPage().clickItemImage(item);
});
