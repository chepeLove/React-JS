import React from 'react'
import style from './Post.module.css'

type PropsType = {
    message:string
    likesCount:number
}

const Post:React.FC<PropsType> = (props)=> {
      return (
            <div className={style.item}>
                <img src="https://png.pngtree.com/png-vector/20200625/ourmid/pngtree-business-person-short-hair-girl-silhouette-avatar-png-image_2266253.jpg"/>
                {props.message}
            <div>
            <span>like</span> {props.likesCount}
            </div>
            </div>
    )
}
export default Post;