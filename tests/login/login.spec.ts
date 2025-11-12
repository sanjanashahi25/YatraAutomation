import { test, expect } from '@playwright/test';
import { AuthPage } from '../../pages/AuthPage';

test.describe('Yatra Login Flow', () => {

    test('✅ Verify user can log in successfully', async ({ page }) => {
        const authPage = new AuthPage(page);

        await page.goto('https://www.yatra.com/');
        await authPage.closeInitialPopups();
        await authPage.login();

        const accountMenu = page.getByRole('button', { name: /Hi|My Account/i });
        await expect(accountMenu).toBeVisible({ timeout: 15000 });
        console.log('✅ Login verified successfully.');
    });

});
