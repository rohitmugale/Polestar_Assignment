import {Locator,Page, expect } from "@playwright/test"

export class homePage{

    readonly page: Page
    readonly currentOffers : Locator
    readonly youtube :Locator

    constructor (page:Page){
      this.page = page           
      this.currentOffers = page.locator('//*[@id="4513618-106934424"]/div/div/div/div[2]/div/a/div/div/div[1]/div/div/picture/img')
      this.youtube = page.locator ('//*[@id="main-content"]/div/div[4]/footer/div/section/div/div[1]/div[2]/nav[5]/a[3]')
      
      
    }


    async getPageTitle(page){
        const pageTitle = await page.title();
        expect(pageTitle).toBe('Polestar – Electric cars | Polestar US');
    }

    async printPageTitle(page){
        const pageTitle = await page.title();
        await console.log(pageTitle)
    }

    async clickOnCurrentOffers(){
        await this.page.waitForTimeout(2000)
        await this.currentOffers.click()
    }


    async acceptAll(page){
        await this.page.waitForTimeout(1000)
        await page.getByRole('button', { name: 'Accept all' }).click();
    }

        async getPagetitle(page){
        const pageTitle = await page.title();
        expect(pageTitle).toBe('Polestar – Electric cars | Polestar US');
    }
        async printpagetitle(page){
        const pageTitle = await page.title();
        await console.log(pageTitle)
    }

        async clickonyoutube(){
        await this.page.waitForTimeout(1000)
        await this.youtube.click()
        await this.page.waitForTimeout(2000)
    
    }
   
}

