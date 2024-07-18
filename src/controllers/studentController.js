import { Student } from "../schema/model.js";

export const createStudentController= async(req,res,next)=>{
    try {
        let data = await Student.create(req.body);
        res.json({
            success:true,
            message:"student created successfully",
            result:data
        })
        
    } catch (error) {
        res.json({
            success:false,
            message:error.message,
        });
    }
}

export const readStudentController= async(req,res,next)=>{
    try {
        let data = await Student.find({});
        res.json({
            success:true,
            message:"student read successfully",
            result:data
        })
        
    } catch (error) {
        res.json({
            success:false,
            message:error.message,
        });
    }
}

export const readSpecificStudentController=async(req,res,next)=>{
    try {
        let data= await Student.findById(req.params.id);
        res.json({
            success:true,
            message:"student read specific successfully",
            result:data,
        })
    } catch (error) {
        res.json({
            success:false,
            message:error.message
        });
    }
}

export const updateStudentController=async (req,res,next)=>{
    try {
        let data=await Student.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.json({
            success:true,
            message:"Student Updated Successfully",
            result:data,

        })
    } catch (error) {
        res.json({
            success:false,
            message:error.message
        })
    }
}

export const deleteStudentController=async (req,res,next)=>{
    try {
        let data=await Student.findByIdAndDelete(req.params.id)
        res.json({
            success:true,
            message:"Student deleted Successfully",
            result:data,
        })
    } catch (error) {
        res.json({
            success:false,
            message:error.message
        })
    }
}
