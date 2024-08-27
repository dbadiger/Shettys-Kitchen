import { useState } from "react"
import {Link} from 'react-router-dom'
import { assets } from "../../assets/assets"
import "./Navbar.css"

const Navbar=()=>{
    const [menu, setMenu] = useState("home")
    return (
    <>
    <div className="navbar">
        <img src={assets.shettyslogo} alt="shettys-kitchen-logo" className="logo" />
        <ul className="navbar-menu">
            <Link to="/"  onClick={()=>setMenu("home")}className={menu==="home"?"active":""}>Home</Link>
            <a href="#explore-menu" onClick={()=>setMenu("menu")}className={menu==="menu"?"active":""}>Menu</a>
            <a href="#app-download" onClick={()=>setMenu("about-us")}className={menu==="mobile-app"?"active":""}>Download App</a>
            <a href="#footer" onClick={()=>setMenu("contact-us")}className={menu==="contact-us"?"active":""}>Contact</a>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="search-icon"  className="search-icon"/>
            <div className="navbar-search-icon">
                <img src={assets.basket} alt="basket" className="navbar-basket"/>
                <div className="dot"></div>
            </div>
            <button>Sign in</button>
            
        </div>
    </div>

    </>
)
}
export default Navbar