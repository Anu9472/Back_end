import express from  "express"
import connectDB from "./config/db.js"
import dotenv from "dotenv"
import userRoute from "./routes/userRoutes.js"




dotenv.config()
const app = express()
connectDB(process.env.Mongo_URL)
app.use(express.json())

app.use("/api/user",userRoute)

const port = process.env.port || 8085

// app.get("/add",(req,res)=>{
//     res.send("HELLO SERVER IS RUNNING ")
// })

app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
    
})