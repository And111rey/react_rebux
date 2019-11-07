import React from 'react';
import "./App.css"
import { Route, BrowserRouter } from "react-router-dom"

import { Header } from "./components/Header/Header"
import { Navbar } from "./components/Navbar/Navbar"
import { Profile } from "./components/Profile/Profile" 
import { Dialogs } from "./components/Dialogs/Dialogs" 





const App = (props) => {

  
  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header/>
      <Navbar/> 

      <Route path="/dialogs" render={ () => <Dialogs/> }/> 
      <Route path="/profile" render={ () => <Profile posts={props.posts} /> } />
    </div>
    </BrowserRouter>
  )
}
/////
////
export default App;
