import { test, expect } from '../../fixtures/base-test';
import { BulkUserUploadPage } from '../../pages/bulk-upload-users/bulk-user-upload-page';
import { bulkUserMock } from '../../data/user-data';

test('Bulk Upload Users - success flow', async ({ loggedInPage }) => {
  const page = loggedInPage;
  const bulkUserPage = new BulkUserUploadPage(page);

  await bulkUserPage.navigate();

  await bulkUserPage.selectBranch(bulkUserMock.branch);

  await bulkUserPage.uploadFile(bulkUserMock.file);

  await bulkUserPage.clickUpload();

  // await expect(page.locator('text=Upload Successful')).toBeVisible();

  await bulkUserPage.clickCancel();
});