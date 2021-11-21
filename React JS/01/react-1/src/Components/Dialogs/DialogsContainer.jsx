import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import React from "react";
import withAuthRedirect from "./HOC/withAuthRedirect"


let mapStateToProps = (state) =>{
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.state.isAuth
    }
}

let mapDispatchToProps = (dispatch) =>{
    return {
        updateNewMessageBody: (body)=>{
            dispatch(updateNewMessageBodyActionCreator(body))
        },
        sendMessage: ()=>{
            dispatch(sendMessageActionCreator())
        },
    }
}
let AuthRedirectComponent = withAuthRedirect(Dialogs)


const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(AuthRedirectComponent)

export default DialogsContainer