import { Page } from "@playwright/test";
import PlaywrighBaseWrapper from "../base/playwrightBase";

export default class InitialPage extends PlaywrighBaseWrapper {
    // Constructor
    constructor(public page: Page) {
        super(page);
    }

    /**
     * 
     * methods
     */
    // initial page navigating method
    public async navigateToPage(page: Page, url: string) {
        await page.goto(url);
    }
    // click on link element method
    public async clickLinkElements(elementname: string){
        const linkElement = await this.findLocator("//div[@id='content']//a[@href and(text()='" + elementname + "')]");
        await linkElement?.click();
    }
}
