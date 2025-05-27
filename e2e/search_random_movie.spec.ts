import { test, expect } from '@playwright/test';

test('search random movie on IMDB', async ({ page }) => {
  // Step 1: Navigate to IMDB.com
  await page.goto('https://www.imdb.com');

  // Step 2: Locate the search bar
  const searchBar = await page.locator('input[name="q"]');

  // Step 3: Type a random movie name into the search bar
  await searchBar.fill('Inception');

  // Step 4: Submit the search
  await searchBar.press('Enter');

  // Step 5: Verify that the search results page is displayed
  await expect(page).toHaveURL(/.*find.*q=Inception.*/);
  const searchResultsHeader = await page.locator('h1:has-text("Search")');
  await expect(searchResultsHeader).toBeVisible();
});