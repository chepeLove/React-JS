import React from 'react'
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {InitialStateType} from "../../Redux/dialogs-reducer";
import AddMessageForm from './AddMessageForm/AddMessageForm';

type OwnPropsType = {
    dialogsPage:InitialStateType
    sendMessage:(messageText:string)=> void
}

export type NewMessageFormValuesType = {
    newMessageBody: string
}


const Dialogs:React.FC<OwnPropsType> = (props) => {

    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key = {d.id} id={d.id}/>)

    let messagesElements = state.messages.map(m => <Message message={m.message} key = {m.id} />)


    let addNewMessage = (values:NewMessageFormValuesType)=>{
        props.sendMessage(values.newMessageBody)
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                <div>{messagesElements}</div>
            <AddMessageForm onSubmit = {addNewMessage}/>
            </div>
        </div>
    )
}

export default Dialogs


