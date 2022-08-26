const { loginSelectorsObj } = require("./loginSelectors");
const expect = require("expect");
let user;

class LoginFunctionsClass {
  constructor() {
    page = page;
  }

  async goToUrl(table) {
    page.setDefaultTimeout(30000);
    const table_values = table.hashes();
    var select_row = table_values[1];
    var server = select_row.URL;
    await page.goto(server);
  }

  async confirmLogoutPage() {
    await page.waitForSelector(loginSelectorsObj.login_button);
    const eval_page = await page.$eval(
      loginSelectorsObj.login_button,
      (e) => e.innerText
    );
    expect(eval_page).toBe(loginSelectorsObj.login_button_text);
  }

  async clickLogin() {
    const button = await page.$(loginSelectorsObj.login_button);
    await button.click();
  }

  async fillForm(table) {
    await page.waitForSelector(loginSelectorsObj.login_form);
    var table_values = table.hashes();
    var select_row = table_values[1];
    user = select_row.Username;
    var pass = select_row.Password;
    await page.type(loginSelectorsObj.username_field, user);
    await page.type(loginSelectorsObj.password_field, pass);
    await page.waitForSelector(loginSelectorsObj.login_submit);
    page.click(loginSelectorsObj.login_submit);
  }

  async confirmLoginPage() {
    await page.waitForSelector(loginSelectorsObj.login_landing_page);
    const eval_page = await page.$eval(
      loginSelectorsObj.login_landing_page,
      (e) => e.innerText
    );
    expect(eval_page).toBe(user);
  }

  async clickLogout() {
    const eval_page = await page.$eval(
      loginSelectorsObj.logout_button,
      (e) => e.innerText
    );
    expect(eval_page).toBe(loginSelectorsObj.logout_button_text);
    const button = await page.$(loginSelectorsObj.logout_button);
    await button.click();
  }
}
module.exports = { LoginFunctionsClass };
