import React from "react";
import {useSelector} from "react-redux";
import {FilterType,} from "../../Redux/users-reducer";
import Preloader from "../Common/Preloader/Preloader";
import {getIsFetching,} from "../../Redux/users-selectors";
import {UserType} from "../../Types/types";
import {Users} from "./Users";


type  UsersPagePropsType = {
    pageTitle: string
}
export const UsersPage:React.FC<UsersPagePropsType> = (props)=>{
    const isFetching = useSelector(getIsFetching)
    return <>
        <h2>{props.pageTitle}</h2>
        {isFetching? <Preloader/>:null}
        <Users/>
    </>
}