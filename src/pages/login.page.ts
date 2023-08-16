import { Locator, expect } from "@playwright/test";
import { BasePage } from "./base.page";

export class LoginPage extends BasePage {
  readonly proceedToRegisterPageBtn: Locator = this.page.locator("#enterimg");

  async open() {
    await this.page.goto("/Index.html");
  }

  async clickProceedToRegisterPageBtn(): Promise<void> {
    await this.proceedToRegisterPageBtn.click();
  }
}
