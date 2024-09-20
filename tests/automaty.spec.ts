import {expect, test} from '@playwright/test';
import {Login} from '../page-objects/Login';

test.describe('Automaty', () => {
  test.describe('Login', () => {
    let login: Login;

    test.beforeEach(async ({page}) => {
      login = new Login(page);
      login.goto();
    });

    test('should login with valid credentials', async () => {
      login.signIn('admin', 'admin');

      await expect(login.welcomeHeading).toBeVisible({timeout: 6000});
    });

    test('should not login with invalid credentials', async () => {
      login.signIn('admin', 'admin123');

      await expect(login.alert).toBeVisible();
    });
  });
});
