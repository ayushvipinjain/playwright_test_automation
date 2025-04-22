import test, { expect } from "@playwright/test"
import { ai } from "@zerostep/playwright"

test('Sample Automated Test using Zero Step AI', async ({ page }) => {
    await page.goto("https://parabank.parasoft.com/parabank/index.htm")
    await ai("Enter the Username as john", { page, test })
    await ai("Enter the Password as demo", { page, test })
    await ai("Click on the Login button", { page, test })
    await page.waitForURL("**/overview.htm", { waitUntil: 'networkidle' })
    var result = await ai("Get the list of column headers in the Account Overview section", { page, test })
    var rawText = result.replace('*', '')
    var possibleHeaders = ["Account", "Balance", "Available Amount"];
    possibleHeaders.forEach((header)=>{
        expect(rawText).toContain(header)
    })
})
