import { Locator, expect } from "@playwright/test";
import { BasePage } from "./base.page";

export class RegisterPage extends BasePage {
  readonly registerPageHeader: Locator = this.page.locator(
    "//h2[text()='Register']"
  );
}
