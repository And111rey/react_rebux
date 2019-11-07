import React from "react"
import "./MyPosts.css"
import { Post } from "./Post/Post"

const  MyPosts = (props) => {

    let posts = props.posts
    let postsElements = posts.map((el) => {
      return < Post message = {el.post} like={el.like} />

    })

    // let newPOSTelement = React.CreateRef() 

    // // let addPost = () => {
    // //   let text = newPOSTelement.current.value
    // // }

    return (
            <div className="postBlock">
                <h3>My POST</h3>
                <div>
                  <textarea  id="new-post"></textarea>
                </div>
                <div>
                  <button onClick={()=>{alert("hello")}} className="btn">Add POST</button>
                </div>
                  {postsElements}
            </div>        
    )
}

export { MyPosts }

