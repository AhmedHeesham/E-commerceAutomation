import { PageBase } from "./PageBase";
import { Locator, Page } from "@playwright/test";

export class RegisterPage extends PageBase {
  readonly page: Page;
  readonly maleRadio: Locator;
  readonly femaleRadio: Locator;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly dateOfBirthDay: Locator;
  readonly dateOfBirthMonth: Locator;
  readonly dateOfBirthYear: Locator;
  readonly email: Locator;
  readonly password: Locator;
  readonly confirmPassword: Locator;
  readonly registerButton: Locator;
  readonly companyName: Locator; // optional
  readonly newSletterCheckBox: Locator; // optional

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.maleRadio = this.page.getByLabel("Male", { exact: true });
    this.femaleRadio = this.page.getByLabel("Female", { exact: true });
    this.firstName = this.page.getByLabel("First name:");
    this.lastName = this.page.getByLabel("Last name:");
    this.dateOfBirthDay = this.page.locator('select[name="DateOfBirthDay"]');
    this.dateOfBirthMonth = this.page.locator('select[name="DateOfBirthMonth"]');
    this.dateOfBirthYear = this.page.locator('select[name="DateOfBirthYear"]');
    this.email = this.page.getByLabel("Email:");
    this.password = this.page.getByLabel("Password:", { exact: true });
    this.confirmPassword = this.page.getByLabel("Confirm password:", { exact: true });
    this.registerButton = this.page.getByRole("button", { name: "Register" });
    this.companyName = this.page.getByLabel("Company name:");
    this.newSletterCheckBox = this.page.getByLabel("Newsletter:");
  }
  async fillRegisterPage(
    firstNameValue: string,
    lastNameValue: string,
    emailValue: string,
    passwordValue: string,
    dateOfBirthDayValue: string,
    dateOfBirthMonthValue: string,
    dateOfBirthYearValue: string,
    gender: "male" | "female",
    companyName?: string,
    newsletter?: boolean
  ) {
    if (gender === "male") {
      await this.maleRadio.check();
    } else {
      await this.femaleRadio.check();
    }
    await this.firstName.fill(firstNameValue);
    await this.lastName.fill(lastNameValue);
    await this.email.fill(emailValue);
    await this.password.fill(passwordValue);
    await this.confirmPassword.fill(passwordValue);
    await this.dateOfBirthDay.selectOption(dateOfBirthDayValue);
    await this.dateOfBirthMonth.selectOption(dateOfBirthMonthValue);
    await this.dateOfBirthYear.selectOption(dateOfBirthYearValue);
    if (companyName !== undefined && this.companyName) {
      await this.companyName.fill(companyName);
    }
    if (newsletter) {
      await this.newSletterCheckBox.check();
    } else {
      await this.newSletterCheckBox.uncheck();
    }
    await this.registerButton.click();
  }
}
