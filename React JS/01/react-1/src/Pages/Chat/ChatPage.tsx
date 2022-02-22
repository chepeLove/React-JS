import React, {useEffect, useState} from "react";
import { Button} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {sendMessage, startMessagesListening} from "../../Redux/chat-reducer";
import {AppStateType} from "../../Redux/redux-store";



export type ChatMessageType = {
    message: string,
    photo:  string,
    userId: number,
    userName: string
}


const ChatPage: React.FC = () => {
    return <div>
        <Chat/>
    </div>
}

const Chat: React.FC = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(startMessagesListening())
        return ()=>{
            dispatch(startMessagesListening())
        }
    },[])

    return <div>
        <ChatMessages />
        <AddMessageChatForm/>
    </div>
}

const ChatMessages: React.FC<{}> = ({}) => {
    const messages = useSelector((state:AppStateType) =>state.chat.messages)
    return <div style={{height:'400px',overflowY:'auto'}}>
        {messages.map((message: any,index) => <ChatMessage key={index} message={message}/>)}
    </div>
}

const ChatMessage: React.FC<{message:ChatMessageType}> = ({message}) => {
    return <div>
        <img src={message.photo} style={{width:'40px'}}/><b>{message.userName}</b>
        <br/>
        {message.message}
        <hr/>
    </div>
}

const AddMessageChatForm: React.FC<{}> = ({}) => {
    const [message,setMessage] = useState('')
    const [readyStatus,setReadyStatus] = useState<'pending'|'ready'>('pending')
    const dispatch = useDispatch()

    const sendMessageHandler = ()=>{
        if(!message){
            return
        }
        dispatch(sendMessage(message))
        setMessage('')
    }

    return <div>
        <div><textarea onChange={(e)=>setMessage(e.currentTarget.value)} value={message}></textarea>
        </div>
        <div><Button disabled={false} onClick={sendMessageHandler}>Send</Button>
        </div>
    </div>
}


export default ChatPage