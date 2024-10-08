import { useContext, useState } from "react"
import {Link, NavLink} from 'react-router-dom'
import { assets } from "../../assets/assets"
import "./Navbar.css"
import { StoreContext } from "../../context/StoreContext"
import { useNavigate } from "react-router-dom"

const Navbar=({setShowLogin})=>{
    const [menu, setMenu] = useState("home")
    const {getTotalCartAmount, token, setToken} = useContext(StoreContext)

    const navigate =useNavigate();

    const logout = ()=>{
        localStorage.removeItem("token")
        setToken("")
        navigate("/")
    }

    return (
    <>
    <div className="navbar">
    <Link to="/">    <img src={assets.shettyslogo} alt="shettys-kitchen-logo" className="logo" /></Link>
        <ul className="navbar-menu">
            <Link to="/"  onClick={()=>setMenu("home")}className={menu==="home"?"active":""}>Home</Link>
            <a href="#explore-menu" onClick={()=>setMenu("menu")}className={menu==="menu"?"active":""}>Menu</a>
            <a href="#app-download" onClick={()=>setMenu("about-us")}className={menu==="mobile-app"?"active":""}>Download App</a>
            <a href="#footer" onClick={()=>setMenu("contact-us")}className={menu==="contact-us"?"active":""}>Contact</a>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="search-icon"  className="search-icon"/>
            <div className="navbar-search-icon">
               <Link to="/cart"> <img src={assets.basket} alt="basket" className="navbar-basket"/></Link>
                <div className={getTotalCartAmount() === 0?"":"dot"}></div>
            </div>
            {!token?<button onClick = {()=>setShowLogin(true)}>Sign in</button>
            :
            <div className="navbar-profile">
                <img src={assets.profile_icon} alt="" />
                <ul className="nav-profile-dropdown">
                    <li onClick={()=>navigate('/myorders')}> <img src={assets.bag} alt="" /> <p>Orders</p> </li>
                    <hr/>
                    <li onClick={logout}><img src={assets.logout} alt="" /><p>Logout</p></li>
                </ul>
                </div>
                }
            
            
        </div>
    </div>

    </>
)
}
export default Navbar