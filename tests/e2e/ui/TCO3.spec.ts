import { test } from "@playwright/test";
import { init, assignParams } from "../../../functions/automation.ts";
import * as demoqa from "../../../pageobjects/demoqa.main.ts";
import * as forms from "../../../pageobjects/demoqa.forms.ts";

export const params = {
    firstName:"Gerimedica",
    lastName:"BV",
    email:"test@test.com",
    gender:"Male",
    mobile:"0123456789",
    birthday:"15th January 1990",
    //Subject cant be Playwright Assignment hence it was replaced with Comuputer science
    subjects:"Computer Science",
    hobbies:"Reading",
    picture:"./functions/Toolsqa.jpg",
    address:"Netherlands",
    stateC:"NCR",
    city:"Delhi",
  }

test.describe('Verify user can submit the form', () => {
  test('Scenario', async ({page}) => {
    await assignParams(params);
    await init(page);
    await demoqa.navigateToDemoqa();
    await demoqa.clickCategoryCardForms();
    await forms.verifyNavigationToFormsPage();
    await forms.clickPracticeForm();
    await forms.verifyNavigationToPracticeFormsPage();
  });
});
