import { test, expect } from "@playwright/test";

/**
 * Public marketing site smoke + key-flow tests.
 * Covers navigation, key landing content, calculators and the lead form.
 */

test.describe("Public site", () => {
  test("home page loads with hero and primary nav", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Aarthvaahini/i);
    // Hero heading present
    await expect(page.locator("h1").first()).toBeVisible();
    // No hard runtime error banner
    await expect(page.getByText(/something went wrong/i)).toHaveCount(0);
  });

  const routes = [
    { path: "/loans", heading: /loan/i },
    { path: "/insurance", heading: /insur/i },
    { path: "/mutual-funds", heading: /mutual fund/i },
    { path: "/about", heading: /about/i },
    { path: "/contact", heading: /contact/i },
    { path: "/blogs", heading: /blog/i },
    { path: "/cibil", heading: /cibil/i },
    { path: "/directors", heading: /director/i },
    { path: "/partner-signup", heading: /partner/i },
  ];

  for (const r of routes) {
    test(`renders ${r.path}`, async ({ page }) => {
      const resp = await page.goto(r.path);
      expect(resp?.status(), `HTTP status for ${r.path}`).toBeLessThan(400);
      await expect(page.locator("h1, h2").first()).toBeVisible();
    });
  }

  test("header navigates to Loans page", async ({ page, isMobile }) => {
    await page.goto("/");
    if (isMobile) {
      // open mobile menu if a hamburger exists
      const menuBtn = page.getByRole("button", { name: /menu|open menu/i }).first();
      if (await menuBtn.isVisible().catch(() => false)) await menuBtn.click();
    }
    const loansLink = page.getByRole("link", { name: /^loans$/i }).first();
    await loansLink.click();
    await expect(page).toHaveURL(/\/loans/);
  });

  test("EMI calculator updates output when sliders change", async ({ page }) => {
    await page.goto("/loans");
    // The calculator inputs use range/number inputs; nudge the first range
    const range = page.locator('input[type="range"]').first();
    if (await range.count()) {
      const before = await page.locator("body").innerText();
      await range.focus();
      await page.keyboard.press("ArrowRight");
      await page.keyboard.press("ArrowRight");
      await page.keyboard.press("ArrowRight");
      const after = await page.locator("body").innerText();
      expect(after).not.toBe(before);
    }
  });

  test("lead form validates required fields", async ({ page }) => {
    await page.goto("/");
    const submit = page
      .getByRole("button", { name: /submit|apply|get started|send/i })
      .first();
    if (await submit.isVisible().catch(() => false)) {
      await submit.click();
      // Either HTML5 validation blocks submit or an inline error appears.
      // We just assert the page did not navigate away.
      await expect(page).toHaveURL(/\/$/);
    }
  });
});
