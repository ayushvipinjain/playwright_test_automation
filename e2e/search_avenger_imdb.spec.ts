import { test, expect } from '@playwright/test';

test.skip('Search for the movie Avenger on IMDb and open the one released in 2019', async ({ page }) => {
    // Step 1: Navigate to imdb.com
    await page.goto('https://www.imdb.com');

    // Step 2: Search for the movie 'Avenger'
    await page.fill('input[name="q"]', 'Avenger');
    await page.press('input[name="q"]', 'Enter');

    // Step 3: Locate and open the movie released in 2019
    await page.waitForSelector('text=Avengers: Endgame');
    await page.click('text=Avengers: Endgame');

    // Verify the movie page is loaded
    const title = await page.textContent('h1');
    expect(title).toContain('Avengers: Endgame');
});