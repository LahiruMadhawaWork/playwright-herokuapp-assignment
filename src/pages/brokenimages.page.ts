import { Page } from "@playwright/test";
import Assert from "../base/assertBase";
import ENV from "../utils/env";

export default class BrokenImagesPage{
    private objAssert: Assert;

    //variables initiation
    readonly strUrlPathValue: string;

    // Constructor
    constructor(public page: Page) {
        this.objAssert = new Assert(page);
        //Variable value assignment
        this.strUrlPathValue = "broken_images";
    }
    //Web Elements - OR
    private ElementLocators = {        
        headerBrokenImagesElementLocator: "div.example > h3"
    }
    /**
     * 
     * methods
     */    
    public async assertBrokenImagesURL() {
        await this.objAssert.assertURLToBe(this.page, ENV.BASE_URL+this.strUrlPathValue);
    }
    public async assertForHeaderBrokenImages() {
        await this.objAssert.assertToBeVisibile(this.ElementLocators.headerBrokenImagesElementLocator);
    }    
}
