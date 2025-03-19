import test, { expect } from "@playwright/test";
import { describe } from "node:test";

test.describe('Test Suite', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://google.com')
    })

    test('This is a sample test to demonstrate the playwright functionality', async ({ page }) => {
        // Browser will be launch Automatically as per config file

    })

    test('Launch a URL', async ({ page }) => {

        await expect(page).toHaveTitle('Google')
    })

})
