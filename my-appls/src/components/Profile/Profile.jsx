import React from "react" 
import { MyPosts } from "./MyPosts/MyPosts"
import "./Profile.css"
import { Profile_Info } from "./Profile_Info/Profile_Info"

const Profile = () => {

    let posts = [
        {id: 1, post: "it is good",like: 5},
        {id: 2, post: "You are so cool",like: 6},
        {id: 3, post: "wow? it is great", like: 3},
        {id: 4, post: "Ha ha ha", like: 0},
      ]
  
    return (
            <div className="content">             
                < Profile_Info />
                < MyPosts posts = {posts} />
            </div>
    )
}

export { Profile }