import React from "react" 
import { MyPosts } from "./MyPosts/MyPosts"
import "./Profile.css"

const Profile = () => {
    return (
            <div className="content">
                <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOtTscO9jFvxMCxxGC7ROSxpjWaWdMXb6QGUr9VkW0QTiYkZsh&s"/>
            </div>        <div>
              avatar + description
            </div>
            <MyPosts/>
          </div>
    )
}

export { Profile }