import {FormAction} from "redux-form";
import {BaseThunkType, InferActionsTypes} from "./redux-store";
import {Dispatch} from "redux";
import {chatApi, ChatMessageAPIType, StatusType} from "../API/chat-api";
import {v1} from 'uuid'

type ChatMessageType = ChatMessageAPIType & {id:string}

let initialState = {
    messages: [] as ChatMessageType[],
    status:'pending' as StatusType
};


const chatReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case 'MESSAGES_RECEIVED':
            return {
                ...state,
                messages:[...state.messages,...action.payload.messages.map(m=>({...m,id:v1()}))]
                    .filter((m,index,array)=>index>=array.length-100)
            }
        case 'STATUS_CHANGED':
            return {
                ...state,
                status: action.payload.status
            }
        default:
            return state;
    }
}


export const actions = {
   messagesReceived: (messages:ChatMessageAPIType[]) => ({
        type: 'MESSAGES_RECEIVED', payload: {messages}
    }as const),
    statusChanged: (status:StatusType) => ({
        type: 'STATUS_CHANGED', payload: {status}
    }as const)
}

let _newMessageHandler:((message:ChatMessageAPIType[])=> void) |null = null
const newMassageHandlerCreator = (dispatch:Dispatch)=>{
    if(_newMessageHandler === null){
        _newMessageHandler = (message)=>{
            dispatch(actions.messagesReceived(message))
    }
}
    return _newMessageHandler
}

let _statusChangedHandler:((status:StatusType)=> void) |null = null
const statusChangedHandlerCreator = (dispatch:Dispatch)=>{
    if(_statusChangedHandler === null){
        _statusChangedHandler = (status)=>{
            dispatch(actions.statusChanged(status))
        }
    }
    return _statusChangedHandler
}

export const startMessagesListening = ():ThunkType => async (dispatch) => {
  chatApi.start()
    chatApi.subscribe('message-received',newMassageHandlerCreator(dispatch))
    chatApi.subscribe('status-changed',statusChangedHandlerCreator(dispatch))
};

export const stopMessagesListening = ():ThunkType => async (dispatch) => {
    chatApi.unsubscribe('message-received',newMassageHandlerCreator(dispatch))
    chatApi.unsubscribe('status-changed',statusChangedHandlerCreator(dispatch))
    chatApi.stop()
};

export const sendMessage = (message:string):ThunkType => async (dispatch) => {
    chatApi.sendMessageChat(message)
};

export default chatReducer;

export type initialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>