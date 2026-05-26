import { chromium } from '@playwright/test';
import { users } from '../helpers/testData.js';

async function globalSetup() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto('https://www.saucedemo.com');

  await page.locator('[data-test="username"]').fill(users.standard.username);
  await page.locator('[data-test="password"]').fill(users.standard.password);
  await page.locator('[data-test="login-button"]').click();

  await page.waitForURL('https://www.saucedemo.com/inventory.html');

  await page.context().storageState({
    path: '.auth/standardUser.json'
  });

  await browser.close();
}

export default globalSetup;