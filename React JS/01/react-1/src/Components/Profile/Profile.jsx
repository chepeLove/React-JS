import React from 'react'
import MyPosts from "./My Posts/MyPosts";
import ProfileInfo from "./ProfileInformation/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts} addPost={props.addPost}/>
        </div>
    )
}
export default Profile;