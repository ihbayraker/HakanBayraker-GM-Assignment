import { checkurl, click, fill, upload, params, textEquals, getText, contains, eventClick} from "../functions/automation.ts";

export const page = {
    url: "https://demoqa.com/forms",
    title:"Forms",
    header:"div.main-header",
}

export const sidebar = {
    practiceForm:"div[class*=show] #item-0",
}

export const register = {
    url: "https://demoqa.com/automation-practice-form",
    title:"Practice Form",
    firstName:"#firstName",
    lastName:"#lastName",
    email:"#userEmail",
    gender:"(//*[contains(@id,'gender-radio')]/..)",
    mobile:"#userNumber",
    birthday:"#dateOfBirthInput",
    subjects:"#subjectsInput",
    subjectsOption:"#react-select-2-option-0",
    hobbies:"(//*[contains(@id,'hobbies-checkbox')]/..)",
    picture:"#uploadPicture",
    address:"#currentAddress",
    state:"#state",
    stateOption:"(//*[contains(@id,'react-select-3-option')])",
    city:"#city",
    cityOption:"(//*[contains(@id,'react-select-4-option')])",
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
    await click(register.mobile);
}

export async function setSubjects(){
    await fill(register.subjects,params.subjects);
    await click(register.subjectsOption);
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
    await upload(register.picture,params.picturePath);
}

export async function setAddress(){
    await fill(register.address,params.address);
}

export async function setState(){
    await click(register.state);

    switch(params.state){
        case "NCR":
            await click(register.stateOption + "[" + 1 + "]"); 
            break;
        case "Utter Pradesh":
            await click(register.stateOption + "[" + 2 +"]");
            break;
        case "Haryana":
            await click(register.stateOption + "[" + 3 + "]");
            break;
        case "Rajasthan":
            await click(register.stateOption + "[" + 4 + "]");
            break;
    }

    await click(register.address);
}

export async function setCity(){
    await click(register.city);

    switch(params.city){
        case "Delhi":
            await eventClick(register.cityOption + "[" + 1 + "]"); 
            break;
        case "Gurgaon":
            await eventClick(register.cityOption + "[" + 2 +"]");
            break;
        case "Noida":
            await eventClick(register.cityOption + "[" + 3 + "]");
            break;
    }

    await click(register.address);
}

export async function fillForm(){
    await setName();
    await setEmail();
    await selectGender();
    await setMobile();
    await setBirthday();
    await setSubjects();
    await selectHobbies();
    await setPicture();
    await setAddress();
    await setState();
    await setCity();
    await eventClick(register.submit);
}

export async function verifySubmittion(){
    await textEquals(form.header,form.title);
}

export async function validateForm(){
    const  name = await getText(form.name,-1);
    const  email = await getText(form.email,-1);
    const  gender = await getText(form.gender,-1);
    const  mobile = await getText(form.mobile,-1);
    const  birthday = await getText(form.birthday,-1);
    const  subjects = await getText(form.subjects,-1);
    const  hobbies = await getText(form.hobbies,-1);
    const  picture = await getText(form.picture,-1);
    const  address = await getText(form.address,-1);
    const  stateAndCity = await getText(form.stateCity,-1);

    contains(name[0],params.firstName+" "+params.lastName);
    contains(email[0],params.email);
    contains(gender[0],params.gender);
    contains(mobile[0],params.mobile);
    contains(birthday[0],params.birthdayLong);
    contains(subjects[0],params.subjects);
    contains(hobbies[0],params.hobbies);
    contains(picture[0],params.picture);
    contains(address[0],params.address);
    contains(stateAndCity[0],params.state+" "+params.city);
}