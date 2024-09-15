import { Page } from "@playwright/test";
import Assert from "../base/assertBase";
import ENV from "../utils/env";

export default class ChallengingDOMPage{
    private objAssert: Assert;

    //variables initiation
    readonly strUrlPathValue: string;

    // Constructor
    constructor(public page: Page) {
        this.objAssert = new Assert(page);
        //Variable value assignment
        this.strUrlPathValue = "challenging_dom";
    }
    //Web Elements - OR
    private ElementLocators = {        
        headerChallengingDOMElementLocator: "div.example > h3"
    }
    /**
     * 
     * methods
     */    
    public async assertChallengingDOMURL() {
        await this.objAssert.assertURLToBe(this.page, ENV.BASE_URL+this.strUrlPathValue);
    }
    public async assertForHeaderChallengingDOM() {
        await this.objAssert.assertToBeVisibile(this.ElementLocators.headerChallengingDOMElementLocator);
    }    
}
