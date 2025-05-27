import test from "@playwright/test";

test.describe("Tests to demonstrate typing behaviour", () => {

    test("Fill, click and get the textcontent of button", async ({ page }) => {
        await page.goto("http://uitestingplayground.com/textinput");
        // Fill the text box with a string    
        await page.locator("#newButtonName").fill("ClickMe");
        await page.locator("#updatingButton").click();

        const textContent = await page.locator("#updatingButton").textContent();
        console.log("Text content after clicking the button: ", textContent);

        // Verify the text content of the button
        test.expect(textContent).toBe("ClickMe");
    });
});