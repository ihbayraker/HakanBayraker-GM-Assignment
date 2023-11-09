import { checkurl, click, textEquals } from "../functions/automation.ts";

export const page = {
    url: "https://demoqa.com/interaction",
    title:"Interactions",
    header:"div.main-header",
}

export const sidebar = {
    sortable:"div[class*=show] #item-0",
    selectable:"div[class*=show] #item-1",
    resizable:"div[class*=show #item-2",
    droppable:"div[class*=show] #item-3",
    dragabble:"div[class*=show] #item-4",
}

export async function verifyNavigationToInteractionsPage(){
    await checkurl(page.url);
    await textEquals(page.header,page.title);
}

export async function clickDroppable(){
    await click(sidebar.droppable);
}