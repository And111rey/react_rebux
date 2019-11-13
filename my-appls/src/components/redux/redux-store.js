import { createStore, combineReducers } from "redux";
import { profileReduer } from "./profile-reducer"
import { dialogsReducer } from "./dialogs-reducer" 


let reducers = combineReducers({    // комбаинем редюсссеры, и отдаем их в стор 
    profile: profileReduer, //  за ветку "profile" отвечает  импортирований сюда "profileReduer"  
    dialogs: dialogsReducer //  за ветку "dialogs" отвечает  импортирований сюда "dialogsReducer"
});


export let store = createStore(reducers) // 