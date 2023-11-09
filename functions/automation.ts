import { expect, Page } from '@playwright/test';

let page:Page;
export let params:{
    firstName?:string,
    lastName?:string,
    age?:string,
    email?:string,
    salary?:string,
    department?:string,
    firstNameEdited?:string,
    lastNameEdited?:string,
    gender?:string,
    mobile?:string,
    birthday?:string,
    birthdayLong?:string,
    subjects?:string,
    hobbies?:string,
    picture?:string,
    picturePath?:string,
    address?:string,
    state?:string,
    city?:string,
} = {}

export async function init(newPage:Page){
    page = newPage;
}

export async function assignParams(parameters:object){
    params = parameters
}

export async function navigate(url:string){
    await page.goto(url);
}

export async function checktitle(title:string){
    await expect(page).toHaveTitle(title);
}

export async function checkurl(url:string){
    await expect(page).toHaveURL(url);
}

export async function click(locator:string){
    await page.locator(locator).click();
}

export async function wait(time:number){
    await page.waitForTimeout(time)
}

export async function forceClick(locator:string){
    await page.locator(locator).click({ force: true });
}

export async function rightClick(locator:string){
    await page.locator(locator).click({ button: 'right' });
}

export async function eventClick(locator:string){
    await page.locator(locator).dispatchEvent('click');
}

export async function check(locator:string){
    await page.locator(locator).check();
}

export async function isVisible(locator:string){
    return await page.locator(locator).isVisible();
}

export async function hover(locator:string){
    return await page.locator(locator).hover();
}

export async function fill(locator:string, text:string){
    await page.locator(locator).fill(text);

}

export async function upload(locator:string, text:string){
    await page.locator(locator).setInputFiles(text);

}

export async function getRequest(url:string){
    return await page.request.get(url);

}

export async function getAttirbute(locator:string, attribute:string){
    return await page.locator(locator).getAttribute(attribute)

}

export async function textEquals(locator:string, text:string){
    await expect(page.locator(locator)).toHaveText(text);

}

export async function contains(recived:string, expected:string){
    expect(recived).toContain(expected);

}

export async function equal(recived, expected){
    expect(recived).toBe(expected);

}

export async function lessThan(recived, expected){
    expect(recived).toBeLessThan(expected);

}

export async function notEqual(recived, expected){
    expect(recived).not.toBe(expected);

}

export async function getLocatorCount(locator:string){
    return page.locator(locator).count();
}


export async function getText(locator:string, index:number){
    if(index==-1){
        return page.locator(locator).allTextContents();
    }else{
        return page.locator(locator).nth(index).textContent();
    }

}
