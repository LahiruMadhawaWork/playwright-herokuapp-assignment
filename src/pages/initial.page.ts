import { Page } from "@playwright/test";
import PlaywrighBasetWrapper from "../base/playwrightBase";

export default class InitialPage extends PlaywrighBasetWrapper {
    // Constructor
    constructor(public page: Page) {
        super(page);
    }

    // methods
    public async navigateToPage(page: Page, url: string) {
        await page.goto(url);
    }

    public async clickLinkElements(elementname: string){
        const linkElement = await this.findLocator("//div[@id='content']//a[@href and(text()='" + elementname + "')]");
        await linkElement?.click();
    }
}
