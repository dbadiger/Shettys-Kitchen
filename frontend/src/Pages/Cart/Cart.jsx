import React, { useContext } from 'react'
import "./Cart.css"
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';


const Cart = () => {
    const { food_list, cartItems, removeFromCart, getTotalCartAmount, url } = useContext(StoreContext);
   
    const navigate = useNavigate()
   
    return (
        <div className='cart'>
            <div className="cart-items">
                <div className="cart-items-title">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br /><hr />
                {
                    food_list.map((item, index) => {
                        if (cartItems[item._id] > 0) {

                            return (
                                <>
                                    <div className='cart-items-title cart-items-item'>
                                        <img src={url+"/images/"+item.image} alt="" />
                                        <p>{item.name}</p>
                                        <p>₹{item.price}</p>
                                        <p>{cartItems[item._id]}</p>
                                        <p>₹{item.price * cartItems[item._id]}</p>
                                        <p className='remove' onClick={()=>removeFromCart(item._id)}>X</p>
                                    </div>
                                    <hr />
                                </>
                            )
                        }
                    })
                }
            </div>
                <div className="cart-bottom">
                    <div className="cart-total">
                        <h2>Cart Totals</h2>
                        <div>
                            <div className="cart-total-details">
                                <p>Subtotal</p>
                                <p>₹{getTotalCartAmount()}</p>
                            </div><hr />
                            <div className="cart-total-details">
                                <p>Delivery Fee</p>
                                <p>₹{getTotalCartAmount()===0? 0 :20}</p>
                            </div><hr />
                            <div className="cart-total-details">
                                <b>Total</b>
                                <b>₹{getTotalCartAmount()>0?
                                getTotalCartAmount()+20: 0}</b>
                            </div>
                        </div>
                            <button onClick={()=>navigate('/order')}>PROCEED TO CHECK OUT</button>
                    </div>
                    <div className="cart-promocode">
                        <div className="">
                            <p>If you have a Promo Code, Enter it Here</p>
                            <div className="cart-promocode-input">
                                <input type="text" placeholder='PROMOCODE' />
                                <button>SUBMIT</button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Cart
