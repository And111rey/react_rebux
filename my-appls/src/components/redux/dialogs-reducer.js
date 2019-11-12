
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY"
const SEND_MESSAGE = "SEND-MESSAGE"


//          stste = _state.messagesPage :{
//               messagesData: []
//               newMessageBody: []
//           }
export const dialogsReducer = (state, action) => {
    
    if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        state.newMessageBody = action.body
    } else if (action.type === SEND_MESSAGE) {
        let  body = state.newMessageBody
        let newMessageElemtnt = { id: 4, mess: body }
        state.messagesData.push(newMessageElemtnt)
        state.newMessageBody = ""
        
    }


    return state; 
}