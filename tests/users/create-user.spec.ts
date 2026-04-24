import { test } from '../../fixtures/base-test';
import { PointPage } from '../../pages/view-customer-points/create-user-page';
import { userMock} from '../../data/user-data';

test.describe('Create User Tests', () => {

  //Open Create User form
  test('Open Create User Form', async ({ loggedInPage }) => {
    const page = loggedInPage;
    const pointPage = new PointPage(page);
    // Navigate to Point Management
    await pointPage.goToPointManagement();
    // Open Create User form
    await pointPage.openCreateUser();
  });

  //Required Fields Validation
  test('Required Fields Validation', async ({ loggedInPage }) => {
    const page = loggedInPage;
    const pointPage = new PointPage(page);
    // Navigate to Point Management
    await pointPage.goToPointManagement();
    // Open Create User form
    await pointPage.openCreateUser();
    // Attempt to submit form with empty fields
    await pointPage.submitUser();
  });

  // Create User Valid
  test.skip('Create User Valid', async ({ loggedInPage }) => {
    const page = loggedInPage;
    const pointPage = new PointPage(page);
    // Navigate
    await pointPage.goToPointManagement();
    // Create user
    await pointPage.openCreateUser();
    await pointPage.fillUserForm(userMock.validUser);
    await pointPage.submitUser();
    await pointPage.clickDone();
  });

  // Create User Invalid
  test('Create User Invalid', async ({ loggedInPage }) => {
    const page = loggedInPage;
    const pointPage = new PointPage(page);
    // Navigate to Point Management
    await pointPage.goToPointManagement();
    // Attempt to create user with invalid data
    await pointPage.openCreateUser();
    await pointPage.fillUserForm(userMock.invalidUser);
    await pointPage.submitUser();
  });

  // Create User Empty Fields
  test('Create User Empty Fields', async ({ loggedInPage }) => {
    const page = loggedInPage;
    const pointPage = new PointPage(page);
    // Navigate to Point Management
    await pointPage.goToPointManagement();
    // Attempt to create user with empty fields
    await pointPage.openCreateUser();
    await pointPage.fillUserForm(userMock.EmptyFields);
    await pointPage.submitUser();
  });

  // Create User Duplicate ID
  test.skip('Create User Duplicate ID', async ({ loggedInPage }) => {
    const page = loggedInPage;
    const pointPage = new PointPage(page);
    // Navigate to Point Management
    await pointPage.goToPointManagement();
    // Create user with valid data
    await pointPage.openCreateUser();
    await pointPage.fillUserForm(userMock.validUser);
    await pointPage.submitUser();
    await pointPage.clickDone();
  });

  // Cancel Create User button
  test('Cancel Create User', async ({ loggedInPage }) => {
    const page = loggedInPage;
    const pointPage = new PointPage(page);
    // Navigate to Point Management
    await pointPage.goToPointManagement();
    // Open Create User form and then cancel
    await pointPage.openCreateUser();
    await pointPage.fillUserForm(userMock.validUser);
    await pointPage.clickCancel();
  });
});