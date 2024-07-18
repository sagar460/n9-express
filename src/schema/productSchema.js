// import { Schema } from "mongoose";
import mongoose from "mongoose";
let productSchema=  new mongoose.Schema({
    name:{
        type:String,
        required:[true, "name field is required"]
    },
    quantity:{
        type:Number,
        required:[true,"quantity field is required"],
    },
    price:{
        type:Number,
        required:[true,"price field is required"],
    },
});
export default productSchema;