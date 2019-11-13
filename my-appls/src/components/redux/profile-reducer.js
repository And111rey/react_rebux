// import  { updateNewPostActionCreator } from "./store"
const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

//          state = _state.profilePage:{
//              posts: [],
//              newPostText: ""
//           } newPostText


export let profileReduer = (state, action) => {
  switch(action.type) {
    case ADD_POST:
        let newPost = {
          id: 999,
          post: state.newPostText,
          like: 0
        }
        state.posts.push(newPost);
        state.newPostText = "";
        return state
      case UPDATE_NEW_POST_TEXT:
          state.newPostText = action.text
          return state;
      default:
        return state;
  }
}


export const addPostActionCreator = () => {
  return {
    type: ADD_POST
  }
}


export const updateNewPostActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    text: text
  }
}


