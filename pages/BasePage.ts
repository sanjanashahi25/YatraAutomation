import { Page, expect } from '@playwright/test';

export class BasePage {
    protected readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateTo(url: string, waitUntil: 'load' | 'domcontentloaded' | 'networkidle' = 'domcontentloaded'): Promise<void> {
        console.log(` Navigating to → ${url}`);
        await this.page.goto(url, { waitUntil });
        await this.page.waitForLoadState(waitUntil);
        console.log(` Navigation complete: ${url}`);
    }

    async waitFor(seconds: number): Promise<void> {
        console.log(` Waiting for ${seconds}s...`);
        await this.page.waitForTimeout(seconds * 1000);
    }

    async waitForElementVisible(selector: string, timeout = 15000): Promise<void> {
        console.log(` Waiting for visibility of element: ${selector}`);
        await this.page.locator(selector).waitFor({ state: 'visible', timeout });
    }

    async clickElement(selector: string, timeout = 15000): Promise<void> {
        const element = this.page.locator(selector);
        await element.waitFor({ state: 'visible', timeout });
        await element.click();
        console.log(` Clicked → ${selector}`);
    }

    async enterText(selector: string, text: string, timeout = 15000): Promise<void> {
        const element = this.page.locator(selector);
        await element.waitFor({ state: 'visible', timeout });
        await element.fill(text);
        console.log(`Entered text "${text}" into → ${selector}`);
    }

    async dismissPopups(): Promise<void> {
        console.log('🧹 Checking for potential popups or notifications...');
        try {
            const closeButton = this.page.locator('img[alt="cross"], [aria-label="Close"], .close');
            if (await closeButton.count()) {
                await closeButton.first().click({ timeout: 3000 }).catch(() => { });
                console.log(' Closed main popup');
            }

            const iframe = this.page.frameLocator('iframe[name^="notification-frame"]');
            const iframeCloseButton = iframe.getByRole('button', { name: /close/i });
            if (await iframeCloseButton.count()) {
                await iframeCloseButton.first().click().catch(() => { });
                console.log('Closed notification iframe');
            }
        } catch {
            console.log('⚠️ No active popups detected or already dismissed.');
        }
    }

    async verifyPageTitle(expectedText: string): Promise<void> {
        await expect(this.page).toHaveTitle(new RegExp(expectedText, 'i'));
        console.log(` Title verified: contains "${expectedText}"`);
    }

    async takeScreenshot(name: string): Promise<void> {
        const filePath = `screenshots/${name}-${Date.now()}.png`;
        await this.page.screenshot({ path: filePath, fullPage: true });
        console.log(`Screenshot captured: ${filePath}`);
    }
}
