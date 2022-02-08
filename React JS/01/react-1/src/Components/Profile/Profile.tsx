import React from 'react'
import ProfileInfo from "./ProfileInformation/ProfileInfo";
import MyPostsContainer from "./My Posts/MyPostsContainer";
import {ProfileType} from "../../Types/types";

type PropsType = {
    profile:ProfileType|null,
    status:string,
    updateStatus:(status:string)=>void,
    isOwner:boolean
    savePhoto:(file:File)=>void
    saveProfile:(profile:ProfileType)=>Promise<any>

}

const Profile:React.FC<PropsType> = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}
                         isOwner={props.isOwner}
                         savePhoto={props.savePhoto}
                         saveProfile={props.saveProfile}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;