
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY"
const SEND_MESSAGE = "SEND-MESSAGE"


//          state = _state.messagesPage :{
//               messagesData: []
//               newMessageBody: ""
//           }


// let initialState = {
//     dialogsData: [
//         { id: 1, name: "Stas" },
//         { id: 2, name: "Kostya" },
//         { id: 3, name: "Andrey L." },
//         { id: 4, name: "Sasha" }
//       ],
//       messagesData: [
//         { id: 1, mess: "HEllo " },
//         { id: 2, mess: "where yo going" },
//         { id: 3, mess: "I can explain" },
//         { id: 4, mess: "can you help me" }
//       ],
//       newMessageBody: "data from state"
// }

export let dialogsReducer = (state, action) => {
    switch(action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state
        case SEND_MESSAGE:
            let  body = state.newMessageBody;
            let newMessageElemtnt = { id: 4, mess: body };
            state.messagesData.push(newMessageElemtnt);
            state.newMessageBody = "";
            return state;
        default:
            return state;
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