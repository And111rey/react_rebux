import React from "react" 
import "./Friends_List.css"
import { FriendItelList } from "./FriendItelList/FriendItelList"





const FriendsList = () => {



    let friends = [
        {id:1, name: "Stas"},
        {id:2, name: "Kolya"},
        {id:3, name: "Andrew"},
        {id:4, name: "Masha"}
    ]

      
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
