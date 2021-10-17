import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

let DialogsContainer = ()=> {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState().dialogsPage

                let onSendMessageClick = () => {
                    store.dispatch(sendMessageActionCreator())
                }

                let onNewMessageChange = (body) => {
                    store.dispatch(updateNewMessageBodyActionCreator(body))
                }
                return <Dialogs sendMessage={onSendMessageClick}
                                updateNewMessageBody={onNewMessageChange}
                                dialogsPage={state}/>
            }
            }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer