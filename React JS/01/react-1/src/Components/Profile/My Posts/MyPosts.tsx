import React from 'react'
import style from './MyPosts.module.css'
import Post from "./Post/Post";
import  {AddPostFormValuesType} from "./AddPostForm";
import AddPostForm from "./AddPostForm";
import {PostType} from "../../../Types/types";

export type MapPropsType = {
    posts:Array<PostType>
}
export type DispatchPropsType = {
    addPost:(newPostText:string)=>void
}
const MyPost:React.FC<MapPropsType&DispatchPropsType> = props => {
    let postsElements = props.posts
        .map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    let addNewPost = (values:AddPostFormValuesType) => {
        props.addPost(values.newPostText)
    }
    return (
        <div className={style.postsBlock}>
            <h3>my posts</h3>
            <AddPostForm onSubmit={addNewPost}/>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    )
}

const MyPostsMemorized = React.memo(MyPost)



export default MyPostsMemorized;