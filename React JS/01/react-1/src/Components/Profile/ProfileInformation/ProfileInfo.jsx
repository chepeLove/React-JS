import React from 'react'
import style from './ProfileInfo.module.css'
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }
    return (
        <div>
            {/*<div>*/}
            {/*    <img*/}
            {/*        src='https://avatars.mds.yandex.net/get-zen_doc/4700797/pub_60c2f3fe596b103555d3d926_60d0be92b2ba075e65605021/scale_1200'/>*/}
            {/*</div>*/}
            <div className={style.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                <div>{props.profile.lookingForAJobDescription}</div>
            </div>
        </div>
    )
}
export default ProfileInfo;