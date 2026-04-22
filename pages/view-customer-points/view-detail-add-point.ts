import { Page } from "@playwright/test";

export class ViewDetailAddPoint {
    constructor(private page: Page) {};

    async goToPointManagement() {
        await this.page.getByRole('button', {name: 'Point Management'}).click();
    }

    async openViewCustomerPoints() {
        await this.page.getByRole('button', {name: "View Customer's Points"}).click();
    }
    
    async viewDetailCustomer() {
        await this.page.getByText('W-2604-030').click();
    }

    // async openAddPoints() {
    //     await this.page.getByRole('button', {name: 'Add Points'}).click();
    // }
    
    async openPointAction(action: 'Add Points' | 'Redemption' | 'Modify') {
        await this.page.getByRole('button', { name: action }).click();
    }
    
    async fillPointForm(point: any) {
        await this.page.locator('input[name="amount"]').fill(point.amount);
        await this.page.locator('input[name="xref"]').fill(point.xref);
        await this.page.locator('input[name="description"]').fill(point.description);
    }

    async submitPoint() {
        await this.page.getByRole('button', {name: 'Submit'}).click();
    }

    async clickDone() {
    await this.page.getByRole('button', { name: 'Done' }).click();
  }
}