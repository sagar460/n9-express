// import { Schema } from "mongoose";
import mongoose from "mongoose";

let studentSchema= new mongoose.Schema({
    name:{
    type:String,
    required:[true,"name field is required"],
    },
    address:{
        type:String,
        required:[true,"address field is required"]
    },
    gender:{
        type:String,
        required:[true,"gender field is required"]
    },
    age:{
        type:Number,
        required:[true,"age field is required"]
    }
});
export default studentSchema;