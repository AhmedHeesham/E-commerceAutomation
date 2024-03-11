import { ProductPage } from "../../ProductPage";
import { ApparelPage } from "./ApparelPage";
import { Locator, Page } from "@playwright/test";
// import { ApparelPage } from "./ApparelPage";

export class ShoesPage extends ProductPage {
  readonly page: Page;
  readonly colorRadioButton: Locator;
  readonly colorDropDownMenu: Locator; //White/Blue //White/Black
  readonly printOnShoes: Locator;
  readonly size: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.printOnShoes = this.page.locator("#image-squares-8 span");
    this.colorDropDownMenu = this.page.locator("#product_attribute_7");
    this.size = this.page.locator("#product_attribute_6"); //product_attribute_9
  }
  async selectColorDropDownMenu(color: string) {
    await this.colorDropDownMenu.selectOption({ label: color });
  }
  async selectColorRadioButton(color: string) {
    await this.page.getByTitle(color).locator("span").click();
  }
  async selectPrintOnShoes(indexOfPrint: number) {
    await this.printOnShoes.nth(indexOfPrint).click();
  }
  async selectSize(size: string) {
    await this.size.selectOption({ label: size });
  }

  async performAddToCardProcess(
    quantity?: number, // 5 //undefined //1
    colorRadioButton?: string, //Blue //undefined //undefined
    size?: string, // '8' //'11' // undefined
    colorDropDownMenu?: string, //undefined  //White/Black //undefined
    printOnShoes?: number //undefined //1 //undefined
  ) {
    if (colorRadioButton) {
      await this.selectColorRadioButton(colorRadioButton);
    }

    if (size) {
      await this.selectSize(size);
    }

    if (colorDropDownMenu) {
      await this.selectColorDropDownMenu(colorDropDownMenu);
    }

    if (printOnShoes) {
      await this.selectPrintOnShoes(printOnShoes);
    }
    await this.page.waitForTimeout(200);

    await this.addToCard(quantity);
  }
}
