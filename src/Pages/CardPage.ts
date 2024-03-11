import { PageBase } from "./PageBase";
import { Locator, Page } from "@playwright/test";

export class CardPage extends PageBase {
  readonly page: Page;
  readonly removeItemButton: Locator;
  readonly updateCardButton: Locator;
  readonly continueShoppingButton: Locator;
  readonly estimatedShippingButton: Locator;
  readonly checkoutButton: Locator;
  readonly termsCheckBox: Locator;
  readonly giftWarping: Locator;
  readonly discountCode: Locator;
  readonly giftCard: Locator;
  readonly country: Locator;
  readonly province: Locator;
  readonly zipCode: Locator;
  readonly nextDayRadio: Locator;
  readonly applyShoppingButton: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.removeItemButton = this.page.locator(".table-wrapper .remove-btn");
    this.updateCardButton = this.page.getByRole("button", { name: "Update shopping cart" });
    this.continueShoppingButton = this.page.getByRole("button", { name: "Continue shopping" });
    this.estimatedShippingButton = this.page.locator(".estimate-shipping-button");
    this.checkoutButton = this.page.getByRole("button", { name: "Checkout" });
    this.termsCheckBox = this.page.getByLabel("I agree with the terms of");
    this.giftWarping = this.page.locator("#checkout_attribute_1");
    this.discountCode = this.page.getByLabel("Enter discount coupon code");
    this.giftCard = this.page.getByLabel("Enter gift card code");
    this.country = this.page.locator("#CountryId");
    this.province = this.page.locator("#StateProvinceId");
    this.zipCode = this.page.getByPlaceholder("Zip / postal code");
    this.nextDayRadio = this.page
      .locator("div")
      .filter({ hasText: /^Next Day Air-\$0\.00$/ })
      .locator("label");
    this.applyShoppingButton = this.page.getByRole("button", { name: "Apply", exact: true });
  }

  async removeItem(itemIdex: number) {
    await this.removeItemButton.nth(itemIdex).click();
  }

  async clickUpdateCard() {
    await this.updateCardButton.click();
  }

  async clickContinueShopping() {
    await this.continueShoppingButton.click();
  }

  async fillEstimatedShipping(country: string, province: string, zipCode: number) {
    await this.estimatedShippingButton.click();
    await this.country.selectOption({ label: country });
    await this.province.selectOption({ label: province });
    await this.zipCode.fill(zipCode.toString());
    await this.nextDayRadio.click();
    await this.applyShoppingButton.click();
  }

  async clickCheckout() {
    await this.checkoutButton.click();
  }

  async clickTermsAndConditions() {
    await this.termsCheckBox.click();
  }

  async clickGiftWrapping(warpValue: string) {
    await this.giftWarping.selectOption({ value: warpValue }); //1 //2
  }

  async fillDiscountCode(code: string) {
    await this.discountCode.click();
    await this.discountCode.fill(code);
  }

  async fillGiftCard(code: string) {
    await this.giftCard.click();
    await this.giftCard.fill(code);
  }
}
