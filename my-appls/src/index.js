// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
import { state } from "./components/redux/state"

import {rerenderEntireTree} from "./render"


rerenderEntireTree(state)

  // ReactDOM.render(
  //   <BrowserRouter>
  //     <App addPost={addPost} state={state} />
  //   </BrowserRouter>, document.getElementById('root')
  // );


