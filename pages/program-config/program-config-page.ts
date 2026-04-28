import { Page } from '@playwright/test';

export class ProgramConfigPage {
    constructor(private page: Page) {}

  async ProgramConfig() {
    await this.page.getByRole('button', { name: 'Point Management' }).click();
    await this.page.getByRole('button', { name: 'Program Config' }).click();
    }

    async viewDetails() {
        await this.page.getByRole('button', { name: 'vector' }).click();
        await this.page.getByText('View Details').click();
    }


    async changePagination(value: string) {
        await this.page.getByText('10').nth(2).click();
        await this.page.getByRole('option', { name: value }).click();
    }

    // async changeDropdown(value: string) {
    //     await this.page.getByRole('combobox').click();
    //     await this.page.getByRole('option', { name: value }).click();
    // }
    
  }