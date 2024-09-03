import React from 'react'
import Navbar from "./components/Navbar/Navbar"
import Sidebar from "./components/Sidebar/Sidebar"
import {Routes, Route}  from "react-router-dom"
import Add from "./Pages/Add/Add"
import List from "./Pages/List/List"
import Orders from "./Pages/Orders/Orders"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

 const url = "https://animated-eureka-v6vpjjprrv972w6wv-4000.app.github.dev"
  return (
    <>
    <ToastContainer/>
   <Navbar/>
    <hr />
    <div className="app-component">
      <Sidebar/>
      <Routes>
        <Route path="/add" element={<Add url={url}/>} />
        <Route path="/list" element={<List url={url} />} />
        <Route path="/orders" element={<Orders url={url}/>} />
    </Routes>
    </div>
      </>
  )
}

export default App
