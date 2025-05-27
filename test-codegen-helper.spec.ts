import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.imdb.com/');
  await page.getByTestId('suggestion-search').click();
  await page.getByTestId('suggestion-search').fill('Inception');
});