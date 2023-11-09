import { test } from "@playwright/test";
import { init } from "../../../functions/automation.ts";
import * as demoqa from "../../../pageobjects/demoqa.main.ts";
import * as widgets from "../../../pageobjects/demoqa.widgets.ts";
import * as tooltips from "../../../pageobjects/demoqa.tooltips.ts";

test('Verify the tooltip', async ({page}) => {
  await init(page);
  await demoqa.navigateToDemoqa();
  await demoqa.clickCategoryCardWidget();
  await widgets.verifyNavigationWidgetsPage();
  await widgets.clickToolTips();
  await tooltips.hoverOverButton();
});
