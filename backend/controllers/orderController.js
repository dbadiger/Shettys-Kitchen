import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe"


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

//Place User Order from Frontend

const placeOrder = async (req, res) => {

    // const frontend_url = "https://animated-eureka-v6vpjjprrv972w6wv-5174.app.github.dev"
    const frontend_url = "https://shettys-kitchen-backen.onrender.com"

    try {
        const newOrder = new orderModel({
            userId: req.body.userId,
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address
        })
        await newOrder.save();
        await userModel.findByIdAndUpdate(req.body.userId, { cart: {} })

        const line_items = req.body.items.map((item) => ({
            price_data: {
                currency: "inr",
                product_data: {
                    name: item.name
                },
                unit_amount: item.price * 100
            },
            quantity: item.quantity
        }))
        line_items.push({
            price_data: {
                currency: "inr",
                product_data: {
                    name: "Delivery Charges"
                },
                unit_amount: 20 * 100
            },
            quantity: 1
        })

        const session = await stripe.checkout.sessions.create({
            line_items: line_items,
            mode: 'payment',
            success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,

        })
        res.json({ success: true, session_url: session.url })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })

    }
}




const verifyOrder = async (req, res) => {
    const { orderId, success } = req.body
    console.log(orderId,success);
    
    const order = await orderModel.findById(orderId)
    
    try {
        if (success == "true") {
            await order.updateOne({ payment: true })
            res.json({ success: true, message: "Paid" })
          } else {
            await orderModel.findByIdAndDelete(orderId)
            res.json({ success: false, message: "Not Paid" })
          }
      

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })
    }
}


//User Orders for Frontend
const userOrders =async (req, res)=>{
    try {
        const orders = await orderModel.find({userId:req.body.userId});
        res.json({success:true, data:orders})
        
    } catch (error) {
        console.log(error)
        res.json({success:false, message:"Error"})
    }
}

//All Users Orders to Admin panel
const listOrders = async(req, res)=>{
    try {
        const orders = await orderModel.find({})
        res.json({success:true, data:orders})

    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
        
    }
}



//API for Updating Order Status

const updateStatus = async (req, res) => {
    try {
      const orderid = { _id: req.body.orderId };
      const status = { status: req.body.status };
      await orderModel.findOneAndUpdate(orderid, status, { new: true });
      res.json({ success: true, message: "Status Updated" });
    } catch (error) {
      console.log(error);
      res.json({ success: false, message: "Error" });
    }
  };





export { placeOrder, verifyOrder,userOrders, listOrders, updateStatus }
