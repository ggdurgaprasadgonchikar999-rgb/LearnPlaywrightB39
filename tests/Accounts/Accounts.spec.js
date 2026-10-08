import { test, expect } from '@playwright/test';
import data from '../../Testdata/Bank secure.json';



test('Verify Verify Accounts List Load', async ({ page }) => {
    
await page.goto('https://qaplayground.com/bank/login');
await page.getByRole('textbox', { name: 'Username' }).fill(data['User name']);
await page.getByRole('textbox', { name: 'Password' }).fill(data.Password);
await page.getByRole('button', { name: /sign in/i }).click();
await expect(page).toHaveURL(/\/bank\/dashboard$/);
const accountsLink = page.getByTestId('sidebar-link-accounts');
await expect(accountsLink).toBeVisible();
await accountsLink.click();
await expect(page).toHaveURL(/\/bank\/accounts$/);

});

