import { test} from '../../fixtures/base-test';
import { BulkUserUploadPage } from '../../pages/bulk-upload-users/bulk-user-upload-page';
import { bulkUploadUserMock } from '../../data/user-data';

test.describe('Bulk Upload Users', () => {

  // Bulk Upload Users Valid
  test('Bulk Upload Users Valid Data', async ({ loggedInPage }) => {
    const page = loggedInPage;
    const bulkUserPage = new BulkUserUploadPage(page);
    // Navigate and perform bulk upload
    await bulkUserPage.navigate();
    await bulkUserPage.selectBranch(bulkUploadUserMock.UploadUserValid.branch);
    await bulkUserPage.uploadFile(bulkUploadUserMock.UploadUserValid.file);
    await bulkUserPage.clickUpload();
    await bulkUserPage.clickCancel();
  });

  // Bulk Upload Users Missing Fields
  test('Bulk Upload Users Missing Fields', async ({ loggedInPage }) => {
    const page = loggedInPage;
    const bulkUserPage = new BulkUserUploadPage(page);
    // Navigate and perform bulk upload with missing fields
    await bulkUserPage.navigate();
    await bulkUserPage.selectBranch(bulkUploadUserMock.MissingFieldsUploadUser.branch);
    await bulkUserPage.uploadFile(bulkUploadUserMock.MissingFieldsUploadUser.file);
    // await bulkUserPage.clickUpload();
    // await bulkUserPage.clickCancel();
    });
  
  // Bulk Upload Users Invalid File
  test('Bulk Upload Users Invalid File', async ({ loggedInPage }) => {
    const page = loggedInPage;
    const bulkUserPage = new BulkUserUploadPage(page);
    // Navigate and perform bulk upload with invalid file
    await bulkUserPage.navigate();
    await bulkUserPage.selectBranch(bulkUploadUserMock.InvalidFileUploadUser.branch);
    await bulkUserPage.uploadFile(bulkUploadUserMock.InvalidFileUploadUser.file);
    // await bulkUserPage.clickUpload();
    // await bulkUserPage.clickCancel();
    });

  // Maximum Row Limit Exceeded
  test('Bulk Upload Users Maximum Row Limit Exceeded', async ({ loggedInPage }) => {
    const page = loggedInPage;
    const bulkUserPage = new BulkUserUploadPage(page);
    // Navigate and perform bulk upload with file exceeding maximum row limit
    await bulkUserPage.navigate();
    await bulkUserPage.selectBranch(bulkUploadUserMock.UploadUserExceedsRows.branch);
    await bulkUserPage.uploadFile(bulkUploadUserMock.UploadUserExceedsRows.file);
    // await bulkUserPage.clickUpload();
    // await bulkUserPage.clickCancel();
    });

  //upload user 100 rows
  test('Bulk Upload Users 100 Rows', async ({ loggedInPage }) => {
    const page = loggedInPage;
    const bulkUserPage = new BulkUserUploadPage(page);
    // Navigate and perform bulk upload with 100 rows
    await bulkUserPage.navigate();
    await bulkUserPage.selectBranch(bulkUploadUserMock.UploadUser99Rows.branch);
    await bulkUserPage.uploadFile(bulkUploadUserMock.UploadUser99Rows.file);
    await bulkUserPage.clickUpload();
    await bulkUserPage.clickCancel();
    });

});