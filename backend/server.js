import express from 'express';
import cors from "cors"
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';

import "dotenv/config"
import userRouter from './routes/userRoute.js';
import cartRouter from './routes/cartRout.js';
import orderRouter from './routes/orderRoute.js';

//app config
const app = express();
const port = process.env.PORT ||  4000


//middleware
app.use(express.json())
app.use(cors())

//db connection
connectDB();


//API Endpoint
app.use("/api/food", foodRouter)
app.use("/images", express.static('uploads'))
app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)



app.get('/', (request, response)=>{
    
 response.send("Hello, This is Home Page"); 
});

app.listen(port,()=>{
    console.log(`Server started on ${port}`)
});


//mongodb+srv://testbe121:Testbe121@cluster0.3fxys.mongodb.net/?