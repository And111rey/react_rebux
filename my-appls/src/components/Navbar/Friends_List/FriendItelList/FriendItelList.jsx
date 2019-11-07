import React from "react" 
import "./FriendItelList.css"


const FriendItelList = (props) => {

    let srcFerAva = "data:image/jpeg;base64,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"

    return (
        <div className="oneName">
            <img src={srcFerAva}/>
            {props.oneName}
            
        </div>
    )
} 

export { FriendItelList }
