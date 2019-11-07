// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import { state } from "./components/redux/state"
// import { addPost } from "./components/redux/state"
// import { BrowserRouter } from "react-router-dom"


// export let rerenderEntireTeree = () => {
//   ReactDOM.render(
//     <BrowserRouter>
//       <App addPost={addPost} state={state} />
//     </BrowserRouter>, document.getElementById('root')
//   );
// }



import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import { state } from "./components/redux/state"
import {addPost}  from "./components/redux/state"
import { BrowserRouter } from "react-router-dom"

export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App addPost={addPost} state={state} />
    </BrowserRouter>, document.getElementById('root')
  );
}
