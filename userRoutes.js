import express from "express"
import { Deleteuser, Login, Signup, Updateusers } from "../controllers/userControllers.js"
import User from "../models/userModels.js"



const userRoute = express.Router()

userRoute.post("/add",Signup)

userRoute.get("/get",Login)

userRoute.put("/update/:id",Updateusers)

userRoute.delete("/delete/:id", Deleteuser)

export default userRoute