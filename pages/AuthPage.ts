import { Page, expect } from '@playwright/test';

export class AuthPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async closeInitialPopups() {
        // Close welcome or notification popups safely
        try {
            await this.page.getByAltText('cross').first().click({ timeout: 5000 });
        } catch { }
        try {
            const iframe = await this.page
                .frame({ name: /notification-frame/i });
            if (iframe) {
                await iframe.getByRole('button', { name: /close/i }).click();
            }
        } catch { }
    }

    async login(email?: string, password?: string) {
        const user = email || process.env.YATRA_EMAIL!;
        const pass = password || process.env.YATRA_PASSWORD!;

        console.log(`🔐 Logging in with user: ${user}`);

        await this.page.getByText('Login / Signup').click();
        await this.page.getByPlaceholder('Email Id / Mobile Number').fill(user);
        await this.page.getByText('Login', { exact: true }).click();
        await this.page.getByPlaceholder('Enter Password').fill(pass);
        await this.page.getByText('Login', { exact: true }).click();
    }
}
