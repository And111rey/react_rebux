import React from 'react';
import "./Dialogs.css"


const Dialogs = (props) => {
    return (
        <div className="dialogs">
            <div className="dialog_items">
                <div className="item">
                    Diam
                </div>
                <div className="item">
                    Stas
                </div>
                <div className="item">
                    Andrew
                </div>
                <div className="item">
                    Andrew L
                </div>
            </div>
            <div className="messages_item">
                <div className="messages">Hello how are yo</div>
                <div className="messages">hello</div>
            </div>
        </div>
    )
}

export { Dialogs }