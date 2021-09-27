import React from 'react'
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>)

    let messagesElements = props.state.messages
        .map(m => <Message text={m.message} id = {m.id}/>)

    let newElementDialogMessage = React.createRef();

    let addDialogMessage = () =>{
        let message = newElementDialogMessage.current.value
        alert(message)
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
                <textarea ref={newElementDialogMessage}></textarea>
                <button onClick={addDialogMessage}>Add Message</button>
            </div>
        </div>
    )
}

export default Dialogs
