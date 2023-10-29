import Booking from "../models/Booking.js"

export const createBooking= async(req,res)=>{
    const newBooking=new Booking(req.body);
    try{
        const savedBooking=await newBooking.save()
        res.status(200).json({success:true,message:'Your Tour is Booked',data:savedBooking})
    }catch(e){
        res.status(500).json({success:false,message:'Failed '})

    }
}

export const getBooking=async(req,res)=>{
    const id=req.params.id
    try{
        const book=await  Booking.findById(id)
        res.status(200).json({success:true,message:'success',data:book})

    }catch(e){
        res.status(500).json({success:false,message:'error'})

    }
}
