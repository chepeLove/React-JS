import {FormAction, stopSubmit} from "redux-form";
import {PhotosType, PostType, ProfileType} from "../Types/types";
import {profileAPI} from "../API/profile-apiI";
import {BaseThunkType, InferActionsTypes} from "./redux-store";

let initialState = {
    posts: [
        {id: 1, message: 'Hi,how are you?', likesCount: 15},
        {id: 2, message: "It's my first post", likesCount: 30},
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status:'',
    newPostText: ''
}


const profileReducer = (state = initialState, action:ActionsTypes):InitialStateType => {
    switch (action.type) {
        case 'ADD_POST': {
            let newPost = {
                id: 3,
                message: action.newPostText,
                likesCount: Math.floor(Math.random()*100)
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        }
        case "SET_STATUS":{
            return {
                ...state,status: action.status
            }
        }
        case 'DELETE_POST':{
            return {
                ...state, posts: state.posts.filter(p => p.id != action.postId)
            }
        }
        case "SAVE_PHOTOS_SUCCESS":{
            return {
                ...state, profile: {...state.profile, photos: action.photos} as ProfileType
            }
        }
        case 'SET_PROFILE':
            return {
                ...state, profile: action.profile
            }
        default:
            return state
    }
}

export const actions = {
    addPostActionCreator:(newPostText:string) => ({type: 'ADD_POST',newPostText}as const),
    setStatus:(status:string) =>({type:'SET_STATUS', status}as const),
    deletePost:(postId:number) =>({type:'DELETE_POST',postId}as const),
    savePhotoSuccess:(photos:PhotosType) =>({type:'SAVE_PHOTOS_SUCCESS',photos}as const),
    setUserProfile:(profile:ProfileType) => ({type: 'SET_PROFILE', profile}as const),
}

export const getUserProfile = (userId:number):ThunkType => async (dispatch) => {
       let data = await profileAPI.getProfile(userId)
            dispatch(actions.setUserProfile(data))
        }


export const getStatus = (userId:number):ThunkType => async (dispatch) => {
    let data = await  profileAPI.getStatus(userId)
        dispatch(actions.setStatus(data))

}

export const updateStatus = (status:string):ThunkType => async (dispatch) => {
    let data = await  profileAPI.updateStatus(status)
        if(data.resultCode===0){
            dispatch(actions.setStatus(status))}
}

export const savePhoto = (file:File):ThunkType => async (dispatch) => {
    let data = await  profileAPI.savePhoto(file)
    if(data.resultCode===0){
        dispatch(actions.savePhotoSuccess(data.data.photos))}
}

export const saveProfile = (profile:ProfileType):ThunkType => async (dispatch,getState) => {
    const userId = getState().auth.userId
    const data = await  profileAPI.saveProfile(profile)
    if(data.resultCode===0){
        if(userId != null){
        dispatch(getUserProfile(userId))
    }else {
        throw new Error(`userId can't be null`)
    }
    }else{
        dispatch(stopSubmit("edit-profile", {_error: data.messages[0]}));
    return Promise.reject(data.messages[0])
    }
}

export default profileReducer

type ActionsTypes = InferActionsTypes<typeof actions>
type InitialStateType = typeof initialState
type ThunkType = BaseThunkType<ActionsTypes | FormAction>