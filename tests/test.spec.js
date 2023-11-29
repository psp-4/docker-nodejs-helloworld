// @ts-check
import { test, expect } from '@playwright/test';

test('API-Testing', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    const greeting = await page.innerText('body');
    expect(greeting).toEqual('Hello World');
});
