import {FormAction} from "redux-form";
import {BaseThunkType, InferActionsTypes} from "./redux-store";
import {Dispatch} from "redux";
import {chatApi, ChatMessageType} from "../API/chat-api";




let initialState = {
    messages: [] as ChatMessageType[]
};


const chatReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case 'MESSAGES_RECEIVED':
            return {
                ...state,
                messages:[...state.messages,...action.payload.messages]
            }

        default:
            return state;
    }
}


export const actions = {
   messagesReceived: (messages:ChatMessageType[]) => ({
        type: 'MESSAGES_RECEIVED', payload:
            {messages}
    }as const)
}

let _newMessageHandler:((message:ChatMessageType[])=> void) |null = null

const newMassageHandlerCreator = (dispatch:Dispatch)=>{
    if(_newMessageHandler === null){
        _newMessageHandler = (message)=>{
            dispatch(actions.messagesReceived(message))
    }
}
    return _newMessageHandler
}
export const startMessagesListening = ():ThunkType => async (dispatch) => {
  chatApi.start()
    chatApi.subscribe(newMassageHandlerCreator(dispatch))
};

export const stopMessagesListening = ():ThunkType => async (dispatch) => {
    chatApi.unsubscribe(newMassageHandlerCreator(dispatch))
    chatApi.stop()
};

export const sendMessage = (message:string):ThunkType => async (dispatch) => {
    chatApi.sendMessageChat(message)
};

export default chatReducer;

export type initialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>