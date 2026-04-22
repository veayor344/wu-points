import { Page, expect } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://rmb-portal-uat-nu.vercel.app/login');
  }

  async login(email: string, password: string) {
    const emailInput = this.page.getByRole('textbox', { name: 'Email' });
    const passwordInput = this.page.getByRole('textbox', { name: 'Password' });
    const loginButton = this.page.getByTestId('button-login');

    await expect(emailInput).toBeVisible();

    await emailInput.fill(email);
    await passwordInput.fill(password);
    await loginButton.click();
  }
}