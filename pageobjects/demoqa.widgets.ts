import { checkurl, click, textEquals } from "../functions/automation.ts";

export const page = {
    url: "https://demoqa.com/widgets",
    title:"Widgets",
    header:"div.main-header",
}

export const sidebar = {
    accordian:"div[class*=show] #item-0",
    autoComplete:"div[class*=show] #item-1",
    datePicker:"div[class*=show #item-2",
    slider:"div[class*=show] #item-3",
    progressBar:"div[class*=show] #item-4",
    tabs:"div[class*=show] #item-5",
    toolTips:"div[class*=show] #item-6",
    menu:"div[class*=show] #item-7",
    selectMenu:"div[class*=show] #item-8",
}

export async function verifyNavigationWidgetsPage(){
    await checkurl(page.url);
    await textEquals(page.header,page.title);
}

export async function clickProgressBar(){
    await click(sidebar.progressBar);
}

export async function clickToolTips(){
    await click(sidebar.toolTips);
}