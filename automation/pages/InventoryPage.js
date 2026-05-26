import { expect } from '@playwright/test';

export class InventoryPage {
  constructor(page) {
    this.page = page;

    this.inventoryList = page.locator('.inventory_list');
    this.inventoryItems = page.locator('.inventory_item');
    this.shoppingCartIcon = page.locator('.shopping_cart_link');
  }

  async goto() {
    await this.page.goto('/inventory.html');
  }

  async verifyInventoryPageLoaded() {
    await expect(this.page).toHaveURL(/inventory.html/);
    await expect(this.inventoryList).toBeVisible();
  }

  async verifyInventoryItemVisible() {
    await expect(this.inventoryItems.first()).toBeVisible();
  }
}