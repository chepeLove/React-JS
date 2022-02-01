import profileReducer, {actions} from "./profile-reducer";
import React from "react";
import {PostType, ProfileType} from "../Types/types";

let state = {
    posts: [
        {id: 1, message: 'Hi,how are you?', likesCount: 15},
        {id: 2, message: "It's my first post", likesCount: 30},
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status:'',
    newPostText: ''
}

it('length of post should be incremented', ()=>{
    // 1. test data
    let action = actions.addPostActionCreator('NEW POST TEST')
    // 2. action
    let newState = profileReducer(state,action)

    // 3. expectation

    expect(newState.posts.length).toBe(3)
    expect(newState.posts[2].message).toBe('NEW POST TEST')

})

it('message of new post should be NEW POST TEST', ()=>{
    // 1. test data
    let action = actions.addPostActionCreator('NEW POST TEST')
    // 2. action
    let newState = profileReducer(state,action)

    // 3. expectation

    expect(newState.posts[2].message).toBe('NEW POST TEST')

})


it('after deleting length of messages should be decrement', ()=>{
    // 1. test data
    let action = actions.deletePost(1)
    // 2. action
    let newState = profileReducer(state,action)

    // 3. expectation

    expect(newState.posts.length).toBe(1)

})


it('after deleting length should be decrement if id is incorrect', ()=>{
    // 1. test data
    let action = actions.deletePost(1000)
    // 2. action
    let newState = profileReducer(state,action)

    // 3. expectation

    expect(newState.posts.length).toBe(2)

})