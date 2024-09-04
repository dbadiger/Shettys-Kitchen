import userModel from "../models/userModel.js"


//Add items to Cart
const addToCart = async(req, res)=>{
    try {
        let userData = await userModel.findOne({_id:req.body.userId})
        console.log(userData)
        // let cartData = await userData.cartData;
       
        const cart = userData.cart;
        console.log(cart)

        if(!cart[req.body.itemId]){
            cart[req.body.itemId]=1;
        }
        else{
            cart[req.body.itemId]+=1;
        }
        console.log(cart)
        await userData.save(); 
        await userModel.findByIdAndUpdate(req.body.userId,{cart});
        res.json({success:true,message:"Added to Cart"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"}) 
    }
}

//Remove Items from Cart
const reomveFromCart = async(req, res)=>{
    try{
        let userData = await userModel.findById(req.body.userId);
        console.log(userData)
        // let cartData = await userData.cartData;
        let cart = userData.cart;
        console.log(cart)
        if(cart[req.body.itemId]>0){
            cart[req.body.itemId] -=1; 
        }
        console.log(cart)
        await userData.save();
        await userModel.findByIdAndUpdate(req.body.userId,{cart});
        res.json({success:true, message:"Removed from Cart"})
    }catch(error){
        console.log(error)
        res.json({success:false, message:"Error"})
    }
}


//Fetch User Cart Data
const getCart = async (req, res)=>{
    try {
        let userData = await userModel.findById(req.body.userId)
        let cart = userData.cart;
        res.json({success:true, cart})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:"Error"})

    }

}

export {addToCart, reomveFromCart, getCart}