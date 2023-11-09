import { checkurl, click, dragTo, textEquals } from "../functions/automation.ts";

export const page = {
    url: "https://demoqa.com/droppable",
    title:"Droppable",
    header:"div.main-header",
}

export const drop = {
    simple: "#roppableExample-tab-simple",
    simpleDraggable:"#draggable",
    simpleDroppable:"(//div[@id='droppable'])[1]",
    simpleDropped:"(//div[@id='droppable']/*[text()[contains(.,'Dropped!')]])",
    droppedText:"Dropped!",
    accept:"#droppableExample-tab-accept",
    noPropagation:"#droppableExample-tab-preventPropogation",
    revertable:"#droppableExample-tab-revertable",
}


export async function verifyNavigationToDroppablePage(){
    await checkurl(page.url);
    await textEquals(page.header,page.title);
}

export async function dragAndDrop(){
    await dragTo(drop.simpleDraggable,drop.simpleDroppable)
    await textEquals(drop.simpleDropped,drop.droppedText);
}