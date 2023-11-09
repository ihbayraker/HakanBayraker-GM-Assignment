import {APIRequestContext} from '@playwright/test';

let api: APIRequestContext;

export let params:{
    username?:string,
    password?:string,
}

export async function assignParams(parameters:object){
    params = parameters
}

export async function init(request:APIRequestContext){
    api = request
}

export async function getRequest(url:string,authorization?:any){
    return await api.get(url,{headers:authorization});
}

export async function deleteRequest(url:string,authorization?:any){
    return await api.delete(url,{headers:authorization});
}

export async function postRequest(url:string,body:any,authorization?:any){
    return await api.post(url,{data:body,headers:authorization});
}