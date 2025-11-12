import { Page } from '@playwright/test';

export class AuthPage {
    protected readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async dismissPopups(): Promise<void> {
        try {
            const closeBtn = this.page.getByAltText('cross').first();
            if (await closeBtn.count()) {
                await closeBtn.click({ timeout: 3000 }).catch(() => { });
                console.log('Closed main popup');
            }

            const iframe = this.page.frame({ name: /notification-frame/i });
            if (iframe) {
                const iframeClose = (await iframe).getByRole('button', { name: /close/i });
                await iframeClose.click().catch(() => { });
                console.log(' Closed notification iframe');
            }
        } catch {
            console.log(' No popups detected or already dismissed.');
        }
    }

    async login(email?: string, password?: string): Promise<void> {
        const user = email || process.env.YATRA_EMAIL!;
        const pass = password || process.env.YATRA_PASSWORD!;

        console.log(`🔐 Logging in as: ${user}`);

        await this.page.getByText('Login / Signup').click();
        await this.page.getByPlaceholder('Email Id / Mobile Number').fill(user);
        await this.page.getByText('Login', { exact: true }).click();
        await this.page.getByPlaceholder('Enter Password').fill(pass);
        await this.page.getByText('Login', { exact: true }).click();
    }
}
