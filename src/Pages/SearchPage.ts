import { PageBase } from "./PageBase";
import { Locator, Page } from "@playwright/test";

export class SearchPage extends PageBase {
  readonly page: Page;
  readonly itemImage: Locator;
  readonly sortBy: Locator;
  readonly NumberOfPages: Locator;
  readonly viewIConGrid: Locator;
  readonly viewIConList: Locator;
  constructor(page: Page) {
    super(page);
    this.page = page;
    this.itemImage = page.locator(".item-grid .item-box .picture");
  }
  async clickItemImage(imageName: string) {
    await this.itemImage.locator('img[alt="Picture of ' + imageName + '"]').click();
  }
}
