import React from 'react'
import MyPosts from "./My Posts/MyPosts";
import ProfileInfo from "./ProfileInformation/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     addPost={props.addPost}
                     newPostText={props.profilePage.newPostText}
                updateNewPost = {props.updatePostText}/>
        </div>
    )
}
export default Profile;