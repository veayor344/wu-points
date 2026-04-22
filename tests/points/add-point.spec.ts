import { test } from '../../fixtures/base-test';
import { ViewDetailAddPoint } from '../../pages/view-customer-points/view-detail-add-point';

test.describe('View Detail - Add Point Scenarios', () => {

    //Add Point to existing user
    test('View Detail Add Point', async ({loggedInPage}) => {
        const page = loggedInPage;
        const viewDetailAddPoint = new ViewDetailAddPoint(page);
        await viewDetailAddPoint.goToPointManagement();
        await viewDetailAddPoint.openViewCustomerPoints();
        await viewDetailAddPoint.viewDetailCustomer();
        await viewDetailAddPoint.openPointAction('Add Points');
        await viewDetailAddPoint.fillPointForm({
            amount: '1000',
            xref: 'Test XREF',
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
        await viewDetailAddPoint.openPointAction('Redemption');

        await viewDetailAddPoint.fillPointForm({
        pointType: 'Redemption',
        amount: '',
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
        await viewDetailAddPoint.openPointAction('Modify');

        await viewDetailAddPoint.fillPointForm({
        pointType: 'Modify',
        amount: '1',
        xref: `XREF-${Date.now()}`,
        description: 'Modify test'
        });

        await viewDetailAddPoint.submitPoint();
        await viewDetailAddPoint.clickDone();
    });
});