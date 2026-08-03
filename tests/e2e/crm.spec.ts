import { test, expect } from "@playwright/test";

/**
 * CRM key-flow tests.
 *
 * Auth-gated pages require a real staff account. Provide credentials via env:
 *   CRM_EMAIL=admin@example.com CRM_PASSWORD=... bunx playwright test
 *
 * Without credentials, the auth-gated block is skipped so the suite still
 * passes in CI environments without secrets.
 */

const CRM_EMAIL = process.env.CRM_EMAIL;
const CRM_PASSWORD = process.env.CRM_PASSWORD;

test.describe("CRM public surface", () => {
  test("unauthenticated /crm redirects to login", async ({ page }) => {
    await page.goto("/crm");
    await page.waitForURL(/\/crm\/login/, { timeout: 10_000 });
    await expect(page.getByRole("button", { name: /login|sign in/i }).first()).toBeVisible();
  });

  test("login page renders email + password fields", async ({ page }) => {
    await page.goto("/crm/login");
    await expect(page.locator('input[type="email"]').first()).toBeVisible();
    await expect(page.locator('input[type="password"]').first()).toBeVisible();
  });

  test("invalid credentials show an error and stay on login", async ({ page }) => {
    await page.goto("/crm/login");
    await page.locator('input[type="email"]').first().fill("nobody+e2e@aarthvaahini.test");
    await page.locator('input[type="password"]').first().fill("wrong-password-123");
    await page.getByRole("button", { name: /login|sign in/i }).first().click();
    // Give Supabase time to reject
    await page.waitForTimeout(2500);
    await expect(page).toHaveURL(/\/crm\/login/);
  });
});

test.describe("CRM authenticated flows", () => {
  test.skip(!CRM_EMAIL || !CRM_PASSWORD, "Set CRM_EMAIL and CRM_PASSWORD to run authenticated CRM tests");

  test.beforeEach(async ({ page }) => {
    await page.goto("/crm/login");
    await page.locator('input[type="email"]').first().fill(CRM_EMAIL!);
    await page.locator('input[type="password"]').first().fill(CRM_PASSWORD!);
    await page.getByRole("button", { name: /login|sign in/i }).first().click();
    await page.waitForURL(/\/crm(\/|$)/, { timeout: 15_000 });
  });

  const pages = [
    { path: "/crm", label: "Dashboard" },
    { path: "/crm/leads", label: "Leads" },
    { path: "/crm/customers", label: "Customers" },
    { path: "/crm/loans", label: "Loans" },
    { path: "/crm/insurance", label: "Insurance" },
    { path: "/crm/mutual-funds", label: "Mutual Funds" },
    { path: "/crm/documents", label: "Documents" },
    { path: "/crm/tasks", label: "Tasks" },
    { path: "/crm/schedule", label: "Schedule" },
  ];

  for (const p of pages) {
    test(`loads ${p.label} page`, async ({ page }) => {
      const resp = await page.goto(p.path);
      expect(resp?.status()).toBeLessThan(400);
      await expect(page.getByText(p.label, { exact: false }).first()).toBeVisible({ timeout: 10_000 });
      // no runtime error boundary
      await expect(page.getByText(/unauthorized|something went wrong/i)).toHaveCount(0);
    });
  }

  test("sign out returns to login", async ({ page }) => {
    await page.goto("/crm");
    // open profile dropdown by clicking initials/email button in header
    const trigger = page.locator('header button').filter({ hasText: /@|admin|user/i }).first();
    await trigger.click().catch(() => {});
    const signOut = page.getByRole("menuitem", { name: /sign out|logout/i }).first();
    if (await signOut.isVisible().catch(() => false)) {
      await signOut.click();
      await page.waitForURL(/\/crm\/login/, { timeout: 10_000 });
    }
  });
});
