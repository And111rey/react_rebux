import React from "react" 
import { MyPosts } from "./MyPosts/MyPosts"
import "./Profile.css"
import { ProfileInfo } from "./Profile_Info/ProfileInfo"

const Profile = () => {
    return (
            <div className="content">             
                < ProfileInfo />
                < MyPosts />
            </div>
    )
}

export { Profile }