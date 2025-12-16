import User from "../models/userModels.js"




const Signup = async(req,res)=>{
    try {
        const {Username,Email,Password} = req.body
        const newUser = new User ({Username,Email,Password})
        await newUser.save()
        return res.status(200).json({
            message:" user sign up successfully",
            user:newUser
        })
    } catch (error) {
       console.log(error);
       return res.status(500).json({
        error:"Internal server issue"
       })
        
    }

}

const Login = async(req,res)=>{
    try {
        const users = await User.find() 
        return res.status(201).json({
            message:"ALL Users Fetched Successfully " , 
           users
    
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:"Internal server issue"

        })
        
        
    }

}


const Updateusers = async(req,res)=>{
    try {
        const {id} = req.params
        const {Username,Email,Password} = req.body
        const updatedUser = await User.findByIdAndUpdate(id,{
            Username,Email,Password
        },{new:true})
              if
                (!updatedUser){
                    res.status(404).json({
                        message:"User not Found"
                    })
                }
              
                return res.status(201).json({
                    message:"User Updated Successfully",
                    user: updatedUser,
                    
                })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error:"Internal server issue"
        })
        
    }
}


const Deleteuser = async (req,res)=>{
    try {
        const {id} = req.params;
        const deleteduser =  await User.findByIdAndDelete(id);
        if(!deleteduser){
        return res.status(404).json({
            message:"User Not Found ",
            user : Deleteuser
        })
    }
        return res.status(200).json({
            message:"User Deleted Successfully",
            user : deleteduser
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            error:"Internal Server issue"
        })
        
    }
}



export {Signup , Login, Updateusers, Deleteuser}