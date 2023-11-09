import { test } from "@playwright/test";
import { init } from "../../../functions/automation.ts";
import * as demoqa from "../../../pageobjects/demoqa.main.ts";
import * as interactions from "../../../pageobjects/demoqa.interactions.ts";
import * as droppable from "../../../pageobjects/demoqa.droppable.ts";

test('Verify user can drag and drop', async ({page}) => {
  await init(page);
  await demoqa.navigateToDemoqa();
  await demoqa.clickCategoryCarInteractions();
  await interactions.verifyNavigationToInteractionsPage();
  await interactions.clickDroppable();
  await droppable.verifyNavigationToDroppablePage();
  await droppable.dragAndDrop();
});
