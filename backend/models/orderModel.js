import mongoose from "mongoose";    

const orderSchema = new mongoose.Schema({
    userId:{type:String, reqired:true},
    items:{type:Array, reqired:true},
    amount:{type:Number, reqired:true},
    address:{type:Object, reqired:true},
    status:{type:String, default:"Food Processing"},
    date:{type:Date, default:Date.now()},
    payment:{type:Boolean, default:false}
})

const orderModel = mongoose.models.order || mongoose.model("order", orderSchema)

export default orderModel;