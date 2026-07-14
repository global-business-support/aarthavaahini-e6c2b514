# E2E Tests (Playwright)

Automated end-to-end tests for the public marketing site and the CRM.

## Setup

```bash
bun install
bunx playwright install chromium
```

## Run

```bash
# All tests (starts vite dev server automatically on :8080)
bunx playwright test

# Only desktop / only mobile project
bunx playwright test --project=chromium-desktop
bunx playwright test --project=mobile-chrome

# Interactive UI mode
bunx playwright test --ui

# Against a deployed environment
BASE_URL=https://aarthvaahini.lovable.app bunx playwright test

# Include authenticated CRM flows (otherwise they are skipped)
CRM_EMAIL=you@example.com CRM_PASSWORD=... bunx playwright test
```

HTML report is written to `playwright-report/`. Open with:

```bash
bunx playwright show-report
```

## Files

- `playwright.config.ts` – projects (desktop + mobile Pixel 7), baseURL, dev-server wiring.
- `tests/e2e/public-site.spec.ts` – landing, key routes, header nav, EMI calculator, lead form validation.
- `tests/e2e/crm.spec.ts` – login redirect, invalid creds; authenticated smoke across Dashboard/Leads/Customers/Loans/Insurance/MF/Documents/Tasks/Schedule; sign-out.
