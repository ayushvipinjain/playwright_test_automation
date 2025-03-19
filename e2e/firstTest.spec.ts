import {test,expect} from "@playwright/test";

test('Open Google and search',async({page})=>{
  
    await page.goto('https://google.com');
    await expect(page).toHaveTitle('Google')
})