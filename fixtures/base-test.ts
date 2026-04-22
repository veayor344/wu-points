import { test as base,Page } from '@playwright/test';
import { LoginPage } from '../pages/auth/login.page';

type Fixtures = {
  loggedInPage: Page;
};

export const test = base.extend<Fixtures>({
  loggedInPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('veayor.lim@cab.com.kh', 'Cab@123456789');

    await use(page); //pass logged-in page
  },
});

export { expect } from '@playwright/test';