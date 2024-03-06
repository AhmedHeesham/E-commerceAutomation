import { PageBase } from "./PageBase";
import { Locator, Page } from "@playwright/test";

export class ProductPage extends PageBase {
  readonly page: Page;
  readonly addButton: Locator;
  readonly productQuantity: Locator;
  readonly addToWishListButton: Locator;
  readonly addToComareItemButton: Locator;
  readonly emailFrindButton: Locator;
  readonly notificationBar: Locator;
  constructor(page: Page) {
    super(page);
    this.page = page;
    this.addButton = this.page.locator(".add-to-cart-panel").getByRole("button");
    this.productQuantity = this.page.locator(".add-to-cart-panel .qty-input");
    this.notificationBar = this.page.locator("#bar-notification");
    this.addToWishListButton = this.page.locator(".overview-buttons .add-to-wishlist");
    this.addToComareItemButton = this.page.locator(".overview-buttons .add-to-compare-list-button");
    this.emailFrindButton = this.page.locator(".overview-buttons .email-a-friend-button");
  }

  async addToCard(Quantutity: number) {
    let currentValue = await this.productQuantity.inputValue();
    currentValue = "0";
    const newValue = parseInt(currentValue) + 5;
    await this.productQuantity.fill(newValue.toString());
    await this.addButton.click();
  }

  async addToWishList() {
    await this.addToWishListButton.click();
  }
  async addToComareList() {
    await this.addToComareItemButton.click();
  }
  async emailFriend() {
    await this.emailFrindButton.click();
  }
}
