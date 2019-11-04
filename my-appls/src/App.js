import React from 'react';
import "./App.css"
import { Route, BrowserRouter } from "react-router-dom"

import { Header } from "./components/Header/Header"
import { Navbar } from "./components/Navbar/Navbar"
import { Profile } from "./components/Profile/Profile" 
import { Dialogs } from "./components/Dialogs/Dialigs" 


const App = () => {
  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header/>
      <Navbar/> 

      <Route path="/dialogs" component={Dialogs}/>
      <Route path="/profile" component={Profile} />

    </div>
    </BrowserRouter>
  )
}
/////
////
export default App;
