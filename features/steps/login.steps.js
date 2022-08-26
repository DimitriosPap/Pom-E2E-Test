const { Given, When, Then } = require("@cucumber/cucumber");
const puppeteer = require("puppeteer");

Given(
  "I have the URL open in the browser",
  { timeout: 60000 },
  async (table) => {
    await loginPage.goToUrl(table);
  }
);

When("I am in the log out landing page", async () => {
  await loginPage.confirmLogoutPage();
});

When("I click the log in button", async () => {
  await loginPage.clickLogin();
});

When("I fill in the form", { timeout: 30000 }, async (table) => {
  await loginPage.fillForm(table);
});

Then("I want to be in the log in landing page", async () => {
  await loginPage.confirmLoginPage();
});

Given("I am loged in to Wikipedia", async () => {
  await loginPage.confirmLoginPage();
});

Then("I click the log out button", async () => {
  await loginPage.clickLogout();
});

Then("I want to be in the log out landing page", async () => {
  await loginPage.confirmLogoutPage();
});
