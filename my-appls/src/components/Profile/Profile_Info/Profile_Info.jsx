import React from "react" 
import "./Profile_Info.css"


const Profile_Info = (props) => {
    return(
        <div>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOtTscO9jFvxMCxxGC7ROSxpjWaWdMXb6QGUr9VkW0QTiYkZsh&s"/>
            </div>
            <div className ="description_block">
                ava+deskription
            </div>
       </div>
    ) 
}
  

export { Profile_Info }