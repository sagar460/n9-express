// import { Schema } from "mongoose";
import mongoose from "mongoose";
let employeeSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true, "name field is required"]
    },
    address:{
        type:String,
        required:[true,"address field is required"],
    },
    age:{
        type:Number,
        required:[true,"age field is required"],
    },
});
export default employeeSchema;