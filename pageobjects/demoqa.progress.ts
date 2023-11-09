import { checkurl, click, isVisible, textEquals, wait } from "../functions/automation.ts";

export const page = {
    url: "https://demoqa.com/progress-bar",
    title:"Progress Bar",
    header:"div.main-header",
}

export const bar = {
    start: "#startStopButton",
    percentage:"(//div[@id='progressBar']/*[text()[contains(.,'100%')]])",
}

export async function verifyNavigationWidgetsPage(){
    await checkurl(page.url);
    await textEquals(page.header,page.title);
}

export async function startProgressBarAndWait(){
    await click(bar.start);

    while(!await isVisible(bar.percentage)){
     await wait(200);
    }

}