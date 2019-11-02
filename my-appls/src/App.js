import React from 'react';
import "./App.css"
import { Header } from "./components/Header"
import { Navbar } from "./components/Navbar"
import { Profile } from "./components/Profile" 

const App = () => {
  return (
    <div className="app-wrapper">
      <Header/>
      <Navbar/> 
      <div className="content">
        <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOtTscO9jFvxMCxxGC7ROSxpjWaWdMXb6QGUr9VkW0QTiYkZsh&s"/>
        </div>        <div>
          avatar + description
        </div>
          <div>
            My POST
              <div>
              New post
              </div>
              <div>
                Post1
              </div>
              <div>
                Post 2
              </div>
            </div>
          </div>
    </div>
  )
}

export default App;
