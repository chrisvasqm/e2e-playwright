import {expect, test} from '@playwright/test';
import 'dotenv/config';

test.describe('Automaty', () => {
  test.describe('Login', () => {
    test.beforeEach(async ({page}) => {
      await page.goto(process.env.BASE_URL!);
    });

    test('should login with valid credentials', async ({page}) => {
      await page.getByLabel('Username', {exact: true}).fill('admin');
      await page.getByLabel('Password', {exact: true}).fill('admin');
      await page.getByRole('button', {name: 'Sign In'}).click();

      const heading = page.getByRole('heading', {name: 'Welcome back'});
      await expect(heading).toBeVisible({timeout: 6000});
    });

    test('should not login with invalid credentials', async ({page}) => {
      await page.getByLabel('Username', {exact: true}).fill('admin');
      await page.getByLabel('Password', {exact: true}).fill('admin123');
      await page.getByRole('button', {name: 'Sign In'}).click();

      const alert = page.getByText(/Invalid/i);
      await expect(alert).toBeVisible();
    });
  });
});
