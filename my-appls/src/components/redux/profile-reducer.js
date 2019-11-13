const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

//          state = _state.profilePage:{
//              posts: [],
//              newPostText: ""
//           } 
//
//
//


let initialState = {
  posts: [
    {id: 1, post: "it is good",like: 5},
    {id: 2, post: "You are so cool",like: 6},
    {id: 3, post: "wow? it is great", like: 3},
    {id: 4, post: "Ha ha ha", like: 0},
  ],
  newPostText: ""
};


export const profileReduer = (state = initialState, action) => {
//  debugger;

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




// export const profileReduer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_POST:
//         let newPost = {
//           id: 999,
//           post: state.newPostText,
//           like: 0
//         };
//         state.post.push(newPost)
//         state.newPostText = "";
//         return state;
//       case UPDATE_NEW_POST_TEXT:
//         state.newPostText = action.text;
//         return state;
//       default:
//         return state;
//   }
// }
