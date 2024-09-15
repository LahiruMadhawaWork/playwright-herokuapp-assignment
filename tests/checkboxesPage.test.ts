import {Browser, BrowserContext, chromium, Page, test} from "@playwright/test";
import InitialPage from "../src/pages/initial.page";
import ENV from "../src/utils/env";
import CheckboxesPage from "../src/pages/checkboxes.page";

let browser: Browser;
let context: BrowserContext;
let page: Page;

test("Checkboxes link selection @Smoke", async (testInfo) => {
    browser = await chromium.launch();
    context = await browser.newContext({
        recordVideo: {
            dir: `./test-results/videos/`,
            size: { width: 1418, height: 789 }
        }       
    });
    page = await context.newPage();

    const objInitialPage = new InitialPage(page);
    const objCheckboxesPage = new CheckboxesPage(page);

    await test.step("Navigate to Landing Page", async () => {
        await objInitialPage.navigateToPage(page, ENV.BASE_URL);
        await objInitialPage.assertInitialPageURL();
    })
    
    await test.step("Click on Checkboxes link", async () => {
        await objInitialPage.clickOnCheckboxesLink();
        await objCheckboxesPage.assertCheckboxesURL();
        await objCheckboxesPage.assertForHeaderCheckboxes();
    })

    await page.close();          
    await context.close();
    await browser.close();
})
