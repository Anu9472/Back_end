import mongoose from "mongoose";

const connectDB = async (URL)=>{
    try {
        await mongoose.connect(URL)
        console.log("DB connected");
        
    } catch (error) {
        console.log(error);
        
    }
}

export default connectDB 