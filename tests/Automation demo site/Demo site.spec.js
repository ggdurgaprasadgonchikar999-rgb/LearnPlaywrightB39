import { test, expect } from '@playwright/test';
import data from '../../Testdata/demosite.json';


test('Verify register in automation demo site', async ({ page }) => {
  test.setTimeout(90000);

  await page.goto('https://qaplayground.com/demo');
  await expect(page.getByRole('heading', { name: 'QA Demo Apps' })).toBeVisible();
  await expect(page.getByRole('img', { name: 'Automation Testing Practice registration page preview' })).toBeVisible();
  await expect(registrationPage.getByRole('heading', { name: 'Automation Demo Site' })).toBeVisible();
  await registrationPage.getByPlaceholder('First Name').fill(data['First Name']);
  await registrationPage.getByPlaceholder('Last Name').fill(data['Last Name']);
  await registrationPage.locator('textarea').first().fill(data['Address']);
  await registrationPage.locator('input[type="email"]').fill(data['Email']);
  await registrationPage.locator('input[type="tel"]').fill(data['phone number']);
});






