import { Trainee } from "../schema/model.js";

export const createTraineeController=async(req,res,next)=>{
try {
    let data= await Trainee.create(req.body);
    res.json({
        success:true,
        message:"trainee created successfully",
        result:data,
    })
} catch (error) {
    res.json({
        success:false,
        message:error.message
    })
}
};

export const readTraineeController=async(req,res,next)=>{
    try {
        let data=await Trainee.find({});
        res.json({
            success:true,
            message:"trainee read successfully",
            result:data,
        })
    } catch (error) {
        res.json({
            success:false,
            message:error.message
        })
    }
}

export const readSpecificTraineeController=async(req,res,next)=>{
    try {
        let data=await Trainee.findById(req.params.id);
        res.json({
        success:true,
        message:"trainee specific read successfully",
        result:data,
    })
    } catch (error) {
        res.json({
            success:false,
            message:error.message
        })
        
    }
}
export const updateTraineeController=async (req,res,next)=>{
    try {
        let data= await Trainee.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.json({
            success:true,
            message:"Trainee update successfully",
            result:data,
        })
    } catch (error) {
        res.json({
            success:false,
        message:error.message
        })
    }
}

export const deleteTraineeController=async (req,res,next)=>{
    try {
        let data= await Trainee.findByIdAndDelete(req.params.id)
        res.json({
            success:true,
            message:"Trainee deleted successfully",
            result:data,
        })
    } catch (error) {
        res.json({
            success:false,
            message:error.message
        })
    }
}