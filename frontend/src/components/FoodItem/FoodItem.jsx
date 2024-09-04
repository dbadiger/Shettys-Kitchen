import React, { useContext, useState } from "react"
import "./FoodItem.css"
import {assets} from "../../assets/assets"
import { StoreContext } from "../../context/StoreContext"
const FoodItem = ({name, id, price, image, description})=>{

    // console.log( id);
    //Without Context API
//    const [itemCount, setItemCount] = useState(0)

//With Context API
    const {cartItems, addToCart, removeFromCart, url} = useContext(StoreContext)
    return (
        //without context api
    /*<div className="food-item">
        <div className="food-item-container">
            <img src={image} alt="" className="food-item-image"/>
            {
                !itemCount ? 
                <img src={assets.add} alt="" className="add"
                onClick={()=>setItemCount(prev=>prev + 1)} />
                :
                 <div className="food-item-counter">
                    <img onClick={()=>setItemCount(prev=>prev-1)} src={assets.remove_red} alt="" className="add_green"/>
                    <p>{itemCount}</p>
                    <img onClick={()=>setItemCount(prev=>prev+1)} src={assets.add_green} alt="" className="food-item-image"/>
                </div>
            }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating} alt="" />
            </div>
            <p className="food-item-desc">
                {description}
            </p>
            <p className="food-item-price">₹{price}</p>
        </div>
    </div>*/
    <div className="food-item">
        <div className="food-item-container">
            <img src={url+"/images/"+image} alt="" className="food-item-image"/>
            {
                !cartItems[id] ? 
                <img src={assets.add} alt="" className="add"
                onClick={()=>addToCart(id)} />
                :
                 <div className="food-item-counter">
                    <img onClick={()=>removeFromCart(id)} src={assets.remove_red} alt="" />
                    <p>{cartItems[id]}</p>
                    <img onClick={()=>addToCart(id)} src={assets.add_green} alt=""/>
                </div>
            }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating} alt="" />
            </div>
            <p className="food-item-desc">
                {description}
            </p>
            <p className="food-item-price">₹{price}</p>
        </div>
    </div>
    )
}

export default FoodItem;