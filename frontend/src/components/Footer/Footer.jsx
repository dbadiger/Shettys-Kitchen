import React from "react"
import "./Footer.css"
import { assets } from "../../assets/assets";
const Footer = ()=>{
    return(
        <div className="footer" id = 'footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.shettyslogo} alt="" />
                    <p>Our mission is to bring the diverse, rich flavors of India to your table, each dish crafted with love and tradition. our menu aims to bring back old memories and make new ones.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.instagram_icon} alt="" />
                        <img src={assets.google_maps_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>Quick Links</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivary</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>Git In Touch</h2>
                    <ul>
                        <li>+91 812345 67890</li>
                        <li>contac@shettyskitchen.in</li>
                    </ul>
                </div>
            </div>
            <hr />
           <p className="footer-copyright">Copyright 2024 © Shettyskitchen.in - All Rights Reserved</p>
        </div >
    )
}

export default Footer;