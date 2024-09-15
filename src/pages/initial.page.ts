import { Page } from "@playwright/test";
import PlaywrighBasetWrapper from "../base/playwrightBase";
import Assert from "../base/assertBase";
import ENV from "../utils/env";

export default class InitialPage {
    private objPlaywrightBaseWrapper: PlaywrighBasetWrapper;
    private objAssert: Assert;

    // Constructor
    constructor(public page: Page) {
        this.objPlaywrightBaseWrapper = new PlaywrighBasetWrapper(page);
        this.objAssert = new Assert(page);
    }

    //Web Elements - OR
    private ElementLocators = {
        linkAddRemoveElementLocator: "//div[@id='content']//a[@href and(text()='Add/Remove Elements')]",
        linkBrokenImagesElementLocator: "//div[@id='content']//a[@href and(text()='Broken Images')]",
        linkChallengingDOMElementLocator: "//div[@id='content']//a[@href and(text()='Challenging DOM')]",
        linkCheckboxesElementLocator: "//div[@id='content']//a[@href and(text()='Checkboxes')]",
        linkContextMenuElementLocator: "//div[@id='content']//a[@href and(text()='Context Menu')]"
    }

    /**
     * 
     * methods
     */
    // initial page navigating method
    public async navigateToPage(page: Page, url: string) {
        await page.goto(url);
    }
    public async assertInitialPageURL() {
        await this.objAssert.assertURLToBe(this.page, ENV.BASE_URL)
    }
    public async clickOnAddRemoveLink() {
        const linkAddRemoveElement = await this.objPlaywrightBaseWrapper.findLocator(this.ElementLocators.linkAddRemoveElementLocator);
        await linkAddRemoveElement?.click();
    }
    public async clickOnBrokenImagesLink() {
        const linkBrokenImagesElement = await this.objPlaywrightBaseWrapper.findLocator(this.ElementLocators.linkBrokenImagesElementLocator);
        await linkBrokenImagesElement?.click();
    }
    public async clickOnChallengingDOMLink() {
        const linkChallengingDOMElement = await this.objPlaywrightBaseWrapper.findLocator(this.ElementLocators.linkChallengingDOMElementLocator);
        await linkChallengingDOMElement?.click();
    }
    public async clickOnCheckboxesLink() {
        const linkCheckboxesElement = await this.objPlaywrightBaseWrapper.findLocator(this.ElementLocators.linkCheckboxesElementLocator);
        await linkCheckboxesElement?.click();
    }
    public async clickOnContextMenuLink() {
        const linkContextMenuElement = await this.objPlaywrightBaseWrapper.findLocator(this.ElementLocators.linkContextMenuElementLocator);
        await linkContextMenuElement?.click();
    }
}
