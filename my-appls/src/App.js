import React from 'react';
import "./App.css"
import { Route, BrowserRouter } from "react-router-dom"

import { Header } from "./components/Header/Header"
import { Navbar } from "./components/Navbar/Navbar"
import { Profile } from "./components/Profile/Profile" 
import { Dialogs } from "./components/Dialogs/Dialogs" 





const App = (props) => {
  // debugger;
  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header/>
      <Navbar friends={props.state.friends}/> 

      <Route path="/dialogs" render={ () => <Dialogs dispatch={props.dispatch} messagesData={props.state.messagesPage}/> }/> 
      <Route path="/profile" render={ () => <Profile dispatch={props.dispatch} profilePage={props.state.profilePage}  /> } />
    </div>  
    </BrowserRouter>
  )
}


export default App;
