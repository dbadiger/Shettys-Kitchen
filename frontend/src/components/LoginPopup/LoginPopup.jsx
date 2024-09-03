import React, { useState, useEffect, useContext } from 'react'
import "./LoginPopup.css"
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import axios from "axios"

const LoginPopup = ({setShowLogin}) => {
  const [currentState, setCurrentState]= useState("Login")
  const {url, token, setToken} = useContext(StoreContext)

  const [data, setData] = useState({
    name:"",
    email:"",
    password:""
  })

  const onChangeHandler= (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setData(data => ({...data, [name]:value}))
  }

  // useEffect(()=>{
  //   console.log(data)
  // }, [data])

  const onLogin = async(e)=>{
    e.preventDefault()
    let newUrl = url;
    if(currentState==="Login"){
      newUrl +="/api/user/login" 
    }
    else{
      newUrl += "/api/user/register"
    }

    const response = await axios.post(newUrl, data);
    console.log(response.data)


    if(response.data.succes){
      setToken(response.data.token)
      localStorage.setItem("token", response.data.token)
      setShowLogin(false)
    }
    else{
      console.log("Error logging in:");
    console.log(response.data); // Log the error response data
    alert(response.data.message || "An error occurred while logging in.");
  
    }
  }

  return (
    <div className='login-popup'>
      <form onSubmit={onLogin} className='login-popup-container'>
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img onClick={()=>setShowLogin(false)} src={assets.cross} alt="" />
        </div><div className="login-popup-inputs">
          {currentState==="Login"?<></>:<input name="name" onChange={onChangeHandler} value={data.name} type="text" placeholder='Your Name' required/>}
          <input type="email" name="email" onChange={onChangeHandler} value={data.email} placeholder='Your Email ID' required/>
          <input type="password" name="password" onChange={onChangeHandler} value={data.password} placeholder='Password' required/>
        </div>
        <button type='submit'>{currentState==="Sign Up"?"Create Account":"Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {
          currentState==="Login"?
          <p>Create a New Account? <span onClick={()=>setCurrentState("Sign Up")}>Click Here</span></p>
          :
          <p>Already Have an Account? <span onClick={()=>setCurrentState("Login")}>Login Here</span></p>
        }
        
        
      </form>
    </div>
  )
}

export default LoginPopup
