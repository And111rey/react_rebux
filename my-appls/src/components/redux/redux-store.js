import { createStore, combineReducers } from "redux"
import { profileReducer } from "./profile-reducer"
import { dialogsReducer } from "./dialogs-reducer"


let reducers = combineReducers({  // собираем все редюссері в одну кучу
    profile: profileReducer, // imported reducer from "profileReduer.js"
    dialogs: dialogsReducer // imported reducer from "/dialogsReducer.js"
}) // редюссер востпринимать как свойствa "store.js"


let store = createStore(reducers)

export { store }