import { test, expect } from '@playwright/test';

test('Verify Admin can Add job Title', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Time at Work')).toBeVisible();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Job' }).locator('i').click();
  await page.getByRole('menuitem', { name: 'Job Titles' }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('textbox').nth(1).fill('Quality Test Engineer');
  await page.getByRole('textbox', { name: 'Type description here' }).click();
  await page.getByRole('textbox', { name: 'Type description here' }).fill('Automation Engineer');
  await page.getByRole('textbox', { name: 'Add note' }).click();
  await page.getByRole('textbox', { name: 'Add note' }).fill('DBS QA Technology notes');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList');
  await expect(page.getByRole('heading', { name: 'Job Titles' })).toBeVisible();
});