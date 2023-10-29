import User from "../models/User.js";

export const createUser= async(req,res)=>{
    const newUser = new User(req.body)
    

    try{
        const savedUser= await newUser.save()
        res.status(200).json({success:true,message:'Successfully created',data:savedUser})
    }catch(e){
        res.status(500).json({success:false,message:'',data:req.body})
    }
}

export const updateUser= async(req,res)=>{
    const id=req.params.id;
    try{
        const updatedUser=await User.findByIdAndUpdate(id,{
            $set:req.body
        },{new:true})
        res.status(200).json({success:true,message:'Successfully updated',data:updateUser})

    }catch(e){
        res.status(500).json({success:false,message:'failed to update'})

    }
}
export const deleteUser= async(req,res)=>{
    const id=req.params.id;
    try{
        await User.findByIdAndDelete(id)
        res.status(200).json({success:true,message:'Successfully deleted'})

    }catch(e){
        res.status(500).json({success:false,message:'failed to deleted'})

    }
}
export const getSingleUser= async(req,res)=>{
    const id=req.params.id;
    try{
        const User=await User.findById(id)
        res.status(200).json({success:true,message:'Successfully found',data:User})

    }catch(e){
        res.status(500).json({success:false,message:'failed to found'})

    }
}
export const getAllUser= async(req,res)=>{

   
    try{
        const Users=await User.find({})
        res.status(200).json({success:true,message:'Successfully found',data:Users})

    }catch(e){
        res.status(500).json({success:false,message:'failed to found'})

    }
}