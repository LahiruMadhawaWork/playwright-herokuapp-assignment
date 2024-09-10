import { test as baseTest } from "@playwright/test";
import InitialPage from "../pages/initial.page";

const test = baseTest.extend<{
    objInitialPage: InitialPage;
}>({
    objInitialPage: async ({ page }, use) => {
        await use(new InitialPage(page));
    }
})

export default test;
export const expect = test.expect;
