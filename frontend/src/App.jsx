import Navbar from "./components/Navbar/Navbar"
import React, { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from "./Pages/Home/Home"
import Footer from "./components/Footer/Footer"
import LoginPopup from "./components/LoginPopup/LoginPopup"
import Cart from "./Pages/Cart/Cart"
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder"
import Verify from "./Pages/PlaceOrder/Verify/Verify"
import MyOrders from "./Pages/MyOrders/MyOrders"


 
function App() {

  const [showLogin, setShowLogin] = useState(false);


  return (
      <>
      {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className="app">
      <Navbar setShowLogin={setShowLogin}/>
   
      <Routes>
        <Route path = "/" element={<Home/>} />
        <Route path = "/cart" element={<Cart/>} />
        <Route path = "/order" element={<PlaceOrder/>} />
        <Route path = "/verify" element={<Verify/>} />
        <Route path="/myorders" element={<MyOrders/>}/>
      
      </Routes>
      

      </div>
      <Footer/>
      </>
   
  )
}

export default App
