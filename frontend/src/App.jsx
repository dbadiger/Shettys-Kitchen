import Navbar from "./components/Navbar/Navbar"
import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from "./Pages/Home/Home"

 
function App() {


  return (
   
      <div className="app">
      <Navbar/>
   
      <Routes>
        <Route path = "/" element={<Home/>} />
      </Routes>
      

      </div>
   
  )
}

export default App
