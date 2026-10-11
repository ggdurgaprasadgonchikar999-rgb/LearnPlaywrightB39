import { test, expect } from '@playwright/test';

import logindata from "../Testdata/login.json";

let postdata;
try {
  postdata = require('../Testdata/buzzpost.json');
} catch {
  postdata = { message: 'haiiiiiiiii' };
}

test('test', async ({ page }) => {
  test.setTimeout(90000);

  const buzzMessage = typeof postdata === 'string'
    ? postdata
    : postdata.message || postdata.postText || postdata.text || 'haiiiiiiiii';

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill(logindata.username);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(logindata.password);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Buzz' }).click();
  await page.getByRole('textbox', { name: 'What\'s on your mind?' }).click();
  await page.getByRole('textbox', { name: 'What\'s on your mind?' }).fill(buzzMessage);
  await page.getByRole('button', { name: 'Post', exact: true }).click();
  // await expect(page.getByText(buzzMessage)).toBeVisible();
});














