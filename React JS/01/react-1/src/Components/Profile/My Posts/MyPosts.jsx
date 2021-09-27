import React from 'react'
import style from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElements = props.posts
        .map(p => <Post text={p.textPost} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value
        alert(text)
    }
    return (
        <div className={style.postsBlock}>
            <h3>my posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts;