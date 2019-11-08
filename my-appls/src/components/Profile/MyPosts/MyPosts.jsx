import React from "react"
import "./MyPosts.css"
import { Post } from "./Post/Post"

const  MyPosts = (props) => {

    let posts = props.posts
    let postsElements = posts.map((el) => {
      return < Post message = {el.post} like={el.like} />
    })

    let newPostElement = React.createRef()
      

    let addPost = () => {
      let text = newPostElement.current.value
      props.addPost(text)
      newPostElement.current.value = ""
    }

 
    
    return (
            <div className="postBlock">
                <h3>My POST</h3>
                <div>
                  <textarea 
                    ref={newPostElement} 
                    id="new-post" 
                    value={props.newPostText}></textarea>
                </div>
                <div>
                  <button onClick={addPost} className="btn">Add POST</button>
                </div>
                  {postsElements}
            </div>        
    )
}

export { MyPosts }

