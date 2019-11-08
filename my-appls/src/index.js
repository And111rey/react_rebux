// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
import { state } from "./components/redux/state"
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import { state } from "./components/redux/state"
import {addPost, updateNewPOsText, subscribe}  from "./components/redux/state"
import { BrowserRouter } from "react-router-dom"

export let rerenderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App
         addPost={addPost} 
         state={state} 
         updateNewPOsText={updateNewPOsText} 
         />
    </BrowserRouter>, document.getElementById('root')
  );
}

rerenderEntireTree(state)

 subscribe(rerenderEntireTree)