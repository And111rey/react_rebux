import React from 'react';



const Message_Item = (props) => {
    return (
        <div className="messages" >
            {props.mess}
        </div>
    )
}


export { Message_Item }