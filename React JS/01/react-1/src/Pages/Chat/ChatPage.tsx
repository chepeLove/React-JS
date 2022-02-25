import React, {useEffect, useRef, useState} from "react";
import {Button} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {sendMessage, startMessagesListening} from "../../Redux/chat-reducer";
import {AppStateType} from "../../Redux/redux-store";


export type ChatMessageType = {
    message: string,
    photo: string,
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
    const status = useSelector((state: AppStateType) => state.chat.status)

    useEffect(() => {
        dispatch(startMessagesListening())
        return () => {
            dispatch(startMessagesListening())
        }
    }, [])

    return <div>
        {status === 'error' && <div>Some error occured.Please refresh the page</div>}
            <>
                <ChatMessages/>
                <AddMessageChatForm/>
            </>
    </div>
}

const ChatMessages: React.FC<{}> = ({}) => {
    const messages = useSelector((state: AppStateType) => state.chat.messages)
    const messagesAnchorRef = useRef<HTMLDivElement>(null)
    const [isAutoScrollIs,setIsAutoScrollIs] = useState(false)

    const scrollHandler = (e:React.UIEvent<HTMLDivElement,UIEvent>) =>{
    const element  =e.currentTarget
        if(Math.abs((element.scrollHeight-element.scrollTop)-element.clientHeight)<300){
            !isAutoScrollIs && setIsAutoScrollIs(true)
        }else {
            isAutoScrollIs && setIsAutoScrollIs(false)
        }
    }

    useEffect(()=>{
        if(isAutoScrollIs){
        messagesAnchorRef.current?.scrollIntoView({behavior:'smooth'})
        }
    },[messages])

    return <div style={{height: '400px', overflowY: 'auto'}} onScroll={scrollHandler}>
        {messages.map((m: any, index) => <ChatMessage key={m.id} message={m}/>)}
    <div ref={messagesAnchorRef}></div>
    </div>
}

const ChatMessage: React.FC<{ message: ChatMessageType }> = React.memo(({message}) => {
    return <div>
        <img src={message.photo} style={{width: '40px'}}/><b>{message.userName}</b>
        <br/>
        {message.message}
        <hr/>
    </div>
})

const AddMessageChatForm: React.FC<{}> = ({}) => {
    const [message, setMessage] = useState('')
    const dispatch = useDispatch()
    const status = useSelector((state: AppStateType) => state.chat.status)

    const sendMessageHandler = () => {
        if (!message) {
            return
        }
        dispatch(sendMessage(message))
        setMessage('')
    }

    return <div>
        <div><textarea onChange={(e) => setMessage(e.currentTarget.value)} value={message}></textarea>
        </div>
        <div><Button disabled={status !== 'ready'} onClick={sendMessageHandler}>Send</Button>
        </div>
    </div>
}


export default ChatPage