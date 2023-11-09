import { test } from "@playwright/test";
import { init } from "../../../functions/automation.ts";
import * as demoqa from "../../../pageobjects/demoqa.main.ts";
import * as widgets from "../../../pageobjects/demoqa.widgets.ts";
import * as progress from "../../../pageobjects/demoqa.progress.ts";

test('Verify the progress bar', async ({page}) => {
  await init(page);
  await demoqa.navigateToDemoqa();
  await demoqa.clickCategoryCardWidget();
  await widgets.verifyNavigationWidgetsPage();
  await widgets.clickProgressBar();
  await progress.verifyNavigationWidgetsPage();
  await progress.startProgressBarAndWait();
});
