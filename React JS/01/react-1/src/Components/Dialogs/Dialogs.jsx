import React from 'react'
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../Redux/State";

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)

    let messagesElements = state.messages.map(m => <Message text={m.message} id={m.id}/>)

    let newMessageBody = state.newMessageBody

    let onSendMessageClick = ()=> {
        props.store.dispatch(sendMessageActionCreator())
    }

    let onNewMessageChange = (event) => {
    let body = event.target.value
        props.store.dispatch(updateNewMessageBodyActionCreator(body))
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder='Enter your message'></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs
