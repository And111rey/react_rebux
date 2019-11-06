import React from 'react';
import { NavLink } from "react-router-dom"
import "./Dialogs.css"
import { Dialog_Item } from "./Dialog_Item/Dialog_Item"
import { Message_Item } from "./Message_Item/Message_Item"






const Dialogs = (props) => {
    
    let dialogsData = [
        { id: 1, name: "Stas" },
        { id: 2, name: "Kostya" },
        { id: 3, name: "Andrey L." },
        { id: 4, name: "Sasha" }
    ]
    
    let messagesData = [
        { id: 1, mess: "HEllo " },
        { id: 2, mess: "where yo going" },
        { id: 3, mess: "I can explain" },
        { id: 4, mess: "can you help me" }
    ]
    
    let dialogsElements = dialogsData.map((el) => {
            return < Dialog_Item name={el.name} id={el.id} />
        }) 
    let messageElements = messagesData.map((el) => {
            return < Message_Item mess={el.mess} />
    
        })
    
        return (
            <div className="dialogs">
                <div className="dialog_items">
              {dialogsElements}                
            </div>
            <div className="messages_item">
                {messageElements}                
            </div>
        </div>
    )
}

export { Dialogs }