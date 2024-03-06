import { PageBase } from "../Pages/PageBase";
import { Locator, Page } from "@playwright/test";
export class BottomHeader extends PageBase {
  readonly page: Page;
  readonly searchFiled: Locator;
  readonly searchButton: string;
  readonly logo: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.searchFiled = this.page.locator(".header-lower").getByPlaceholder("Search store");
    this.logo = this.page.locator(".header-lower.logo");
    this.searchButton = ".header-lower .button-1";
  }
  async clickLogo() {
    await this.logo.click();
  }
  async SearchProduct(proudct: string) {
    await this.searchFiled.click();
    await this.searchFiled.fill(proudct);
    await this.page.click(this.searchButton);
  }
  async clickSearchButton() {
    await this.page.click(this.searchButton);
  }
}
