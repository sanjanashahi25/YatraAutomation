import { defineConfig, devices } from '@playwright/test';
import 'dotenv/config';



export default defineConfig({
  testDir: './tests',
  timeout: 180000, // Global timeout for each test
  retries: 1,

  use: {
    headless: false,
    navigationTimeout: 60000,
    launchOptions: {
      slowMo: 100,
      args: [
        '--disable-http2',
        '--disable-features=IsolateOrigins,site-per-process',
        '--disable-blink-features=AutomationControlled',
      ],
    },
  },

  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  ],

  reporter: [['list'], ['allure-playwright']],
});
