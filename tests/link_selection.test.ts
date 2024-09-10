import {Browser, BrowserContext, chromium, Page, test, expect} from "@playwright/test";
import InitialPage from "../src/pages/initial.page";
import ENV from "../src/utils/env";

let browser: Browser;
let context: BrowserContext;
let page: Page;

const linkTextData = [{
    name: "Add/Remove Elements",
    path: "add_remove_elements/"
},
{
    name: "Broken Images",
    path: "broken_images"
},
{
    name: "Challenging DOM",
    path: "challenging_dom"
},
{
    name: "Checkboxes",
    path: "checkboxes"
},
{
    name: "Context Menu",
    path: "context_menu"
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
    
        await test.step(`Navigate to Landing Page to select ${data.name}`, async () => {
            await objInitialPage.navigateToPage(page, ENV.BASE_URL);
            expect.soft(page.url()).toBe(ENV.BASE_URL);
        })
        
        await test.step(`Click on link: ${data.name}`, async () => {
            await objInitialPage.clickLinkElements(data.name);
            expect.soft(page.url()).toBe(ENV.BASE_URL+data.path);
        })
    
        await page.close();          
        await context.close();
        await browser.close();
    })
})

