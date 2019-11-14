// import  { updateNewPostActionCreator } from "./store"
const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

//          state = _state.profilePage:{
//              posts: [],
//              newPostText: ""
//           } newPostText


let initialState =  {
  posts: [
      {id: 1, post: "it is good",like: 5},
      {id: 2, post: "You are so cool",like: 6},
      {id: 3, post: "wow? it is great", like: 3},
      {id: 4, post: "Ha ha ha", like: 0},
    ],
  newPostText: ""
}

export let profileReducer = (state = initialState, action) => {
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


