import { test, expect, Browser, Page, Locator } from '@playwright/test';
import { chromium } from 'playwright';

test('login test', async () => {
    const browser: Browser = await chromium.launch({ headless: false });
    const page:Page = await browser.newPage();
    await page.goto('https://letcode.in/test');

    const dropdown_button = await page.locator("//*[text()='Drop-Down']");
    await dropdown_button.click();

    const fruits = await page.locator('#fruits');
    await fruits.click();


    await page.waitForTimeout(3000);




});