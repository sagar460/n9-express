import { Employee } from "../schema/model.js";

export const createEmployeeController=async(req,res,next)=>{
    try {
        let data=await Employee.create(req.body);
        res.json({
           success:true,
           message:"employee created successfully" ,
           result:data
        })
    } catch (error) {
        res.json({
            success:false,
            message:error.message
        });
    }
};

export const readEmployeeController=async(req,res,next)=>{
    try {
        let data=await Employee.find({});
        res.json({
            success:true,
            message:"employee read successfully"
        })
    } catch (error) {
        res.json({
            success:false,
            message:error.message
        })
    };
}

export const readSpecificEmployeeController=async(req,res,next)=>{
    try {
        let data= await Employee.findById(req.params.id)
        res.json({
            success:true,
            message:"employee specific read successfully",
            result:data,
        })
    } catch (error) {
        res.json({
        success:false,
        message:error.message,
        })
    }
}

export const updateEmployeeController=async(req,res,next)=>{
    try {
        let data=await Employee.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.json({
            success:true,
            message:"Employee updated Successfully",
            result:data,
        })
      
    } catch (error) {
        res.json({
            success:false,
            message:error.message
        })
    }
}

export const deleteEmployeeController=async(req,res,next)=>{
    try {
        let data=await Employee.findByIdAndDelete(req.params.id)
        res.json({
            success:true,
            message:"Employee deleted Successfully",
            result:data,
        })
    } catch (error) {
        res.json({
            success:false,
            message:error.message
        })
    }
}