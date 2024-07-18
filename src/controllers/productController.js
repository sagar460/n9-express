import { Product } from "../schema/model.js";

export const createProductController= async(req,res,next)=>{

try {
let data= await Product.create(req.body);
res.json({
    success:true,
    message:"product created successfully",
    result:data
});
} catch (error){
    res.json({
        success:false,
        message:error.message,
    });
}
};

export const readProductController=async (req,res,next)=>{
    try {
        let data=await Student.find({});
        res.json({
            success:true,
            message:"product read successfully",
            result:data,
        })
    } catch (error) {
        res.json({
            success:false,
            message:error.message,
        });
    }
}
export const readSpecificProductController=async(req,res,next)=>{
    try {
        let data=await Product.findById(req.params.id);
        res.json({
            success:true,
            message:"product read specific successfully",
            result:data 
    })
    } catch (error) {
        res.json({
            success:false,
            message:error.message,
        });
    }
}

export const updateProductController=async (req,res,next)=>{
    try {
        let data=await Product.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.json({
            success:true,
            message:"Product Updated Successfully",
            result:data
        })
    } catch (error) {
        res.json({
            success:false,
            message:error.message
        })
    }
}

export const deleteProductController=async (req,res,next)=>{
    try {
       let data = await Product.findByIdAndDelete(req.params.id)
        res.json({
            success:true,
            message:"Products Deleted Successfully",
            result:data
        })
    } catch (error) {
        res.json({
            success:false,
            message:error.message
        })
    }
}