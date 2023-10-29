
import Tour from "../models/Tour.js"
import Review from '../models/Review.js'

export const createReview = async(req,res)=>{
    const tourId = req.params.tourId
    const newReview = new Review({...req.body})

    try{
        const saveReview = await newReview.save()

        await Tour.findByIdAndUpdate(tourId,{
            $push:{reviews:saveReview._id}
        })
        res.status(200).json({success:true,message:'review submitted',data:saveReview})
    }catch(e){
        res.status(500).json({success:false,message:'review failed'})

    }
}