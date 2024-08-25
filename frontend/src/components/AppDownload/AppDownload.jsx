import React from 'react'
import "./AppDownload.css"
import { assets } from '../../assets/assets';

const AppDownload =()=>{
    return (
        <div className="app-download" id="app-download">
            <p>For Better Experience Download <br/> Shetty's Kitchen App</p>
            <div className="app-download-platfroms">
                <img src={assets.playstore} alt="" />
                <img src={assets.appstore} alt="" />
            </div>
        </div>
    )
}

export default AppDownload;