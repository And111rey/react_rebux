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
    return (
        <div className="dialogs">
            <div className="dialog_items">
              
                < Dialog_Item name="Taras Normas" id="1" />
                < Dialog_Item name="Stas" id="2" />
                < Dialog_Item name="Kolya" id="3" />
                
            </div>
            <div className="messages_item">                
                < Message_Item mess="hello ? IS it you" />
                < Message_Item mess="Hello ? How are you" />
            </div>
        </div>
    )
}

export { Dialogs }