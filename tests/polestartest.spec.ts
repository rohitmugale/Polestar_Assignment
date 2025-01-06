import { test,expect} from '@playwright/test';
import { homePage} from'../pom-demo/homePage';
import { loginPage } from '../pom-demo/loginPage';

test('TC: 01- Verify the title of the homepage', async ({ page }) => {
  const home = new homePage (page)

await page.goto('https://www.polestar.com/us/');

await home.getPageTitle(page)
await home.printPageTitle(page)

});

test('TC: 02- Verify user can see Current offers', async ({ page }) => {
  const home = new homePage (page)
  await page.goto('https://www.polestar.com/us/');

  await home.acceptAll(page)
  await home.clickOnCurrentOffers() 

});

test('TC: 03- Verify user can see polestar car on youtube', async ({ page }) => {
  const home= new homePage(page)
  await page.goto('https://www.polestar.com/us/');

  await home.acceptAll(page)
  await home.clickonyoutube()
 

});
