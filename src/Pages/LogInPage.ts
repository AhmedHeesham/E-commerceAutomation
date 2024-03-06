import { PageBase } from "./PageBase";
import { Locator, Page } from "@playwright/test";

export class LoginPage extends PageBase {
  readonly page: Page;
  readonly email: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;
  constructor(page: Page) {
    super(page);
    this.page = page;
    this.email = this.page.getByLabel("Email:");
    this.password = this.page.getByLabel("Password:", { exact: true });
    this.loginButton = this.page.getByRole("button", { name: "Log in" });
  }
  async login(emailValue: string, passwordValue: string) {
    await this.email.fill(emailValue);
    await this.password.fill(passwordValue);
    await this.loginButton.click();
  }
}
