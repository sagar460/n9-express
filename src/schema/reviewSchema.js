import mongoose, { Schema } from "mongoose";
let reviewSchema = new mongoose.Schema({
    productId:{
        type:Schema.ObjectId,
        ref:"product",
        required:[true,"ProductId is required"]
    },
    userId:{
        type:Schema.ObjectId,
        ref:"user",
        required:[true,"UserId is required"]

    },
    description:{
        type:String,
        required:[true,"Description field is required"]
    }

})  
export default reviewSchema; 