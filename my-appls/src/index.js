
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import { store } from "./components/redux/redux-store"



export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App
         dispatch={store.dispatch.bind(store)} 
         state={store.getState()} 
        //  updateNewPOsText={store.updateNewPOsText.bind(store)} 
         />
    </BrowserRouter>, document.getElementById('root')
  );
}

rerenderEntireTree(store.getState())

store.subscribe(() => {
  let state  = store.getState();
  rerenderEntireTree(state)
})