// import { test, expect } from "@playwright/test";
// import { PageManager } from "../../src/PageManger/PageManger";

// test("Complete Shopping Journey", async ({ page }) => {
//   // Register
//   await page.goto("https://demo.nopcommerce.com/register?returnUrl=%2Fcart");
//   const registerPage = new PageManager(page);
//   await registerPage
//     .onRegisterPage()
//     .fillRegisterPage(
//       "Ahmed",
//       "Ahmed",
//       "ahmed3@gmail.com",
//       "123456",
//       "1",
//       "January",
//       "2001",
//       "male",
//       "NopCommerce",
//       false
//     );
//   expect(page.locator(".master-wrapper-content .result")).toBeVisible();

//   // Log in
//   await registerPage.onHeader().clickLogin();
//   await registerPage.onLoginPage().login("ahmed3@gmail.com", "123456");
//   expect(registerPage.onHeader().logout).toBeVisible();

//   // Add product to cart
//   await registerPage.onBottomHeader().SearchProduct("Leica T Mirrorless Digital Camera");
//   await page.goto("https://demo.nopcommerce.com/leica-t-mirrorless-digital-camera");
//   await registerPage.onProductPage().addToCard(5);
//   expect(registerPage.onProductPage().notificationBar).toHaveCSS("position", "fixed");
//   await page.waitForTimeout(1000);

//   // Checkout
//   await page.goto("https://demo.nopcommerce.com/cart");
//   await registerPage.onCardPage().fillEstimatedShipping("United States", "New York", 12345);
//   await registerPage.onCardPage().clickTermsAndConditions();
//   await registerPage.onCardPage().clickCheckout();
// });
