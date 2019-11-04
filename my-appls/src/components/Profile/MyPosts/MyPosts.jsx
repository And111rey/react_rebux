import React from "react"
import "./MyPosts.css"
import { Post } from "./Post/Post"

const  MyPosts = () => {
    return (
            <div>
              My POST
                <div>
                  <textarea></textarea>
                  <button>Add POST</button>
              </div>
                < Post message = "Hi, how are you" />
                < Post message = "It is my first post" />
                < Post />
                < Post />
                < Post />
                < Post />
            </div>        
    )
}

export { MyPosts }

