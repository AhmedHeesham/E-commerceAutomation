import { ProductPage } from "../../ProductPage";
import { Locator, Page } from "@playwright/test";
export class ApparelPage extends ProductPage {
  readonly page: Page;
  readonly size: Locator;

  constructor(page: Page) {
    super(page);
    this.size = this.page.locator("#product_attribute_6"); //product_attribute_9
  }
  async selectSize(size: string) {
    await this.size.selectOption({ label: size });
  }
}
