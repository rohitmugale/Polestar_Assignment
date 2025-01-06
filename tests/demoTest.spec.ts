import {test, Locator, expect} from '@playwright/test'

import {loginPage} from '../pom-demo/loginPage'

import { homePage } from '../pom-demo/homePage'

test('TC:001 - Check user can login to application',async( {page} ) => {
    const login = new loginPage(page)

    await page.goto("https://www.demoblaze.com/index.html")
    await login.loginToPage()
    // await login.checkLoginFunctionality()
})


