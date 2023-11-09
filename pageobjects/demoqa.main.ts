import { navigate, checktitle, click } from "../functions/automation.ts";

export const page = {
    url: "https://demoqa.com/",
    title:"DEMOQA",
    categoryCardElements: "div.category-cards > div:nth-child(1)",
    categoryCardForms: "div.category-cards > div:nth-child(2)",
    categoryCardAlertsFrameWindows: "div.category-cards > div:nth-child(3)",
    categoryCardWidgets: "div.category-cards > div:nth-child(4)",
    categoryCardInteractions: "div.category-cards > div:nth-child(5)",
    categoryCardBookStoreApplication: "div.category-cards > div:nth-child(6)",
}

export async function navigateToDemoqa(){
    await navigate(page.url);
    await checktitle(page.title);
}

export async function clickCategoryCardElements(){
    await click(page.categoryCardElements);
}

export async function clickCategoryCardForms(){
    await click(page.categoryCardForms);
}

export async function clickCategoryCardWidget(){
    await click(page.categoryCardWidgets);
}

export async function clickCategoryCarInteractions(){
    await click(page.categoryCardInteractions);
}