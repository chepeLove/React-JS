import {ResultCodeForCaptchaEnum, ResultCodesEnum} from "../API/api";
import {FormAction, stopSubmit} from "redux-form";
import {authAPI} from "../API/auth-api";
import {securityAPI} from "../API/security-api";
import {BaseThunkType, InferActionsTypes} from "./redux-store";
import {Action} from "redux";



let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false as boolean  | null,
    captchaUrl: null as string | null // if null,then captcha is not required
};


const authReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case 'auth/SET_USER_DATA':
        case 'auth/GET_CAPTCHA_URL_SUCCESS':
            return {
                ...state,
                ...action.payload
            }

        default:
            return state;
    }
}


export const actions = {
    setAuthUserData: (userId: number | null, email: string | null, login: string | null, isAuth: boolean | null) => ({
        type: 'auth/SET_USER_DATA', payload:
            {userId, email, login, isAuth}
    }as const),
    getCaptchaUrlSuccess: (captchaUrl:string) => ({
        type: 'auth/GET_CAPTCHA_URL_SUCCESS', payload: {captchaUrl}
    }as const ),

}

export const getAuthUserData = ():ThunkType => async (dispatch) => {
    let meData = await authAPI.me()
    if (meData.resultCode === ResultCodesEnum.Success) {
        let {id, login, email} = meData.data;
        dispatch(actions.setAuthUserData(id, email, login, true));
    }
};


export const login = (email:string, password:string, rememberMe:boolean, captcha:string):ThunkType => async (dispatch) => {
    let loginData = await authAPI.login(email, password, rememberMe, captcha)
    if (loginData.resultCode === ResultCodesEnum.Success) {
        dispatch(getAuthUserData())
    } else {
        if (loginData.resultCode === ResultCodeForCaptchaEnum.CaptchaIsRequired) {
            dispatch(getCaptchaUrl())
        }
        let message = loginData.messages.length > 0 ? loginData.messages[0] : "Some error";
        dispatch(stopSubmit("login", {_error: message}));

    }
};

export const getCaptchaUrl = ():ThunkType => async (dispatch) => {
    const captchaData = await securityAPI.getCaptchaUrl()
    const captchaUrl = captchaData.url
    dispatch(actions.getCaptchaUrlSuccess(captchaUrl));
};

export const logout = ():ThunkType => async (dispatch) => {
    let logoutData = await authAPI.logout()
    if (logoutData.resultCode === ResultCodesEnum.Success) {
        dispatch(actions.setAuthUserData(null, null, null, false));
    }
}

export default authReducer;

export type initialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>