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
    birthday:"15 Jan 1990",
    birthdayLong:"15 January,1990",
    subjects:"Computer Science",     //Subject cant be Playwright Assignment hence it was replaced with Comuputer science
    hobbies:"Reading",
    picture:"Toolsqa.jpg",
    picturePath:"./functions/Toolsqa.jpg",
    address:"Netherlands",
    state:"NCR",
    city:"Delhi",
  }

test('Verify user can submit the form', async ({page}) => {
    await assignParams(params);
    await init(page);
    await demoqa.navigateToDemoqa();
    await demoqa.clickCategoryCardForms();
    await forms.verifyNavigationToFormsPage();
    await forms.clickPracticeForm();
    await forms.verifyNavigationToPracticeFormsPage();
    await forms.fillForm();
    await forms.verifySubmittion();
    await forms.validateForm();
});
