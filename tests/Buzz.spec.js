import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {test.setTimeout(90000);
    
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Buzz' }).click();
  await page.getByRole('textbox', { name: 'What\'s on your mind?' }).click();
  await page.getByRole('textbox', { name: 'What\'s on your mind?' }).fill('haiiiiiiiii');
  await page.getByRole('button', { name: 'Post', exact: true }).click();
  // await expect(page.getByText('haiiiiiiiii')).toBeVisible();
});














