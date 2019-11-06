import React from "react"
import "./MyPosts.css"
import { Post } from "./Post/Post"

const  MyPosts = () => {

    let postData = [
      {id: 1, post: "it is good",like: 5},
      {id: 2, post: "You are so cool",like: 6},
      {id: 3, post: "wow? it is great", like: 3},
      {id: 4, post: "Ha ha ha", like: 0},
    ]


    return (
            <div className="postBlock">
                <h3>My POST</h3>
                <div>
                  <textarea></textarea>
                </div>
                <div>
                  <button>Add POST</button>
                </div>
                < Post message = {postData[0].post} like={postData[0].like} />
                < Post message = {postData[1].post} like={postData[1].like} />
                < Post message = {postData[2].post} like={postData[2].like} />
                < Post message = {postData[3].post} like={postData[3].like} />
                
            </div>        
    )
}

export { MyPosts }

