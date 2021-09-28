import {rerenderAllTree} from "../Render";

let state = {
    profilePage: {
        posts: [
            {id: 1, textPost: 'Hi,how are you?', likesCount: 15},
            {id: 2, textPost: "It's my first post", likesCount: 30},
        ],
        newPostText: 'it-kamasutra'
    },
    dialogsPage:{
        messages:[
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
}

  export  let addPost = () =>{
    let newPost = {
        id: 7,
        textPost: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
      state.profilePage.newPostText=''
      rerenderAllTree(state)
}

export  let updateNewPostText = (newText) =>{
    state.profilePage.newPostText = newText
    rerenderAllTree(state)
}

export default state