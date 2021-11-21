import {authAPI} from "../API/api";

const SET_USERS_DATA = 'SET_USER_DATA'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
}

const authReducer = (state=initialState,action) =>{
    switch (action.type){
        case SET_USERS_DATA:
            return {
                ...state,
                ...action.data,
                isAuth:true
            }
        default:
           return {
               state
           }
    }
}

export const getAuthUserData = () =>{
    return (dispatch)=>{
        authAPI.me().then(response => {
                if(response.data.resultCode === 0){
                    let {id,email,login} = response.data.data
                    dispatch(setAuthUserData(id,email,login))
                }
            })

    }
}

export const setAuthUserData = ( userId, email,login ) => ({type:SET_USERS_DATA,data:{userId, email,login}})

export default authReducer