import { PageBase } from "../Pages/PageBase";
import { Locator, Page } from "@playwright/test";
export class Header extends PageBase {
  readonly page: Page;
  readonly shoppingCart: Locator;
  readonly wishlist: Locator;
  readonly login: Locator;
  readonly register: Locator;
  readonly customerCurreny: Locator;
  readonly logout: Locator;
  constructor(page: Page) {
    super(page);
    this.page = page;
    this.shoppingCart = this.page.locator(".header-links ul li", { hasText: "Shopping cart" });
    this.wishlist = this.page.locator(".header-links ul li", { hasText: "Wishlist" });
    this.login = this.page.locator(".header-links ul li", { hasText: "Log in" });
    this.logout = this.page.locator(".header-links ul li", { hasText: "Log out" });
    this.register = this.page.locator(".header-links ul li", { hasText: "Register" });
    this.customerCurreny = this.page
      .locator(".header .header-upper .header-selectors-wrapper")
      .getByLabel("Currency selector");
  }
  async clickWishlist() {
    await this.wishlist.click();
  }
  async clickShoppingCart() {
    await this.shoppingCart.click();
  }
  async clickLogin() {
    await this.login.click();
  }
  async clickRegister() {
    await this.register.click();
  }
  async clickCurrencySelector() {
    // await this.customerCurrent.click();
  }
}
