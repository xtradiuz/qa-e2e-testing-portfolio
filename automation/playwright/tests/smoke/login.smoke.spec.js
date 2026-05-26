import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../pages/LoginPage';
import { users } from '../../../helpers/testData';

test.describe('Login Smoke Tests', () => {

  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test('TC-001 @smoke standard user can login', async ({ page }) => {

    await loginPage.login(
      users.standard.username,
      users.standard.password
    );

    await expect(page).toHaveURL(
      'https://www.saucedemo.com/inventory.html'
    );
  });

  test('TC-002 @smoke locked out user sees error', async () => {

    await loginPage.login(
      users.lockedOut.username,
      users.lockedOut.password
    );

    await loginPage.verifyError(
      'Sorry, this user has been locked out.'
    );
  });

});