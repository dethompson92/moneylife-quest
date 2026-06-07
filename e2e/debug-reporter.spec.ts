import { expect, test } from "@playwright/test";

test("bug reporter saves locally without opening an external issue page", async ({ page, context }) => {
  await page.addInitScript(() => {
    localStorage.clear();
    sessionStorage.clear();
  });

  await page.goto("/?seed=debug-reporter&mode=quick&topic=all");
  await page.getByRole("button", { name: /report a bug or issue/i }).click();

  const saveButton = page.getByRole("button", { name: /submit issue/i });
  await expect(saveButton).toBeDisabled();

  await page.getByLabel(/what happened/i).fill("The activity button did not open.");

  const popupPromise = page.waitForEvent("popup", { timeout: 1000 }).catch(() => null);
  await saveButton.click();

  await expect(page.getByText(/saved on this browser's game debug log/i)).toBeVisible();
  expect(await popupPromise).toBeNull();
  expect(context.pages()).toHaveLength(1);

  const reports = await page.evaluate(() => JSON.parse(localStorage.getItem("moneylife.debugReports.v1") ?? "[]"));
  expect(reports).toHaveLength(1);
  expect(reports[0].description).toContain("activity button");
});
