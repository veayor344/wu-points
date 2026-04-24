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

    async openAddPoints() {
        await this.page.getByRole('button', {name: 'Add Points'}).click();
    }
    
    // async openPointAction(action: 'Add Points' | 'Redemption' | 'Modify') {
    //     await this.page.getByRole('button', { name: action }).click();
    // }
    
    async fillPointForm(point: any) {

    // Step 1: Change Point Type if needed
    if (point.action && point.action !== 'Add Points') {
        await this.page.getByRole('combobox', { name: 'Point Type' }).click();
        await this.page.getByText(point.action, { exact: true }).click();
    }

    // Step 2: Handle Redemption (select gift)
    if (point.action === 'Redemption') {
        await this.page.getByRole('combobox', { name: 'Select Gift' }).click();
        await this.page.getByText(point.gift, { exact: true }).click();
    }

    // Step 3: Handle Add Points / Modify (use amount)
    else {
        await this.page.locator('input[name="amount"]').fill(point.amount);
    }

    // Step 4: Common fields
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



