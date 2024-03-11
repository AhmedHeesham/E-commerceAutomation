import { PageBase } from "./PageBase";
import { Locator, Page } from "@playwright/test";

export class ProductPage extends PageBase {
  readonly page: Page;
  readonly addButton: Locator;
  readonly productQuantity: Locator;
  readonly addToWishListButton: Locator;
  readonly addToCompareItemButton: Locator;
  readonly emailFriendButton: Locator;
  readonly notificationBar: Locator;
  readonly notificationBarError: Locator;
  constructor(page: Page) {
    super(page);
    this.page = page;
    this.addButton = this.page.locator(".add-to-cart-button");
    this.productQuantity = this.page.locator(".add-to-cart-panel .qty-input");
    // this.notificationBar = this.page.locator("#bar-notification");
    this.notificationBar = this.page.getByText("The product has been added to");
    this.notificationBarError = this.page.locator(".bar-notification.error");
    this.addToWishListButton = this.page.locator(".overview-buttons .add-to-wishlist");
    this.addToCompareItemButton = this.page.locator(".overview-buttons .add-to-compare-list-button");
    this.emailFriendButton = this.page.locator(".overview-buttons .email-a-friend-button");
  }

  async addToCard(quantity?: number) {
    let currentValue = await this.productQuantity.inputValue();
    currentValue = "0";

    if (quantity !== undefined) {
      currentValue = (parseInt(currentValue) + quantity).toString();
      await this.productQuantity.fill(currentValue);
    } else {
      currentValue = "1";
    }
    await this.page.waitForTimeout(299);
    await this.addButton.click();
    // await this.leftClick(`${this.addButton}`);
  }

  async addToWishList() {
    await this.addToWishListButton.click();
  }
  async addToCompareList() {
    await this.addToCompareItemButton.click();
  }
  async emailFriend() {
    await this.emailFriendButton.click();
  }
}
