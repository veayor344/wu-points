import { test } from '../../fixtures/base-test';
import { ViewDetailAddPoint } from '../../pages/view-customer-points/view-detail-add-point';

test.describe('View Detail - Add Point Scenarios', () => {

    //Add Point to existing user
    test('View Detail Add Point', async ({ loggedInPage }) => {
        const page = loggedInPage;
        const viewDetailAddPoint = new ViewDetailAddPoint(page);
        await viewDetailAddPoint.goToPointManagement();
        await viewDetailAddPoint.openViewCustomerPoints();
        await viewDetailAddPoint.viewDetailCustomer();
        await viewDetailAddPoint.openAddPoints();
        //await viewDetailAddPoint.openPointAction('Add Points');
        await viewDetailAddPoint.AddfillPointForm({
            amount: '7000',
            xref: `XREF-${Date.now()}`,
            description: 'Test Description'
        });
        await viewDetailAddPoint.submitPoint();
        await viewDetailAddPoint.clickDone();
    });

    //Redeem Point from existing user
    test('Redemption Points', async ({ loggedInPage }) => {
        const viewDetailAddPoint = new ViewDetailAddPoint(loggedInPage);

        await viewDetailAddPoint.goToPointManagement();
        await viewDetailAddPoint.openViewCustomerPoints();
        await viewDetailAddPoint.viewDetailCustomer();
        await viewDetailAddPoint.openAddPoints();

        await viewDetailAddPoint.RedemptionfillPointForm({
            pointType: 'Redemption',
            gift: 'Phone Card (17 points)',
            xref: `XREF-${Date.now()}`,
            description: 'Redemption test'
        });

        await viewDetailAddPoint.submitPoint();
        await viewDetailAddPoint.clickDone();
    });

    // Modify Scenario
    test('Modify Points', async ({ loggedInPage }) => {
        const viewDetailAddPoint = new ViewDetailAddPoint(loggedInPage);

        await viewDetailAddPoint.goToPointManagement();
        await viewDetailAddPoint.openViewCustomerPoints();
        await viewDetailAddPoint.viewDetailCustomer();
        await viewDetailAddPoint.openAddPoints();
        //await viewDetailAddPoint.openPointAction('Modify');

        await viewDetailAddPoint.ModifyfillPointForm({
            pointType: 'Modify',
            amount: '1',
            xref: `XREF-${Date.now()}`,
            description: 'Modify test'
        });

        await viewDetailAddPoint.submitPoint();
        await viewDetailAddPoint.clickDone();
    });
});