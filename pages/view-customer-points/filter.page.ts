import { Page } from '@playwright/test';

export class FilterPage {
  constructor(private page: Page) { }

  async goToPointManagement() {
    await this.page.getByRole('button', { name: 'Point Management' }).click();
  }

  async openViewCustomerPoints() {
    await this.page.getByRole('button', { name: "View Customer's Points" }).click();
  }

  async filterByName(name: string) {
    await this.page.locator('input[name="customerName"]').fill(name);
  }

  async filterByPointId(id: string) {
    await this.page.locator('input[name="walletNo"]').fill(id);
  }

  async filterByBranch(branch: string) {
    await this.page.getByRole('combobox').click();
    await this.page.getByText(branch, { exact: true }).click();
  }

  async filterByDate(from: string, to: string) {
    await this.page.getByPlaceholder('Select date').nth(0).fill(from);
    await this.page.getByPlaceholder('Select date').nth(1).fill(to);
  }

  async clickApply() {
    await this.page.getByRole('button', { name: 'Apply' }).click();
  }
}