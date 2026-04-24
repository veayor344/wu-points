import { Page } from '@playwright/test';

export class BulkUploadPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.getByRole('button', { name: 'Point Management' }).click();
    await this.page.getByRole('button', { name: 'Bulk Upload Points' }).click();
  }

  async selectProgram(programName: string) {
    await this.page.getByRole('combobox', { name: programName }).click();
    await this.page.getByRole('option', { name: programName }).click();
  }

  async selectBranch(branchName: string) {
    await this.page.locator('input[type="text"]').click();
    await this.page.getByRole('option', { name: branchName }).click();
  }

  async uploadFile(filePath: string) {
    await this.page.setInputFiles('input[type="file"]', filePath);
  }

  async clickUpload() {
    await this.page.getByRole('button', { name: 'Upload', exact: true }).click();
  }

  async clickCancel() {
    await this.page.getByRole('button', { name: 'Cancel' }).click();
  }
  
}


