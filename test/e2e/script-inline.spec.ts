import { test } from "@playwright/test";
import { verifyTitle } from "./base.spec";

test("Inline Script", async ({ page }) => {
  await page.goto("/");

  await verifyTitle({ page });
});
