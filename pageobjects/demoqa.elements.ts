import { checkurl, click, textEquals } from "../functions/automation.ts";

export const page = {
    url: "https://demoqa.com/elements",
    title:"Elements",
    header:"div.main-header",
}

export const sidebar = {
    textBox:"div[class*=show] #item-0",
    checkBox:"div[class*=show] #item-1",
    radioButton:"div[class*=show #item-2",
    webTables:"div[class*=show] #item-3",
    buttons:"div[class*=show] #item-4",
    links:"div[class*=show] #item-5",
    brokenLinksImages:"div[class*=show] #item-6",
    uploadDownload:"div[class*=show] #item-7",
    dynamicProperties:"div[class*=show] #item-8",
}


export async function verifyNavigationToElementsPage(){
    await checkurl(page.url);
    await textEquals(page.header,page.title);
}

export async function clickWebTables(){
    await click(sidebar.webTables);
}

export async function clickbrokenLinksImages(){
    await click(sidebar.brokenLinksImages);
}