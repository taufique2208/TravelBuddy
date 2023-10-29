import User from '../models/User.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const register = async(req,res)=>{
    try{
        const salt=bcrypt.genSaltSync(10)
        const hash=bcrypt.hashSync(req.body.password,salt)
        
        const newUser = new User({
            username: req.body.username,
            email:req.body.email,
            password:hash,
            photo:req.body.photo,
        })

        await newUser.save()
        res.status(200).json({success:true,message:'Successfully registered'})
    }catch(e){
        console.log(e)
        res.status(500).json({success:false,message:e,data:e})

    }
}

export const login = async(req,res)=>{
    const email=req.body.email;
    try{
        const user = await User.findOne({email})
        if(!user){
            return res.status(404).json({success:false,message:'User Not Found'})
        }

        const checkCorrectPassword = bcrypt.compare(req.body.password,user.password)

        if(!checkCorrectPassword){
            return res.status(401).json({success:false,message:'Incorrect Password'})

        }

        const {password,role,...rest}=user._doc

        const token = jwt.sign({id:user._id,role:user.role},process.env.JWT_SECRET_KEY,{expiresIn:'15d'})

        res.cookie('accessToken',token,{
            httpOnly:true,
            expires:token.expiresIn
        }).status(200).json({token,data:{...rest},role})
    }catch(e){
        res.status(500).json({success:false,message:'login invalid'})
        
    }
}