import React from "react";
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";
import {UserType} from "../../Types/types";

type PropsType = {
    currentPage: number,
    onPageChanged: (pageNumber:number) => void,
    totalItemsCount: number,
    pageSize: number,
    users: Array<UserType>,
    followingInProgress:Array<number>,
    unfollow:(userId:number)=>void,
    follow:(userId:number)=>void
}

let Users: React.FC<PropsType> = ({currentPage, onPageChanged, totalItemsCount, pageSize, users, ...props}) => {
    return <div>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                   totalItemsCount={totalItemsCount} pageSize={pageSize}/>
        <div>
            {
                users.map(u => <User key={u.id}
                                     user={u}
                                     followingInProgress={props.followingInProgress}
                                     unfollow={props.unfollow}
                                     follow={props.follow}
                    />
                )
            }
        </div>
    </div>
}

export default Users