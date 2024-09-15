import {Browser, BrowserContext, chromium, Page, test} from "@playwright/test";
import InitialPage from "../src/pages/initial.page";
import ENV from "../src/utils/env";
import AddRemovePage from "../src/pages/addremove.page";
import BrokenImagesPage from "../src/pages/brokenimages.page";
import ChallengingDOMPage from "../src/pages/challengingdom.page";
import CheckboxesPage from "../src/pages/checkboxes.page";
import ContextMenuPage from "../src/pages/contextmenu.page";


test.describe("Link Selection test scenario @regression", () => {
  let context: BrowserContext;
  let page: Page;

  let objInitialPage: InitialPage;
  let objAddRemovePage: AddRemovePage;
  let objBrokenImagesPage: BrokenImagesPage;
  let objChallengingDOMPage: ChallengingDOMPage;
  let objCheckboxesPage: CheckboxesPage;  
  let objContextMenuPage: ContextMenuPage;
  

  test.beforeAll(async ({ browser }) => {
    browser = await chromium.launch();
    context = await browser.newContext({
      recordVideo: {
        dir: `./test-results/videos/`,
        size: { width: 1418, height: 789 },
      },
    });
    await context.clearCookies();
    page = await context.newPage();

    objInitialPage = new InitialPage(page);
    objAddRemovePage = new AddRemovePage(page);
    objBrokenImagesPage = new BrokenImagesPage(page);
    objChallengingDOMPage = new ChallengingDOMPage(page);
    objCheckboxesPage = new CheckboxesPage(page);
    objContextMenuPage = new ContextMenuPage(page);
  });

  test.beforeEach(async ({ browser }, testInfo) => {
    await test.step("Navigate to Landing Page", async () => {
        await objInitialPage.navigateToPage(page, ENV.BASE_URL);
        await objInitialPage.assertInitialPageURL();
    });
  });

  test("Add/Remove link selection @AddRemove", async ({ browser }, testInfo) => {
    await test.step("Click on Add/Remove link", async () => {
        await objInitialPage.clickOnAddRemoveLink();
        await objAddRemovePage.assertAddRemoveURL();
        await objAddRemovePage.assertForHeaderAddRemove();
    });   
  });
  test("BrokenImages link selection @BrokenImages", async ({ browser }, testInfo) => {
    await test.step("Click on BrokenImages link", async () => {
        await objInitialPage.clickOnBrokenImagesLink();
        await objBrokenImagesPage.assertBrokenImagesURL();
        await objBrokenImagesPage.assertForHeaderBrokenImages();
    });    
  });
  test("ChallengingDOM link selection @ChallengingDOM", async ({ browser }, testInfo) => {
    await test.step("Click on ChallengingDOM link", async () => {
        await objInitialPage.clickOnChallengingDOMLink();
        await objChallengingDOMPage.assertChallengingDOMURL();
        await objChallengingDOMPage.assertForHeaderChallengingDOM();
    });    
  });
  test("Checkboxes link selection @Checkboxes", async ({ browser }, testInfo) => {
    await test.step("Click on Checkboxes link", async () => {
        await objInitialPage.clickOnCheckboxesLink();
        await objCheckboxesPage.assertCheckboxesURL();
        await objCheckboxesPage.assertForHeaderCheckboxes();
    })    
  });
  test("ContextMenu link selection @ContextMenu", async ({ browser }, testInfo) => {
    await test.step("Click on ContextMenu link", async () => {
        await objInitialPage.clickOnContextMenuLink();
        await objContextMenuPage.assertContextMenuURL();
        await objContextMenuPage.assertForHeaderContextMenu();
    });    
  });

  test.afterEach(async ({ browser }, testInfo) => {
    // Capture the test execution results status after every test
    if (testInfo.status !== testInfo.expectedStatus)
        console.log(`${testInfo.title} did not run as expected!`);
  });

  test.afterAll(async ({ browser }, testInfo) => {
    await page.close();          
    await context.close();
    await browser.close();            
  });
});
