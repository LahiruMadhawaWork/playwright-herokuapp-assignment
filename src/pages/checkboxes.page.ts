import { Page } from "@playwright/test";
import Assert from "../base/assertBase";
import ENV from "../utils/env";

export default class CheckboxesPage{
    private objAssert: Assert;

    //variables initiation
    readonly strUrlPathValue: string;

    // Constructor
    constructor(public page: Page) {
        this.objAssert = new Assert(page);
        //Variable value assignment
        this.strUrlPathValue = "checkboxes";
    }
    //Web Elements - OR
    private ElementLocators = {        
        headerCheckboxesElementLocator: "div.example > h3"
    }
    /**
     * 
     * methods
     */    
    public async assertCheckboxesURL() {
        await this.objAssert.assertURLToBe(this.page, ENV.BASE_URL+this.strUrlPathValue);
    }
    public async assertForHeaderCheckboxes() {
        await this.objAssert.assertToBeVisibile(this.ElementLocators.headerCheckboxesElementLocator);
    }    
}
