import {deleteRequest, getRequest, postRequest, params} from "../functions/api.ts";
import { expect } from "@playwright/test";

let token:string;
let uid:string

const url = {
    user:"https://demoqa.com/Account/v1/User/",
    token:"https://demoqa.com/Account/v1/GenerateToken/",
}

export async function createUser(){
    const data = {
        userName:params.username,
        password:params.password
    }

    const response = await postRequest(url.user,data);
    expect(response.status()).toBe(201);

    const responseJson =  await response.json();
    uid = responseJson.userID;

    console.log(responseJson)
}

export async function getToken(){
    const data = {
        userName:params.username,
        password:params.password
    }

    const response = await postRequest(url.token,data);
    expect(response.status()).toBe(200);

    const responseJson =  await response.json();
    token = responseJson.token;

    console.log(responseJson)   
}

export async function deleteUser(){
    const authorization = {
        Authorization:"bearer " + token
    }
    const response = await deleteRequest(url.user+uid,authorization);
    expect(response.status()).toBe(204);
}

