import express from "express"
import cros from "cros"


//App Config
const app = express();
const port = 4000;

//middleware
app.use(express.json())
app.use(cros())

app.get("/", (req, res)=>{
    res.send("API Working")
})

app.listen(port, ()=>{
    console.log(`Server started on htttp://localhost:${port}`)
})