import { Review } from "../schema/model.js"
export const createReviewController=async(req,res,next)=>{
try {
    let data=await Review.create(req.body)
    res.json({
        success:true,
        message:"Review created successfully",
        result:data,

    })
} catch (error) {
    res.json({
    success:false,
    message:error.message
    })
}
}
export const readReviewController=async (req,res,next)=>{
    try {
        let data= await Review.find({});
        res.json({
            success:true,
            message:"Review read successfully",
            result:data,
        })
    } catch (error) {
        res.json({
            success:false,
            message:error.message
        })
    }
}

export const readSpecificReviewController=async(req,res,next)=>{
    try {
        let data=await Review.findByID(req.params.id)
        res.json({
            success:true,
            message:"Review specific read successfully",
            result:data,
        })
    } catch (error) {
        res.json({
            success:false,
            message:error.message
        })
    }
}

export const updateReviewController=async(req,res,next)=>{
    try {
        let data=await Review.findByIDandUpdate(req.params.id,req.body,{new:true})
        res.json({
            success:true,
            message:"Review updated Successfully",
            result:data,
        })
    } catch (error) {
        res.json({
            success:false,
            message:error.message
        })
    }
}

export const deleteReviewController=async (req,res,next)=>{
    try {
        let data=await Review.findByIDandDelete(req.params.id)
        res.json({
            success:true,
            message:"Review deleted Successfully",
            result:data,
        })

    } catch (error) {
       res.json({
        success:false,
        message:error.message
       })
    }
}