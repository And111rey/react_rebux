import React from 'react';
import { NavLink } from "react-router-dom"
import "./Dialogs.css"


const Dialog_Item = (props) => {
    return(
        <div className="item">
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
} 


const Message_Item = (props) => {
    return (
        <div className="messages" >
            {props.mess}
        </div>
    )
}

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


    return (
        <div className="dialogs">
            <div className="dialog_items">
              
                < Dialog_Item name={dialogsData[0].name} id={dialogsData[0].id} />
                < Dialog_Item name={dialogsData[1].name} id={dialogsData[1].id} />
                < Dialog_Item name={dialogsData[2].name} id={dialogsData[2].id} />
                < Dialog_Item name={dialogsData[3].name} id={dialogsData[3].id} />
                
            </div>
            <div className="messages_item">                
                < Message_Item mess={messagesData[0].mess} />
                < Message_Item mess={messagesData[1].mess} />
                < Message_Item mess={messagesData[2].mess} />
                < Message_Item mess={messagesData[3].mess} />
            </div>
        </div>
    )
}

export { Dialogs }