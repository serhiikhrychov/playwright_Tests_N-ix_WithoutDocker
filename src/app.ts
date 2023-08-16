import { Page } from "@playwright/test";
import { RegisterPage } from "./pages/register.page";
import { LoginPage } from "./pages/login.page";

export class App {
  readonly page: Page;
  readonly loginPage: LoginPage;
  readonly registerPage: RegisterPage;

  constructor(page: Page) {
    this.page = page;
    this.loginPage = new LoginPage(page);
    this.registerPage = new RegisterPage(page);
  }
}
