import { Page } from '@playwright/test';

export class BulkUserUploadPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.getByRole('button', { name: 'Point Management' }).click();
    await this.page.getByRole('button', { name: 'Bulk Upload Users' }).click();
  }

  async selectBranch(branchName: string) {
    await this.page.getByRole('combobox', { name: 'Branch Code' }).click();
    await this.page.getByRole('option', { name: branchName }).click();
  }

  async uploadFile(filePath: string) {
    // ✅ correct way (not button)
    await this.page.setInputFiles('input[type="file"]', filePath);
  }

  async clickUpload() {
    await this.page.getByRole('button', { name: 'Upload', exact: true }).click();
  }

  async clickCancel() {
    await this.page.getByRole('button', { name: 'Cancel' }).click();
  }
}