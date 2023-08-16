import { expect } from "@playwright/test";
import { mytest } from "./base";

mytest("proceed to register page", async ({ app }) => {
  await app.loginPage.open();
  await app.loginPage.clickProceedToRegisterPageBtn();

  await expect(app.registerPage.registerPageHeader).toBeVisible();
});
