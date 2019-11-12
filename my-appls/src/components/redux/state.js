import { dialogsReducer } from "./dialogs-reducer"
import { profileReduer } from "./profile-reducer"


const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY"
const SEND_MESSAGE = "SEND-MESSAGE" 

let store = {
  _state: {

    profilePage: {
        posts: [
            {id: 1, post: "it is good",like: 5},
            {id: 2, post: "You are so cool",like: 6},
            {id: 3, post: "wow? it is great", like: 3},
            {id: 4, post: "Ha ha ha", like: 0},
          ],
        newPostText: ""
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
          ],
          newMessageBody: "data from state"
    },
    sidebar: {},
    friends: [
        {id:1, name: "Stas"},
        {id:2, name: "Kolya"},
        {id:3, name: "Andrew"},
        {id:4, name: "Masha"}
    ]
  },
  _callSubscriber () {
    console.log("state changet")
  },
  
  subscribe (observer) {
    this._callSubscriber = observer
  },
  getState() {
    return this._state
  },
  



  dispatch (action) {
    debugger;
    profileReduer(this._state.profilePage, action)
    dialogsReducer(this._state.messagesPage, action)
    this._callSubscriber(this._state)
    
  }

}
export const sendMessageGreator = () => {
  return {
    type: SEND_MESSAGE
  }
} 
export const updateNewMessageBodyCreator = (body) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
  }
} 
////////////////////////////////////////////////////
///////////////////////////////////////////////////////
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


 
window.store = store





export  { store };