import { checkurl, click, hover, isVisible, textEquals, wait } from "../functions/automation.ts";

export const page = {
    url: "https://demoqa.com/tool-tips",
    title:"Tool Tips",
    header:"div.main-header",
}

export const tips = {
    button: "#toolTipButton",
    buttonHovered:"div.tooltip-inner",
    buttonHoveredText:"You hovered over the Button",
    textField:"#toolTipTextField",
    textOne:"(//*[text()[contains(.,'Contrary')]])",
    textTwo:"(//*[text()[contains(.,'1.10.32')]])",
}

export async function verifyNavigationTooltipsPage(){
    await checkurl(page.url);
    await textEquals(page.header,page.title);
}

export async function hoverOverButton(){
    await hover(tips.button);
    await textEquals(tips.buttonHovered,tips.buttonHoveredText);
}
