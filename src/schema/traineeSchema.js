import mongoose from "mongoose";

let traineeSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"name field is required"],
    },
    id:{
        type:Number,
        required:[true,"id field is required"]
    },
    degree:{
        type:String,
        required:[true,["degree field is required"]]
    }
});
export default traineeSchema;