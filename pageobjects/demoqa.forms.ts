import { checkurl, click, fill, params, textEquals } from "../functions/automation.ts";

export const page = {
    url: "https://demoqa.com/forms",
    title:"Forms",
    header:"div.main-header",
}

export const sidebar = {
    practiceForm:"div[class*=show] #item-0",
}

export const register = {
    url: "https://demoqa.com/automation-practice-forms",
    title:"Practice Form",
    firstName:"#firstName",
    lastName:"#lastName",
    email:"#userEmail",
    gender:"(//*[contains(@id,'gender-radio')])",
    mobile:"#userNumber",
    birthday:"#dateOfBirthInput",
    subjects:"#subjectsInput",
    hobbies:"(//*[contains(@id,'hobbies-checkbox')])",
    picture:"#uploadPicture",
    address:"#currentAddress",
    stateCity:"(//*[contains(@id,'react-select')])",
    submit:"#submit",
}

export const form = {
    title:"Thanks for submitting the form",
    header:"div.modal-header",
    name:"(//*[contains(@class,'table-dark')]//td)[2]",
    email:"(//*[contains(@class,'table-dark')]//td)[4]",
    gender:"(//*[contains(@class,'table-dark')]//td)[6]",
    mobile:"(//*[contains(@class,'table-dark')]//td)[8]",
    birthday:"(//*[contains(@class,'table-dark')]//td)[10]",
    subjects:"(//*[contains(@class,'table-dark')]//td)[12]",
    hobbies:"(//*[contains(@class,'table-dark')]//td)[14]",
    picture:"(//*[contains(@class,'table-dark')]//td)[16]",
    address:"(//*[contains(@class,'table-dark')]//td)[18]",
    stateCity:"(//*[contains(@class,'table-dark')]//td)[20]",

}

export async function verifyNavigationToFormsPage(){
    await checkurl(page.url);
    await textEquals(page.header,page.title);
}

export async function clickPracticeForm(){
    await click(sidebar.practiceForm);
}

export async function verifyNavigationToPracticeFormsPage(){
    await checkurl(register.url);
    await textEquals(page.header,register.title);
}

export async function setName(){
    await fill(register.firstName,params.firstName);
    await fill(register.lastName,params.lastName);
}

export async function setEmail(){
    await fill(register.email,params.email);
}

export async function selectGender(){
    switch(params.gender){
        case "Male":
            await click(register.gender + "[" + 1 + "]"); 
            break;
        case "Female":
            await click(register.gender + "[" + 2 +"]");
            break;
        default:
            await click(register.gender + "[" + 3 + "]");
            break;
    }
}

export async function setMobile(){
    await fill(register.mobile,params.mobile);
}

export async function setBirthday(){
    await fill(register.birthday,params.birthday);
}

export async function setSubjects(){
    await fill(register.subjects,params.subjects);
}

export async function selectHobbies(){
    switch(params.hobbies){
        case "Sports":
            await click(register.hobbies + "[" + 1 + "]"); 
            break;
        case "Reading":
            await click(register.hobbies + "[" + 2 +"]");
            break;
        case "Music":
            await click(register.hobbies + "[" + 3 + "]");
            break;
    }
}

export async function setPicture(){
    await fill(register.picture,params.picture);
}

export async function setAddress(){
    await fill(register.address,params.address);
}

export async function setStateCity(){
    await fill(register.stateCity + "[" + 1 + "]",params.state);
    await fill(register.stateCity + "[" + 2 + "]",params.state);
}

export async function fillForm(){
    await setName();
    await setEmail();
    await selectGender();
    await setMobile();
    await setBirthday();
    await setSubjects();

    await click(register.submit);
}