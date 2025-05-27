import { test, expect } from '@playwright/test';

test('Log current month movies from IMDb Release Calendar', async ({ page }) => {
  // Step 1: Navigate to imdb.com
  await page.goto('https://www.imdb.com');

  // Step 2: Use locator to find the SVG menu button and click it
  const menuButton = await page.locator('svg.ipc-icon--menu');
  await menuButton.click();

  // Step 3: Find and click on Release Calendar
  await page.click('text=Release Calendar');

  // Step 4: Log the names of movies releasing in the current month
  const currentMonth = new Date().toLocaleString('default', { month: 'long' });
  const movieElements = await page.$$(`.release-calendar .month:has-text("${currentMonth}") .title`);

  for (const movieElement of movieElements) {
    const movieName = await movieElement.textContent();
    console.log(movieName?.trim());
  }
});