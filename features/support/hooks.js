const { Before, After, BeforeAll, AfterAll, BeforeStep, AfterStep } = require('@cucumber/cucumber');
const puppeteer = require('puppeteer');
const { LoginFunctionsClass } = require('../../pom/loginPage/loginFunctions');


BeforeAll(async function () {
    //run before any scenario runs
    browser = await puppeteer.launch({
        headless: false,
        slowMo: 150, //minimum value required for Ci/Cd pipeline
        args: [
            '--disable-gpu',
            '--disable-dev-shm-usage',
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--window-size=1200,800',
        ],
        "defaultViewport": null
    });
    page = await browser.newPage();
    loginPage = new LoginFunctionsClass(page);
    //console.log('BeforeAll');
});

/* Before(async function () {
    //run before the first step of each scenario
    //console.log('Before first step of scenario');
});

BeforeStep(async function () {
    //run before a step
    //console.log('BeforeStep');
});

BeforeStep({ tags: '@foo' }, async function () {
    //console.log('BeforeStep');
    // apply this hook to only specific scenarios
});

AfterStep(async function () {
    //run after a step
    //console.log('AfterStep');
}); 

After(async function (scenario) {
    //run after the last step of each scenario
    //console.log('After last step of scenario');
});
*/
AfterAll(async function () {
    //run after all scenarios have been executed
    browser.close();
    //console.log('AfterAll');
});
