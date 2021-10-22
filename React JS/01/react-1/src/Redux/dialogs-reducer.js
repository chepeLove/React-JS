const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'UPDATE-NEW-MESSAGE-TEXT'

let initialState = {
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your react?'},
        {id: 3, message: 'Yo'},
    ],
    dialogs: [
        {id: 1, name: 'Ylya'},
        {id: 2, name: 'Kirill'},
        {id: 3, name: 'Alex'},
        {id: 4, name: 'Dima'},
        {id: 5, name: 'Vika'},
        {id: 6, name: 'Natasha'},
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
             return {
                ...state,
                newMessageBody: action.body
            }
        case SEND_MESSAGE:
            let body = state.newMessageBody
             return {
                ...state,
                 newMessageBody: '',
                messages: [...state.messages,{id: 4, message: body}],
            }
        default:
            return state
    }
}

export const sendMessageActionCreator = () => ({
    type: SEND_MESSAGE
})

export const updateNewMessageBodyActionCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
})

export default dialogsReducer
