import React from "react" 
import { MyPosts } from "./MyPosts/MyPosts"
import "./Profile.css"
import { Profile_Info } from "./Profile_Info/Profile_Info"

const Profile = (props) => {

  console.log(props)
    return (
            <div className="content">             
                < Profile_Info />
                < MyPosts 
                    dispatch={props.dispatch} 
                    posts={props.profilePage.posts}
                    newPostText={props.profilePage.newPostText}
                    // dispatch={props.dispatch} 
                    />
            </div>
    )
}

export { Profile }