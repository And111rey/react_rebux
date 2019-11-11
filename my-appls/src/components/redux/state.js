
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
          ]
    },
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
  

  _addPost () {
    let newPost = {
      id: 999,
      post: this._state.profilePage.newPostText,
      like: 0
  }
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = ""
    this._callSubscriber(this._state)
  },
  
  _updateNewPostText (action) {
      this._state.profilePage.newPostText = action.text
      this._callSubscriber(this._state)
  },

  dispatch (action) {
    if (action.type === "ADD-POST") {
    this._addPost()
    } else if  (action.type === "UPDATE-NEW-POST-TEXT") {
      this._updateNewPostText(action)
    }
  }

}

export const addPostActionCreator = () => {
  return {
    type: "ADD-POST"
  }
}


export const updateNewPostActionCreator = (text) => {
  return {
    type: "UPDATE-NEW-POST-TEXT",
    text: text
  }
}


 
window.store = store





export  { store };