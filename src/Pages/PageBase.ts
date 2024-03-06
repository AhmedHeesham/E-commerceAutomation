import { Page, Locator } from "@playwright/test";

export class PageBase {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async getTitle() {
    return await this.page.title();
  }

  async waitForSelector(selector: any) {
    await this.page.waitForSelector(selector);
  }

  async leftClick(selector: string) {
    await this.page.click(selector, { button: "left" });
  }

  async rightClick(selector: any) {
    await this.page.click(selector, { button: "right" });
  }

  async type(selector: any, text: any) {
    await this.page.fill(selector, text);
  }

  async getText(selector: any) {
    return await this.page.textContent(selector);
  }
}
