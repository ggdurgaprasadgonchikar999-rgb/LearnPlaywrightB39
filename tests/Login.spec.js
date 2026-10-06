import { test, expect } from '@playwright/test';

test('Verify login with valid Credentials', async ({ page }) => {
  test.setTimeout(60000);
  
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Time at Work')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
});


test('Verify login Valid Username and invalid password', async ({ page }) => {
  // Increase test timeout to 60s for the slow demo server
  test.setTimeout(60000);

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('fgdrergergtertret');

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.getByText('Invalid credentials')).toBeVisible();
});

test('Verify login with invalid username and valid password', async ({ page }) => { test.setTimeout(60000);

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('ggigiygiygi');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Invalid credentials')).toBeVisible();
  await page.getByText('Invalid credentials').dblclick();
});


test('verify login with invalid username and invalid password', async ({ page }) => { test.setTimeout(60000);

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('sdfgewrgerwgterwgterg');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('eryerhershtrhrthrth');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Invalid credentials')).toBeVisible();
  await page.getByText('Invalid credentials').dblclick();
});


test('Verify login with Blank fields', async ({ page }) => { test.setTimeout(60000);
    
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Required').first()).toBeVisible();
  await expect(page.getByText('Required').nth(1)).toBeVisible();
  await page.getByText('Required').nth(1).dblclick();
});


