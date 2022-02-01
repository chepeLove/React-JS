import axios from "axios";
import {UserType} from "../Types/types";


export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "ec9391ba-e5e9-485e-89d3-e761bb3874c6"
    }
});


export enum ResultCodesEnum{
    Success = 0,
    Error = 1
}

export enum ResultCodeForCaptchaEnum{
    CaptchaIsRequired = 10
}

export type GetItemsType ={
    items:Array<UserType>
    totalCount:number
    error:string|null
}

export type APIResponseType<D = {}, RC = ResultCodesEnum> = {
    data: D
    messages: Array<string>
    resultCode: RC
}