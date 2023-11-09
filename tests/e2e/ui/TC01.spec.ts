import { test } from "@playwright/test";
import { init, assignParams } from "../../../functions/automation.ts";
import * as demoqa from "../../../pageobjects/demoqa.main.ts";
import * as elements from "../../../pageobjects/demoqa.elements.ts";
import * as webTables from "../../../pageobjects/demoqa.webtables.ts";

export const params = {
  //Scenario A Parameters
  firstName:"Alden",
  lastName:"Cantrell",
  email:"test@test.com",
  age:"30",
  salary:"12345",
  department:"QA",

  //Scenario B Parameters
  rowToEdit:2,
  firstNameEdited:"Gerimedica",
  lastNameEdited:"BV"
}

test.describe('Verify user can enter new data into the table', () => {
  test.beforeAll(async () => {
    await assignParams(params);
  });

  test.beforeEach(async ({page}) => {
    await init(page);
    await demoqa.navigateToDemoqa();
    await demoqa.clickCategoryCardElements();
    await elements.verifyNavigationToElementsPage();
    await elements.clickWebTables();
    await webTables.verifyNavigationToWebTablesPage();
  });

  test('Scenario A', async () => {
    await webTables.fillWebTableForm();
    await webTables.verifyCreatedEntry();
  });

  test('Scenario B', async () => {
    await webTables.editTableEntry(params.rowToEdit);
    await webTables.verifyEditedEntry(params.rowToEdit);
  });
});
