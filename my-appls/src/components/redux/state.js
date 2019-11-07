
import  {rerenderEntireTeree}  from "../../render"

  
  let state = {


    profilePage : {
        posts: [
            {id: 1, post: "it is good",like: 5},
            {id: 2, post: "You are so cool",like: 6},
            {id: 3, post: "wow? it is great", like: 3},
            {id: 4, post: "Ha ha ha", like: 0},
          ]
    },

    messagesPage: {
        dialogsData: [
            { id: 1, name: "Stas" },
            { id: 2, name: "Kostya" },
            { id: 3, name: "Andrey L." },
            { id: 4, name: "Sasha" }
          ],
          messagesData: [
            { id: 1, mess: "HEllo " },
            { id: 2, mess: "where yo going" },
            { id: 3, mess: "I can explain" },
            { id: 4, mess: "can you help me" }
          ]
    },
    friends: [
        {id:1, name: "Stas"},
        {id:2, name: "Kolya"},
        {id:3, name: "Andrew"},
        {id:4, name: "Masha"}
    ]
  } 

export let addPost = (postMessage) => {
    let newPost = {
          id: 5,
          post: postMessage,
          like: 0
      }
      state.profilePage.posts.push(newPost);
      alert(postMessage)
      rerenderEntireTeree(state)
  }

export  { state };