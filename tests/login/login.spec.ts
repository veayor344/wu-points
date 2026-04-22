import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/auth/login.page';

test('Login successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('veayor.lim@cab.com.kh', 'Cab@123456789');

  await expect(page).not.toHaveURL(/login/);
});