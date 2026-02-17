import { test, expect } from '@playwright/test';

test.only('Browser Context Playwright test', async ({ browser }) => {

    // chrome - plugins / cookies
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.locator('#username').fill('rahulshetty');
    await page.locator("[type='password']").fill('learning');
    await page.locator('#signInBtn').click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText('Incorrect');

});


test('Page Playwright test', async ({ page }) => {

    await page.goto("https://google.com");
    await expect(page).toHaveTitle('Google');

});
