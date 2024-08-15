import { useState } from "react"
import { assets } from "../../assets/assets"
import "./Navbar.css"

const Navbar=()=>{

    const [menu, setMenu] = useState("home")

    return (

    <>
    <div className="navbar">
        <img src={assets.shettyslogo} alt="shettys-kitchen-logo" className="logo" />
        <ul className="navbar-menu">
            <li onClick={()=>setMenu("home")}className={menu==="home"?"active":""}>Home</li>
            <li onClick={()=>setMenu("menu")}className={menu==="menu"?"active":""}>Menu</li>
            <li onClick={()=>setMenu("about-us")}className={menu==="about-us"?"active":""}>About Us</li>
            <li onClick={()=>setMenu("contact-us")}className={menu==="contact-us"?"active":""}>Contact</li>
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