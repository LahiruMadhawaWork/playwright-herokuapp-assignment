import { expect, Locator, Page } from "@playwright/test";

export default class Assert {

    constructor(private page: Page) { }

    //ui methods
    async assertURLToBe(page: Page, url: string) {
        expect.soft(page.url()).toBe(url);
    }

    async assertToBeVisibile(locator: string) {
        let strLocator: Locator = await this.page.locator(locator);
        await strLocator.waitFor();
        await expect(strLocator).toBeVisible();
    }
}
