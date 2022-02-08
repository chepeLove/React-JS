import {InferActionsTypes} from "./redux-store";

type DialogType = {
    id:number,
    name:string
}

type MessagesType = {
    id:number,
    message:string
}

let initialState = {
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your react?'},
        {id: 3, message: 'Yo'},
    ] as Array<MessagesType>,
    dialogs: [
        {id: 1, name: 'Ilya'},
        {id: 2, name: 'Kirill'},
        {id: 3, name: 'Alex'},
        {id: 4, name: 'Dima'},
        {id: 5, name: 'Vika'},
        {id: 6, name: 'Natasha'},
    ] as Array<DialogType>
}



const dialogsReducer = (state = initialState, action:ActionsType):InitialStateType => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-TEXT':
            let body = action.newMessageBody
             return {
                ...state,
                messages: [...state.messages,{id: 4, message: body}],
            }
        default:
            return state
    }
}


export const actions = {
    sendMessage:(newMessageBody:string) => ({
        type: 'UPDATE-NEW-MESSAGE-TEXT',newMessageBody
    }) as const
}

export default dialogsReducer

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>