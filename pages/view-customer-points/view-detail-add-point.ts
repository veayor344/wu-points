import { Page } from "@playwright/test";

export class ViewDetailAddPoint {
    constructor(private page: Page) { };

    async goToPointManagement() {
        await this.page.getByRole('button', { name: 'Point Management' }).click();
    }

    async openViewCustomerPoints() {
        await this.page.getByRole('button', { name: "View Customer's Points" }).click();
    }

    async viewDetailCustomer() {
        await this.page.getByText('W-2604-030').click();
    }

    async openAddPoints() {
        await this.page.waitForTimeout(1000);
        await this.page.getByRole('button', { name: 'Add Points' }).click();
        await this.page.waitForTimeout(1000);
    }

    // For Add Points scenario
    async AddfillPointForm(point: any) {
        await this.page.locator('input[name="amount"]').fill(point.amount);
        await this.page.locator('input[name="xref"]').fill(point.xref);
        await this.page.locator('input[name="description"]').fill(point.description);
        }

    // For Redemption scenario
    async RedemptionfillPointForm(point: any) {
        // change Point Type Redemption 
        if (point.pointType && point.pointType === 'Redemption') {
            await this.page.getByRole('combobox', { name: 'Add Points' }).click();
            await this.page
                .locator('li, div[role="option"]')
                .filter({ hasText: point.pointType })
                .first()
                .click();
        }
        // Redemption → select gift
        if (point.pointType === 'Redemption') {
            await this.page.getByRole('combobox', { name: 'Select Gift' }).click();

            await this.page
                .locator('li, div')
                .filter({ hasText: point.gift })
                .first()
                .click();
        }
        // Step 3: Common fields
        await this.page.locator('input[name="xref"]').fill(point.xref);
        await this.page.locator('input[name="description"]').fill(point.description);
    }

    // For Redemption scenario
    async ModifyfillPointForm(point: any) {
        // Modify Points
        if (point.pointType === 'Modify') {
            await this.page.getByRole('combobox', { name: 'Add Points' }).click();

            await this.page
                .locator('li, div[role="option"]')
                .filter({ hasText: point.pointType })
                .first()
                .click();
        }
        // Common fields
        await this.page.waitForTimeout(1000);
        await this.page.locator('input[name="points"]').fill(point.amount); 
        await this.page.locator('input[name="xref"]').fill(point.xref);
        await this.page.locator('input[name="description"]').fill(point.description);
    }
    //Submit form for all scenarios
    async submitPoint() {
        await this.page.getByRole('button', { name: 'Submit' }).click();
    }
    // Click Done after submit
    async clickDone() {
        await this.page.getByRole('button', { name: 'Done' }).click();
    }
}



