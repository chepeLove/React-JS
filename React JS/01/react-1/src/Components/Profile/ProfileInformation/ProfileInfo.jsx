import React from 'react'
import style from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src='https://avatars.mds.yandex.net/get-zen_doc/4700797/pub_60c2f3fe596b103555d3d926_60d0be92b2ba075e65605021/scale_1200'/>
            </div>
            <div className={style.descriptionBlock}>
                ava+dicription
            </div>
        </div>
    )
}
export default ProfileInfo;