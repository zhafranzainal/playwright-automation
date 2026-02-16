// @ts-check
import { defineConfig } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  timeout: 1200 * 1000,
  reporter: 'html',
  use: {
    browserName: 'chromium'
  },

});

