import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";

let DialogsContainer = (props) =>{

    let state = props.store.getState().dialogsPage

    let onSendMessageClick = ()=>  {
        props.store.dispatch(sendMessageActionCreator())
    }

    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyActionCreator(body))
    }
    return (
        <Dialogs sendMessage = {onSendMessageClick}
                 updateNewMessageBody = {onNewMessageChange}
                 dialogsPage = {state} />
    )
}

export default DialogsContainer