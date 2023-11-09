import { checkurl, textEquals, getRequest, getAttirbute, equal } from "../functions/automation.ts";

export const page = {
    baseUrl: "https://demoqa.com",
    url: "https://demoqa.com/broken",
    title:"Broken Links - Images",
    header:"div.main-header",
    validImage:"(//*[text()[contains(.,'Valid image')]]/following-sibling::img[1])",
    brokenImage:"(//*[text()[contains(.,'Broken image')]]/following-sibling::img)",
    validLink:"(//*[text()[contains(.,'Valid Link')]])",
    brokenLink:"//*[text()[contains(.,'for Broken Link')]]",

}

export async function verifyNavigationBrokenPage(){
    await checkurl(page.url);
    await textEquals(page.header,page.title);
}

export async function verifyBrokenImage(){
    const imgSrc = await getAttirbute(page.validImage,"src");
    const res = await getRequest(page.baseUrl+imgSrc);
    await equal(res.status(),200)

}