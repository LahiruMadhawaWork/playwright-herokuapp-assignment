import {Browser, BrowserContext, chromium, Page, test, expect} from "@playwright/test";
import InitialPage from "../src/pages/initial.page";
import ENV from "../src/utils/env";
import Assert from "../src/base/assertBase";

let browser: Browser;
let context: BrowserContext;
let page: Page;

const linkTextData = [{
    name: "Add/Remove Elements",
    path: "add_remove_elements/",
    element: "div[class='large-12 columns'] > h3"
},
{
    name: "Broken Images",
    path: "broken_images",
    element: "div.example > h3"
},
{
    name: "Challenging DOM",
    path: "challenging_dom",
    element: "div.example > h3"
},
{
    name: "Checkboxes",
    path: "checkboxes",
    element: "div.example > h3"
},
{
    name: "Context Menu",
    path: "context_menu",
    element: "div.example > h3"
}]

linkTextData.forEach(data => {
    test(`${data.name} link selection @Smoke`, async (testInfo) => {
        browser = await chromium.launch();
        context = await browser.newContext({
            recordVideo: {
                dir: `./test-results/videos/`,
                size: { width: 1418, height: 789 }
            }       
        });
        page = await context.newPage();
    
        const objInitialPage = new InitialPage(page);
        const objAssert = new Assert(page);
    
        await test.step(`Navigate to Landing Page to select ${data.name}`, async () => {
            await objInitialPage.navigateToPage(page, ENV.BASE_URL);
            await objAssert.assertURLToBe(page, ENV.BASE_URL);
        })
        
        await test.step(`Click on link: ${data.name}`, async () => {
            await objInitialPage.clickLinkElements(data.name);
            await objAssert.assertURLToBe(page, ENV.BASE_URL+data.path);
            await objAssert.assertToBeVisibile(data.element);

        })
    
        await page.close();          
        await context.close();
        await browser.close();
    })
})

