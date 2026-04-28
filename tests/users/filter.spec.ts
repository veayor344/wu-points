import { test } from '../../fixtures/base-test';
import { FilterPage } from '../../pages/view-customer-points/filter.page';
import { ViewDetailAddPoint } from '../../pages/view-customer-points/view-detail-add-point';


test.describe('Customer Filter', () => {

  // Scenario 1: Filter by customer name
  test('Filter by customer name', async ({ loggedInPage }) => {
    const page = loggedInPage;
    const viewDetailAddPoint = new ViewDetailAddPoint(page);
    const filter = new FilterPage(page);
    await viewDetailAddPoint.goToPointManagement();
    await filter.openViewCustomerPoints();
    await page.locator('input[name="customerName"]').fill('David');
    // Click Apply
    await page.getByRole('button', { name: 'Apply' }).click();
    await page.waitForTimeout(3000);
  });

  // Scenario 2: Point ID
  test('Filter by point ID', async ({ loggedInPage }) => {
    const page = loggedInPage;
    const filter = new FilterPage(page);
    const viewDetailAddPoint = new ViewDetailAddPoint(page);
    await viewDetailAddPoint.goToPointManagement();
    await filter.openViewCustomerPoints();
    // Point ID
    await page.locator('input[name="walletNo"]').fill('W-2604-030');
    // Click Apply
    await page.getByRole('button', { name: 'Apply' }).click();
    await page.waitForTimeout(3000);

  });
  // Scenario 3: branch
  test('Filter by branch', async ({ loggedInPage }) => {
    const page = loggedInPage;
    const filter = new FilterPage(page);
    const viewDetailAddPoint = new ViewDetailAddPoint(page);
    await viewDetailAddPoint.goToPointManagement();
    await filter.openViewCustomerPoints();
    await page.waitForTimeout(2000);
    // // Branch dropdown
    // await page.getByRole('combobox').click();
    // await page.getByText('Head Office (010)', { exact: true }).click();

    // Branch
    await page.getByRole('combobox', { name: 'Select' }).click();
    await page.getByText('Siem Reap (020)').last().click();

    // Click Apply
    await page.getByRole('button', { name: 'Apply' }).click();
    await page.waitForTimeout(3000);

  });

  // Scenario 4: Date range
  test('Filter By Date Range', async ({ loggedInPage }) => {
    const page = loggedInPage;
    const filter = new FilterPage(page);
    const viewDetailAddPoint = new ViewDetailAddPoint(page);
    await viewDetailAddPoint.goToPointManagement();
    await filter.openViewCustomerPoints();
    await page.waitForTimeout(2000);
    // Start Date
    await page.getByPlaceholder('Select date').nth(0).fill('20-04-2026');
    await page.keyboard.press('Enter');
    // End Date
    await page.getByPlaceholder('Select date').nth(1).fill('22-04-2026');
    await page.keyboard.press('Enter');

    // Click Apply
    await page.getByRole('button', { name: 'Apply' }).click();
    await page.waitForTimeout(3000);
  });
});