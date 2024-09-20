import {Page, Locator} from '@playwright/test';
import 'dotenv/config';

export class Login {
  private readonly page: Page;
  private readonly inputUsername: Locator;
  private readonly inputPassword: Locator;
  private readonly buttonSignIn: Locator;
  private readonly headingWelcome: Locator;
  private readonly invalidLoginAlert: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inputUsername = page.getByLabel('Username', {exact: true});
    this.inputPassword = page.getByLabel('Password', {exact: true});
    this.buttonSignIn = page.getByRole('button', {name: 'Sign In'});
    this.headingWelcome = page.getByRole('heading', {name: 'Welcome back'});
    this.invalidLoginAlert = page.getByText(/Invalid/i);
  }

  async goto() {
    await this.page.goto(process.env.BASE_URL!);
  }

  async signIn(username: string, password: string) {
    await this.inputUsername.fill(username);
    await this.inputPassword.fill(password);
    await this.buttonSignIn.click();
  }

  get welcomeHeading() {
    return this.headingWelcome;
  }

  get alert() {
    return this.invalidLoginAlert;
  }
}
