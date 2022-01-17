
const SEND_MESSAGE = 'UPDATE-NEW-MESSAGE-TEXT'

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

export type initialStateType = typeof initialState

const dialogsReducer = (state = initialState, action:any):initialStateType => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody
             return {
                ...state,
                messages: [...state.messages,{id: 4, message: body}],
            }
        default:
            return state
    }
}

type sendMessageActionType = {
    type: typeof SEND_MESSAGE,
    newMessageBody:string
}

export const sendMessageActionCreator = (newMessageBody:string):sendMessageActionType => ({
    type: SEND_MESSAGE,newMessageBody
})


export default dialogsReducer
