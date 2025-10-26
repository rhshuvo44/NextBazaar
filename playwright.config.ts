import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './__tests__/e2e',        // matches your current folder
  testMatch: ['**/*.e2e.ts'],
  timeout: 30000,
  use: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
  },
  reporter: [['list'], ['html', { outputFolder: 'playwright-report' }]],
  outputDir: 'test-results',
});
