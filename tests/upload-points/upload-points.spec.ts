import { test } from '../../fixtures/base-test';
import { BulkUploadPage } from '../../pages/bulk-upload-points/bulk-upload-points-page';
import { bulkUploadPointsMock } from '../../data/user-data';

test.describe('Bulk Upload Points', () => {

  // Bulk Upload Points Valid
  test('Bulk Upload Points valid ', async ({ loggedInPage }) => {
    const page = loggedInPage;
    const bulkPage = new BulkUploadPage(page);
    // Navigate and perform bulk upload
    await bulkPage.navigate();
    await bulkPage.selectProgram(bulkUploadPointsMock.ValidUploadPoints.program);
    await bulkPage.selectBranch(bulkUploadPointsMock.ValidUploadPoints.branch);
    await bulkPage.uploadFile(bulkUploadPointsMock.ValidUploadPoints.file);
    await bulkPage.clickUpload();
    await bulkPage.clickCancel();
  });

  // Bulk Upload Points Missing Fields
  test('Bulk Upload Points Missing Fields', async ({ loggedInPage }) => {
    const page = loggedInPage;
    const bulkPage = new BulkUploadPage(page);
    // Navigate and perform bulk upload with missing fields
    await bulkPage.navigate();
    await bulkPage.selectProgram(bulkUploadPointsMock.MissingFieldsUploadPoints.program);
    await bulkPage.selectBranch(bulkUploadPointsMock.MissingFieldsUploadPoints.branch);
    await bulkPage.uploadFile(bulkUploadPointsMock.MissingFieldsUploadPoints.file);
    // await bulkPage.clickUpload();
    // await bulkPage.clickCancel();
    });
  
  // Bulk Upload Points Invalid File
  test('Bulk Upload Points Invalid File', async ({ loggedInPage }) => {
    const page = loggedInPage;
    const bulkPage = new BulkUploadPage(page);
    // Navigate and perform bulk upload with invalid file
    await bulkPage.navigate();
    await bulkPage.selectProgram(bulkUploadPointsMock.InvalidFileUploadPoints.program);
    await bulkPage.selectBranch(bulkUploadPointsMock.InvalidFileUploadPoints.branch);
    await bulkPage.uploadFile(bulkUploadPointsMock.InvalidFileUploadPoints.file);
    // await bulkPage.clickUpload();
    // await bulkPage.clickCancel();
   });

  // maximum row limit exceeded
  test('Bulk Upload Points Maximum Row Limit Exceeded', async ({ loggedInPage }) => {
    const page = loggedInPage;
    const bulkPage = new BulkUploadPage(page);
    // Navigate and perform bulk upload with file exceeding maximum row limit
    await bulkPage.navigate();
    await bulkPage.selectProgram(bulkUploadPointsMock.ValidUploadPoints.program);
    await bulkPage.selectBranch(bulkUploadPointsMock.ValidUploadPoints.branch);
    await bulkPage.uploadFile(bulkUploadPointsMock.MaximumRowLimitExceededPoints.file);
    // await bulkPage.clickUpload();
    // await bulkPage.clickCancel();
  });  

  // upload points 100 rows
  test('Bulk Upload Points 100 Rows', async ({ loggedInPage }) => {
    const page = loggedInPage;
    const bulkPage = new BulkUploadPage(page);
    // Navigate and perform bulk upload with 100 rows
    await bulkPage.navigate();
    await bulkPage.selectProgram(bulkUploadPointsMock.UploadPoints100Rows.program);
    await bulkPage.selectBranch(bulkUploadPointsMock.UploadPoints100Rows.branch);
    await bulkPage.uploadFile(bulkUploadPointsMock.UploadPoints100Rows.file);
    await bulkPage.clickUpload();
    await bulkPage.clickCancel();
  });

});