import { test, expect } from '../../fixtures/baseTest';

test.use({
  storageState: '.auth/standardUser.json'
});

test.describe('Authenticated Inventory Tests', () => {

  test('TC-AUTH-001 @auth user can access inventory page with saved session', async ({ page, inventoryPage }) => {

    await page.goto('/inventory.html');
    await inventoryPage.verifyInventoryPageLoaded();
    await inventoryPage.verifyInventoryItemVisible();

  });
});