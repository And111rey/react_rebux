import React from "react" 
import { MyPosts } from "./MyPosts/MyPosts"
import "./Profile.css"
import { Profile_Info } from "./Profile_Info/Profile_Info"

const Profile = (props) => {

  
    return (
            <div className="content">             
                < Profile_Info />
                < MyPosts addPost={props.addPost} 
                    posts={props.profilePage.posts}
                    newPostText={props.profilePage.newPostText}
                    updateNewPOsText={props.updateNewPOsText} 
                    />
            </div>
    )
}

export { Profile }