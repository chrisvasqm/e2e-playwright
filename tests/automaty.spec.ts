import {test, expect} from '@playwright/test';

test.describe('Automaty', () => {
  test.describe('Login', () => {
    test('should login with valid credentials', async ({page}) => {
      await page.goto('https://automaty-gd3cb.ondigitalocean.app/');

      await page.getByLabel('Username', {exact: true}).fill('admin');
      await page.getByLabel('Password', {exact: true}).fill('admin');
      await page.getByRole('button', {name: 'Sign In'}).click();

      const welcomeHeading = page.getByRole('heading', {name: 'Welcome back'});
      await expect(welcomeHeading).toBeVisible({timeout: 6000});
    });
  });
});
