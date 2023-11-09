import { test } from "@playwright/test";
import { init } from "../../../functions/automation.ts";
import * as demoqa from "../../../pageobjects/demoqa.main.ts";
import * as elements from "../../../pageobjects/demoqa.elements.ts";
import * as broken from "../../../pageobjects/demoqa.broken.ts";

test.describe('Verify broken image', () => {
  test('Scenario', async ({page}) => {
    await init(page);
    await demoqa.navigateToDemoqa();
    await demoqa.clickCategoryCardElements();
    await elements.verifyNavigationToElementsPage();
    await elements.clickbrokenLinksImages();
    await broken.verifyNavigationBrokenPage();
    await broken.verifyBrokenImage()
  });
});
