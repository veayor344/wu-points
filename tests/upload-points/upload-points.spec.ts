import { test } from '../../fixtures/base-test';
import { BulkUploadPage } from '../../pages/bulk-upload-points/bulk-upload-points-page';
import { bulkUploadMock } from '../../data/user-data';

test('Bulk Upload Points - success flow', async ({ loggedInPage }) => {
  const page = loggedInPage;
  const bulkPage = new BulkUploadPage(page);

  await bulkPage.navigate();

  await bulkPage.selectProgram(bulkUploadMock.program);
  await bulkPage.selectBranch(bulkUploadMock.branch);

  await bulkPage.uploadFile(bulkUploadMock.file);

  await bulkPage.clickUpload();

  await bulkPage.clickCancel();
});