import React, { useState } from 'react'
import "./Home.css"
import Header from "../../components/Hearder/Header"
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'
const Home = ()=>{
    const [category, setCategory] = useState("All");
    return (
        <>
       <Header/>
       <ExploreMenu category={category} setCategory ={setCategory}/>
       <FoodDisplay category={category}/>
       <AppDownload/>
        </>
    )
}

export default Home;