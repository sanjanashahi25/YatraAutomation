import { test as base } from '@playwright/test';
import { AuthPage } from '../pages/AuthPage';
import { BasePage } from '../pages/BasePage';

export const test = base.extend<{
    authPage: AuthPage;
}>({
    authPage: async ({ page }, use) => {
        const baseUrl = process.env.BASE_URL || 'https://www.yatra.com';
        const basePage = new BasePage(page);

        console.log(`🌍 Launching browser and navigating to: ${baseUrl}`);

        try {
            await basePage.goto(baseUrl);
            await basePage.closeInitialPopups();
        } catch (err) {
            console.warn(`⚠️ Failed initial navigation: ${(err as Error).message}`);
        }

        const authPage = new AuthPage(page);
        await use(authPage);
    },
});

export { expect } from '@playwright/test';
