import React from "react"
import "./MyPosts.css"
import { Post } from "./Post/Post"

const  MyPosts = (props) => {

    // let posts = [
    //   {id: 1, post: "it is good",like: 5},
    //   {id: 2, post: "You are so cool",like: 6},
    //   {id: 3, post: "wow? it is great", like: 3},
    //   {id: 4, post: "Ha ha ha", like: 0},
    // ]


    let posts = props.posts
    let postsElements = posts.map((el) => {
      return < Post message = {el.post} like={el.like} />

    })

    return (
            <div className="postBlock">
                <h3>My POST</h3>
                <div>
                  <textarea></textarea>
                </div>
                <div>
                  <button className="btn">Add POST</button>
                </div>
                  {postsElements}
            </div>        
    )
}

export { MyPosts }

