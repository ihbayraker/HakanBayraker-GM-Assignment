import { checkurl, click, textEquals, fill, getText, contains, params, getLocatorCount } from "../functions/automation.ts";

export const page = {
    url: "https://demoqa.com/webtables",
    title:"Web Tables",
    header:"div.main-header",
}

export const table = {
    add:"#addNewRecordButton",
    searchBox:"#searchBox",
    searchBoxButton:"#basic-addon2",
    firstName:"(//div[@class='rt-tr-group']/div/div[text()[contains(.,'')]][1])",
    lastName:"(//div[@class='rt-tr-group']/div/div[text()[contains(.,'')]][2])",
    age:"(//div[@class='rt-tr-group']/div/div[text()[contains(.,'')]][3])",
    email:"(//div[@class='rt-tr-group']/div/div[text()[contains(.,'')]][4])",
    salary:"(//div[@class='rt-tr-group']/div/div[text()[contains(.,'')]][5])",
    department:"(//div[@class='rt-tr-group']/div/div[text()[contains(.,'')]][6])",
    edit:"(//span[@title='Edit'])",
    delete:"(//span[@title='Delete'])",
}

export const form = {
    title:"Registration Form",
    header:"div[class='modal-title h4']",
    firstName:"#firstName",
    lastName:"#lastName",
    email:"#userEmail",
    age:"#age",
    salary:"#salary",
    department:"#department",
    submit:"#submit",
}

export async function verifyNavigationToWebTablesPage(){
    await checkurl(page.url);
    await textEquals(page.header,page.title);
}

export async function fillWebTableForm(){
    await click(table.add)
    await textEquals(form.header,form.title)

    await fill(form.firstName,params.firstName);
    await fill(form.lastName,params.lastName);
    await fill(form.age,params.age);
    await fill(form.email,params.email);
    await fill(form.salary,params.salary);
    await fill(form.department,params.department);
    await click(form.submit);
}

export async function verifyCreatedEntry(){
    const count = await getLocatorCount(table.firstName)-1;

    const  firstName = await getText(table.firstName,-1);
    const  lastName = await getText(table.lastName,-1);
    const  age = await getText(table.age,-1);
    const  email = await getText(table.email,-1);
    const  salary = await getText(table.salary,-1);
    const  department = await getText(table.department,-1);

    contains(firstName[count],params.firstName)
    contains(lastName[count],params.lastName)
    contains(age[count],params.age)
    contains(email[count],params.email)
    contains(salary[count],params.salary)
    contains(department[count],params.department)
}

export async function editTableEntry(row:number){
    await click(table.edit +"["+ row +"]")
    await textEquals(form.header,form.title)

    await fill(form.firstName,params.firstNameEdited);
    await fill(form.lastName,params.lastNameEdited);
    await click(form.submit);
}

export async function verifyEditedEntry(row:number){
    const  firstName = await getText(table.firstName,-1);
    const  lastName = await getText(table.lastName,-1);

    contains(firstName[row-1],params.firstNameEdited);
    contains(lastName[row-1],params.lastNameEdited);
}