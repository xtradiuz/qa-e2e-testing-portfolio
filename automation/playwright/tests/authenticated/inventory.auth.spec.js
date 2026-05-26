import { test, expect } from '@playwright/test';
import { InventoryPage } from '../../pages/InventoryPage';

test.use({
  storageState: '.auth/standardUser.json'
});

test.describe('Authenticated Inventory Tests', () => {

  test('TC-AUTH-001 @auth user can access inventory page with saved session', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);

    await page.goto('/inventory.html');
    await inventoryPage.verifyInventoryPageLoaded();
    await inventoryPage.verifyInventoryItemVisible();

  });
});