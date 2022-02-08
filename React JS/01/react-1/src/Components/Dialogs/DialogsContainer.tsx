import {actions} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import React, {ComponentType} from "react";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";
import {AppStateType} from "../../Redux/redux-store";



let mapStateToProps = (state:AppStateType) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

export default compose<ComponentType>(
    connect(mapStateToProps,{...actions}
    ),
    withAuthRedirect
)(Dialogs)