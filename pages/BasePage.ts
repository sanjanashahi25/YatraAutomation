import { Page, expect } from '@playwright/test';

export class BasePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    /**
     * Navigate to a given URL and wait until page load is complete
     */
    async goto(url: string, options = { waitUntil: 'domcontentloaded' }) {
        console.log(`🌍 Navigating to: ${url}`);
        await this.page.goto(url, options);
        await this.page.waitForLoadState('domcontentloaded');
        console.log('🟢 Page loaded successfully');
    }

    /**
     * Wait for specific seconds
     */
    async wait(seconds: number) {
        console.log(`⏳ Waiting for ${seconds} second(s)...`);
        await this.page.waitForTimeout(seconds * 1000);
    }

    /**
     * Wait for an element to be visible
     */
    async waitForVisibility(selector: string, timeout = 15000) {
        console.log(`👀 Waiting for element: ${selector}`);
        await this.page.locator(selector).waitFor({ state: 'visible', timeout });
    }

    /**
     * Click an element safely (after ensuring visibility)
     */
    async click(selector: string, timeout = 15000) {
        const element = this.page.locator(selector);
        await element.waitFor({ state: 'visible', timeout });
        await element.click();
        console.log(`🖱️ Clicked on element: ${selector}`);
    }

    /**
     * Type text into an input field
     */
    async type(selector: string, text: string, timeout = 15000) {
        const element = this.page.locator(selector);
        await element.waitFor({ state: 'visible', timeout });
        await element.fill(text);
        console.log(`⌨️ Typed "${text}" into ${selector}`);
    }

    /**
     * Close popups, modals, or notification iframes (like Yatra homepage popup)
     */
    async closeInitialPopups() {
        try {
            console.log('🧹 Checking for popups...');

            // Generic popup close button (X icon)
            const closeButton = this.page.locator('img[alt="cross"], [aria-label="Close"], .close');
            if (await closeButton.count()) {
                await closeButton.first().click({ timeout: 5000 }).catch(() => { });
                console.log('🟢 Closed main popup');
            }

            // Handle notification iframe (Yatra specific)
            const iframeLocator = this.page.frameLocator('iframe[name^="notification-frame"]');
            const closeInIframe = iframeLocator.getByRole('button', { name: /close/i });
            if (await closeInIframe.count()) {
                await closeInIframe.first().click().catch(() => { });
                console.log('🟢 Closed iframe notification');
            }
        } catch (err) {
            console.log('⚠️ No popups found or already closed.');
        }
    }

    /**
     * Verify page title contains text
     */
    async verifyTitleContains(text: string) {
        await expect(this.page).toHaveTitle(new RegExp(text, 'i'));
        console.log(`✅ Verified page title contains "${text}"`);
    }

    /**
     * Capture screenshot (useful for Allure reporting)
     */
    async captureScreenshot(name: string) {
        const path = `./screenshots/${name}-${Date.now()}.png`;
        await this.page.screenshot({ path, fullPage: true });
        console.log(`📸 Screenshot saved: ${path}`);
    }
}
