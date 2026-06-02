import { test, expect, type Page } from "@playwright/test";

async function openApp(page: Page) {
  await page.goto("/");
  let startButton = page.getByRole("button", { name: /start new life/i });
  if (!(await startButton.isVisible({ timeout: 5000 }).catch(() => false))) {
    await page.goto("/moneylife-quest/");
    startButton = page.getByRole("button", { name: /start new life/i });
  }
  await expect(startButton).toBeVisible();
  return startButton;
}

test("student can play one turn and reload the save", async ({ page }) => {
  const startButton = await openApp(page);
  await startButton.click();
  await page.getByRole("button", { name: /choose goal/i }).click();
  await page.getByRole("button", { name: /start life/i }).click();
  await expect(page.getByText(/life skills/i)).toBeVisible();
  await page.getByRole("button", { name: /^age up$/i }).click();
  await expect(page.getByRole("dialog", { name: /new event/i })).toBeVisible();
  await expect(page.getByText(/effects revealed after you choose/i).first()).toBeVisible();
  const enabledChoice = page.locator(".choice-card:not([disabled])").first();
  await expect(enabledChoice).toBeVisible();
  await enabledChoice.click();
  await expect(page.getByText(/what i learned/i)).toBeVisible();
  await expect(page.locator('[aria-label="Revealed choice effects"]')).toBeVisible();
  await page.reload();
  await page.getByRole("button", { name: /continue saved life/i }).click();
  await expect(page.getByText(/what i learned/i)).toBeVisible();
});
