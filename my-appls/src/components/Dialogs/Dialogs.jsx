import React from 'react';
import "./Dialogs.css"
import { Dialog_Item } from "./Dialog_Item/Dialog_Item"
import { Message_Item } from "./Message_Item/Message_Item"
import { updateNewMessageBodyCreator, sendMessageGreator } from "../redux/dialogs-reducer"





const Dialogs = (props) => {

    let dialogsData = props.messagesData.dialogsData
    let messagesData = props.messagesData.messagesData
    let newMessageBody = props.messagesData.newMessageBody


    let dialogsElements = dialogsData.map((el) => {
            return < Dialog_Item name={el.name} id={el.id} />
        }) 

    let messageElements = messagesData.map((el) => {
            return < Message_Item mess={el.mess} />
    
        })

    let onSendMessageClick = () => {
        // debugger;
        props.dispatch(sendMessageGreator())
    }
    
    let onNweMessageChange = (ev) => {
        let body = ev.target.value
        props.dispatch(updateNewMessageBodyCreator(body))
    }
    
        return (
            <div className="dialogs">
                <div className="dialog_items">
              {dialogsElements}                
            </div>
            <div className="messages_item">
                <div>{messageElements}</div>
                <div>
                    <div><textarea onChange={onNweMessageChange} value={newMessageBody} ></textarea></div>
                    <div><button onClick={ onSendMessageClick }>Send</button></div>
                </div>                
            </div>
        </div>
    )
}

export { Dialogs }