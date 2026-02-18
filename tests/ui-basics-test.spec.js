import { test, expect } from '@playwright/test';

test.only('Browser Context Playwright test', async ({ browser }) => {

    // chrome - plugins / cookies
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    const username = page.locator('#username');
    const signInButton = page.locator('#signInBtn');
    const cardTitles = page.locator('.card-body a');

    await username.fill('rahulshetty');
    await page.locator("[type='password']").fill('Learning@830$3mK2');
    await signInButton.click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText('Incorrect');

    await username.fill('');
    await username.fill('rahulshettyacademy');
    await signInButton.click();

    console.log(await cardTitles.first().textContent());
    console.log(await cardTitles.nth(1).textContent());

});


test('Page Playwright test', async ({ page }) => {

    await page.goto("https://google.com");
    await expect(page).toHaveTitle('Google');

});
