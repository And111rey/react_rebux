import React from "react" 
import "./Friends_List.css"
import { FriendItelList } from "./FriendItelList/FriendItelList"





const FriendsList = (props) => {

        let friends = props.friends
        let friendsList = friends.map((el) => {
        return  <FriendItelList oneName={el.name}/>
    })
    

    return (
        <div className="friendsList">
            <h2>Friends</h2>
            <div className="friendItem">
                {friendsList}

            </div>
        </div>
    )
}

export { FriendsList }
