import { expect } from "@playwright/test";
import {deleteRequest, getRequest, postRequest, params} from "../functions/api.ts";

let token:string;
let uid:string
let authorization:any;
let userData:any;
let userJson:any;

const url = {
    user:"https://demoqa.com/Account/v1/User/",
    token:"https://demoqa.com/Account/v1/GenerateToken/",
    books:"https://demoqa.com/BookStore/v1/Books/",
    book:"https://demoqa.com/BookStore/v1/Book/"
}

async function buildToken(){
    authorization = {
        'Authorization': `Bearer ${token}`,  
    }
}

async function buildUserData(){
    userData = {
        userName:params.username,
        password:params.password
    }
}

export async function createUser(){
    buildUserData()

    const response = await postRequest(url.user,userData);
    expect(response.status()).toBe(201);

    const responseJson =  await response.json();
    uid = responseJson.userID;
    console.log("==========User Created=============")
    console.log(responseJson)
}

export async function getUser(){
    buildToken()

    const response = await getRequest(url.user+uid,authorization);
    expect(response.status()).toBe(200);

    userJson = await response.json();
    console.log("==========Current User=============")
    console.log(userJson)
}

export async function addBooks(token:boolean){
    buildToken();
    let response:any;

    const data = {
        userId:uid,
        collectionOfIsbns:[{isbn:params.book1},{isbn:params.book2}]
    }

    if(token){
        response = await postRequest(url.books,data,authorization);
        expect(response.status()).toBe(201);
        console.log("==========Added Books==============")
    }else{
        response = await postRequest(url.books,data);
        expect(response.status()).toBe(401);
        console.log("==========Unauthorized=============")
    }

    const responseJson = await response.json();
    console.log(responseJson)
}


export async function getToken(){
    buildUserData()

    const response = await postRequest(url.token,userData);
    expect(response.status()).toBe(200);

    const responseJson = await response.json();
    token = responseJson.token;
    console.log("==========Token Generated==========")
    console.log(responseJson);
}

export async function deleteUser(){
    buildToken()

    const response = await deleteRequest(url.user+uid,authorization);
    expect(response.status()).toBe(204);
    console.log("==========Deleted User=============")
}

export async function removeBookFromUser(){
    buildToken()
    const data = {
        isbn:params.book1,
        userId:uid,
    }

    const response = await deleteRequest(url.book,authorization,data);
    expect(response.status()).toBe(204);
    console.log("==========Deleted Books============")
}

export async function verifyBooksAreAdded(){
    const parsedJson = JSON.stringify(userJson);
    expect(parsedJson).toContain(params.book1);
    expect(parsedJson).toContain(params.book2);
}

export async function verifyBookIsRemoved(){
    const parsedJson = JSON.stringify(userJson);
    expect(parsedJson).not.toContain(params.book1);
    expect(parsedJson).toContain(params.book2);
}

