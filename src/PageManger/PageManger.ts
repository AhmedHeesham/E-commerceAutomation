import { Page } from "@playwright/test";
import { PageBase } from "../Pages/PageBase";
import { RegisterPage } from "../Pages/RegisterPage";
import { LoginPage } from "../Pages/LogInPage";
import { Header } from "../Shared/Header";
import { BottomHeader } from "../Shared/BottomHeader";
import { ProductPage } from "../Pages/ProductPage";
import { SearchPage } from "../Pages/SearchPage";

export class PageManager extends PageBase {
  readonly page: Page;
  private readonly registerPage: RegisterPage;
  private readonly loginPage: LoginPage;
  private readonly header: Header;
  private readonly bottomHeader: BottomHeader;
  private readonly productPage: ProductPage;
  private readonly searchPage: SearchPage;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.registerPage = new RegisterPage(this.page);
    this.loginPage = new LoginPage(this.page);
    this.header = new Header(this.page);
    this.bottomHeader = new BottomHeader(this.page);
    this.productPage = new ProductPage(this.page);
  }

  onRegisterPage() {
    return this.registerPage;
  }
  onLoginPage() {
    return this.loginPage;
  }
  onHeader() {
    return this.header;
  }
  onBottomHeader() {
    return this.bottomHeader;
  }
  onProductPage() {
    return this.productPage;
  }
  onSearchPage() {
    return this.searchPage;
  }
}
