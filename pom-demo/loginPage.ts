
import { expect, Locator, Page } from "@playwright/test"

export class loginPage{

    readonly page: Page
    readonly loginLink : Locator

    constructor(page: Page){
       this.page = page
       this.loginLink = page.locator('#login2')
    }

    async loginToPage(){
        await this.loginLink.click();
            await this.page.waitForTimeout(1000)
        
    }

}