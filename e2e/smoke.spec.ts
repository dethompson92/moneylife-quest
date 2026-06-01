import { test, expect } from "@playwright/test";

test("student can play one turn and reload the save", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: /start new life/i }).click();
  await page.getByRole("button", { name: /choose goal/i }).click();
  await page.getByRole("button", { name: /start life/i }).click();
  await expect(page.getByText(/life skills/i)).toBeVisible();
  await page.getByRole("button", { name: /^age up$/i }).click();
  await expect(page.getByRole("dialog", { name: /new event/i })).toBeVisible();
  await page.locator(".choice-card").first().click();
  await expect(page.getByText(/what i learned/i)).toBeVisible();
  await page.reload();
  await page.getByRole("button", { name: /continue saved life/i }).click();
  await expect(page.getByText(/what i learned/i)).toBeVisible();
});
