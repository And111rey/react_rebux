const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

//          state = _state.profilePage:{
//              posts: [],
//              newPostText: ""
//           } 
//
//
//
export const profileReduer = (state, action) => {


    if (action.type === ADD_POST) {
        let newPost = {
          id: 999,
          post: state.newPostText,
          like: 0
        }
        state.posts.push(newPost);
        state.newPostText = ""
        
      } else if  (action.type === UPDATE_NEW_POST_TEXT) {
          state.newPostText = action.text
          
      } 

    return state; 
}