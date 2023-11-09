import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './tests/e2e',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },
  reporter: 'html',
  use: {
    viewport: null,
    browserName:'chromium',
    headless: false,
    screenshot: "only-on-failure",
    launchOptions: {
      args: ["--start-maximized"],
    },
  },
};

export default config;
