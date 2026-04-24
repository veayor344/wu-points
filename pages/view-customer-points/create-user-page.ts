import { Page } from '@playwright/test';

export class PointPage {
  constructor(private page: Page) {}

  async goToPointManagement() {
    await this.page.getByRole('button', { name: 'Point Management' }).click();
    await this.page.getByRole('button', { name: "View Customer's Points" }).click();
  }

  async openCreateUser() {
    await this.page.getByRole('button', { name: 'Create User' }).click();
  }

  async fillUserForm(user: any) {
    await this.page.locator('input[name="firstName"]').fill(user.firstName);
    await this.page.locator('input[name="lastName"]').fill(user.lastName);
    await this.page.locator('input[name="phoneNumber"]').fill(user.phoneNumber);
    await this.page.locator('input[name="idNumber"]').fill(user.idNumber);
    await this.page.locator('input[name="cifId"]').fill(user.cifId);
  }

  async submitUser() {
    await this.page.getByRole('button', { name: 'Submit' }).click();
  }

  async updateIdNumber(idNumber: string) {
    await this.page.locator('input[name="idNumber"]').fill(idNumber);
  }

  async clickDone() {
    await this.page.getByRole('button', { name: 'Done' }).click();
  }

  async clickCancel() {
    await this.page.getByRole('button', { name: 'Cancel' }).click();
  }
}