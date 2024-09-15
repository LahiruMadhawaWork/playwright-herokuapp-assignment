import { Page } from "@playwright/test";
import Assert from "../base/assertBase";
import ENV from "../utils/env";

export default class AddRemovePage{
    private objAssert: Assert;

    //variables initiation
    readonly strUrlPathValue: string;

    // Constructor
    constructor(public page: Page) {
        this.objAssert = new Assert(page);
        //Variable value assignment
        this.strUrlPathValue = "add_remove_elements/";
    }
    //Web Elements - OR
    private ElementLocators = {        
        headerAddRemoveElementLocator: "div[class='large-12 columns'] > h3"
    }
    /**
     * 
     * methods
     */    
    public async assertAddRemoveURL() {
        await this.objAssert.assertURLToBe(this.page, ENV.BASE_URL+this.strUrlPathValue);
    }
    public async assertForHeaderAddRemove() {
        await this.objAssert.assertToBeVisibile(this.ElementLocators.headerAddRemoveElementLocator);
    }    
}
