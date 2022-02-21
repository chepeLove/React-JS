import React, {useEffect, useState} from "react";
import { Button} from "antd";



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
   const [wsChanel,setWsChanel]=useState<WebSocket | null>(null)

    useEffect(()=>{
    let ws:WebSocket
        const closeHandler = ()=>{
            console.log('CLOSE WS')
           setTimeout(createChannel,3000)
        }
    function createChannel(){
            ws?.removeEventListener('close',closeHandler)
            ws?.close()

         ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
        ws.addEventListener('close',closeHandler)
        setWsChanel(ws)
    }
        createChannel()
    },[])

    return <div>
        <ChatMessages wsChanel = {wsChanel} />
        <AddMessageChatForm wsChanel = {wsChanel}/>
    </div>
}

const ChatMessages: React.FC<{ wsChanel: WebSocket|null}> = ({wsChanel}) => {
    const [messages,setMessages] = useState<ChatMessageType[]>([])
    useEffect(()=>{
        let messageHandler = (e:MessageEvent)=>{
            let newMessages =JSON.parse(e.data)
            setMessages((prevMessages)=>[...prevMessages,...newMessages])
        };
        wsChanel?.addEventListener('message',messageHandler)
        return () =>{
            wsChanel?.removeEventListener('message',messageHandler)
        }
    },[wsChanel])

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

const AddMessageChatForm: React.FC<{ wsChanel: WebSocket|null}> = ({wsChanel}) => {
    const [message,setMessage] = useState('')
    const [readyStatus,setReadyStatus] = useState<'pending'|'ready'>('pending')

    useEffect(()=>{
        let openHandler = ()=>{
            setReadyStatus('ready')
        };
        wsChanel?.addEventListener('open',openHandler)
        return ()=>{
            wsChanel?.removeEventListener('open',openHandler)
        }
    },[wsChanel])

    const sendChatMessage = ()=>{
        if(!message){
            return
        }
        wsChanel?.send(message)
        setMessage('')
    }

    return <div>
        <div><textarea onChange={(e)=>setMessage(e.currentTarget.value)} value={message}></textarea>
        </div>
        <div><Button disabled={wsChanel !== null && readyStatus !== 'ready'} onClick={sendChatMessage}>Send</Button>
        </div>
    </div>
}


export default ChatPage