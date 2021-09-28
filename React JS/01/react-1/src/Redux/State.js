let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, textPost: 'Hi,how are you?', likesCount: 15},
                {id: 2, textPost: "It's my first post", likesCount: 30},
            ],
            newPostText: 'it-kamasutra'
        },
        dialogsPage: {
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
            ],
        },
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('Change STATE')
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 7,
                textPost: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        }
    }
}

export default store
window.store = store