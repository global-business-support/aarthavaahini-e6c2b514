import { defineConfig, devices } from "@playwright/test";

/**
 * Playwright E2E config for Aarthvaahini.
 *
 * Runs against the local Vite dev server on http://localhost:8080.
 * Use BASE_URL env var to point tests at a preview/production URL instead.
 *
 * Usage:
 *   bunx playwright install chromium   # one-time
 *   bunx playwright test               # run all tests
 *   bunx playwright test --ui          # interactive
 *   bunx playwright test tests/e2e/public-site.spec.ts
 */
export default defineConfig({
  testDir: "./tests/e2e",
  timeout: 30_000,
  expect: { timeout: 5_000 },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: [["list"], ["html", { open: "never" }]],
  use: {
    baseURL: process.env.BASE_URL ?? "http://localhost:8080",
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },
  projects: [
    {
      name: "chromium-desktop",
      use: { ...devices["Desktop Chrome"], viewport: { width: 1280, height: 900 } },
    },
    {
      name: "mobile-chrome",
      use: { ...devices["Pixel 7"] },
    },
  ],
  webServer: process.env.BASE_URL
    ? undefined
    : {
        command: "bun run dev",
        url: "http://localhost:8080",
        reuseExistingServer: true,
        timeout: 120_000,
      },
});
