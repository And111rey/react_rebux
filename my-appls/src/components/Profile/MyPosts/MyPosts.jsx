import React from "react"
import "./MyPosts.css"
import { Post } from "./Post/Post"
import { addPostActionCreator,  updateNewPostActionCreator} from "../../redux/state"




const  MyPosts = (props) => {
  
    let posts = props.posts
    let postsElements = posts.map((el) => {
      return < Post message = {el.post} like={el.like} />
    })

      

    let addPost = (event) => {
      let text = event.target.value
      props.dispatch(addPostActionCreator())
    }



    let onPostChange = (event) => {
      let text = event.target.value
      props.dispatch(updateNewPostActionCreator(text))
      console.log( "from MyPosts" + " " +  text)
    }


    return (
            <div className="postBlock">
                <h3>My POST</h3>
                <div>
                  
                  <textarea 
                    onChange={onPostChange}
                    id="new-post" 
                    value={props.newPostText}
                    ></textarea>
                </div>
                <div>
                  <button onClick={addPost} className="btn">Add POST</button>
                </div>
                  {postsElements}
            </div>        
    )
}

export { MyPosts }

