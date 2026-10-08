
import { test, expect } from '@playwright/test';
import data from '../Testdata/demoqa.json';

test('Verify Text box Functionality', async ({ page }) => {
    test.setTimeout(90000);


await page.goto('https://demoqa.com/text-box');
await page.getByRole('textbox', { name: 'Full Name' }).fill(data['Full name']);
await page.getByRole('textbox', { name: 'name@example.com' }).fill(data.Email);
await page.getByRole('textbox', { name: 'Current Address' }).fill(data['Current Address']);
await page.locator('#permanentAddress').fill(data['Permanent Address']);
await page.getByRole('button', { name: 'Submit' }).click();

await expect(page.getByText('Name:Naveen', { exact: true })).toBeVisible();
await expect(page.getByText('Email:Naveen123456@gmai.com', { exact: true })).toBeVisible();
await expect(page.getByText('Current Address :123 Main Street', { exact: true })).toBeVisible();
await expect(page.getByText('Permananet Address :456 Elm Street', { exact: true })).toBeVisible();




});