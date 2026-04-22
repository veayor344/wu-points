import { test } from '../../fixtures/base-test';
import { PointPage } from '../../pages/view-customer-points/point-page';
import { userMock, pointMock } from '../../data/user-data';

//test.describe.skip('Create User Tests', () => {

test('Create User and Add Point', async ({ loggedInPage }) => {
  const page = loggedInPage;
  const pointPage = new PointPage(page);

  // Navigate
  await pointPage.goToPointManagement();

  // Create user
  await pointPage.openCreateUser();
  await pointPage.fillUserForm(userMock.validUser);
  await pointPage.submitUser();

  // Negative case (invalid ID)
  await pointPage.updateIdNumber(userMock.invalidUser.idNumber);
  await pointPage.submitUser();

  // Add point
  await pointPage.openViewUser();
  await pointPage.openAddPoint();
  await pointPage.fillPointForm(pointMock.valid);
  await pointPage.submitPoint();
  await pointPage.clickDone();
});
//});