import { test, expect, Browser, Page, Locator } from '@playwright/test';
import { chromium } from 'playwright';

test('login test', async () => {
    const browser: Browser = await chromium.launch({ headless: false });
    const page:Page = await browser.newPage();
    await page.goto('https://letcode.in/signup');

    const email:Locator = await page.locator("//*[@id='email']");
    const password:Locator = await page.locator("//*[@id='pass']");
    const signup:Locator =  await page.locator("//*[text()='SIGN UP']");

   await email.fill("codoid123@gmail.com");
   await password.fill("sundar");
   await signup.click();

});