import { Page } from "@playwright/test";
import Assert from "../base/assertBase";
import ENV from "../utils/env";

export default class ContextMenuPage{
    private objAssert: Assert;

    //variables initiation
    readonly strUrlPathValue: string;

    // Constructor
    constructor(public page: Page) {
        this.objAssert = new Assert(page);
        //Variable value assignment
        this.strUrlPathValue = "context_menu";
    }
    //Web Elements - OR
    private ElementLocators = {        
        headerContextMenuElementLocator: "div.example > h3"
    }
    /**
     * 
     * methods
     */    
    public async assertContextMenuURL() {
        await this.objAssert.assertURLToBe(this.page, ENV.BASE_URL+this.strUrlPathValue);
    }
    public async assertForHeaderContextMenu() {
        await this.objAssert.assertToBeVisibile(this.ElementLocators.headerContextMenuElementLocator);
    }    
}
