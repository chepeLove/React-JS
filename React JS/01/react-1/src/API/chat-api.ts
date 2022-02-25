
const subscribers = {
    'message-received': [] as MessagesReceivedSubscriberType[],
    'status-changed':[] as StatusChangedSubscriberType[]
}
let ws:WebSocket | null = null

type EventsNamesType = 'message-received'|'status-changed'

const closeHandler = ()=>{
    console.log('CLOSE WS')
    setTimeout(createChannel,3000)
}

let messageHandler = (e:MessageEvent)=>{
    const newMessages =JSON.parse(e.data)
    subscribers['message-received'].forEach(s=>s(newMessages))
};

let openHandler = ()=>{
    notifySubscribersAboutStatus('ready')
};

let errorHandler = ()=>{
    notifySubscribersAboutStatus('error')
    console.log('ERROR.REFRESH PAGE')
};

const cleanUp =()=>{
    ws?.addEventListener('close',closeHandler)
    ws?.addEventListener('message',messageHandler)
    ws?.addEventListener('open',openHandler)
    ws?.addEventListener('error',errorHandler)
}

const notifySubscribersAboutStatus = (status:StatusType)=>{
    subscribers['status-changed'].forEach(s=>s(status))
}

function createChannel(){
    cleanUp()
    ws?.close()
    ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
    notifySubscribersAboutStatus('pending')
    ws.addEventListener('close',closeHandler)
    ws.addEventListener('message',messageHandler)
    ws.addEventListener('open',openHandler)
    ws.addEventListener('error',errorHandler)
}

export const chatApi = {
    start(){
    createChannel()
    },
    stop(){
        subscribers['message-received'] = []
        subscribers['status-changed'] = []
        cleanUp()
    ws?.close()
    },
    subscribe(eventName:EventsNamesType,callback:MessagesReceivedSubscriberType|StatusChangedSubscriberType){
    // @ts-ignore
        subscribers[eventName].push(callback)
        return ()=>{
        // @ts-ignore
            subscribers[eventName] = subscribers[eventName].filter(s =>s!==callback)
        }
    },
    unsubscribe(eventName:EventsNamesType,callback:MessagesReceivedSubscriberType|StatusChangedSubscriberType){
            // @ts-ignore
        subscribers[eventName] = subscribers[eventName].filter(s =>s!==callback)
    },
    sendMessageChat(message:string){
        ws?.send(message)
    }
}

type MessagesReceivedSubscriberType = (messages:ChatMessageAPIType[])=>void
type StatusChangedSubscriberType = (status:StatusType)=>void

export type ChatMessageAPIType = {
    message: string,
    photo:  string,
    userId: number,
    userName: string
}

export type StatusType = 'pending' | 'ready'|'error'