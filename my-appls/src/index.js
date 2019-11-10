
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import { store } from "./components/redux/state"



export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App
         addPost={store.addPost.bind(store)} 
         state={store.getState()} 
         updateNewPOsText={store.updateNewPOsText.bind(store)} 
         />
    </BrowserRouter>, document.getElementById('root')
  );
}

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)