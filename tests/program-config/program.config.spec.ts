import { ProgramConfigPage } from "../../pages/program-config/program-config-page";
import { test } from "../../fixtures/base-test";

test.describe('Program Config Tests', () => {
    // Navigate to Program Config
    test('Navigate to Program Config', async ({ loggedInPage }) => {
        const page = loggedInPage;
        const programConfigPage = new ProgramConfigPage(page);
        // Navigate to Program Config
        await programConfigPage.ProgramConfig();
        await programConfigPage.viewDetails();

        // Actions
        await programConfigPage.changePagination('20');
        //await programConfigPage.changeDropdown('20');
    });
});