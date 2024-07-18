import mongoose from "mongoose";
import userSchema from "./userSchema.js";
import productSchema from "./productSchema.js";
import studentSchema from "./studentSchema.js";
import employeeSchema from "./employeeSchema.js";
import traineeSchema from "./traineeSchema.js";
import reviewSchema from "./reviewSchema.js";
import webUserSchema from "./webUserSchema.js";

// variable name must be same as model name.
// variable first letter must be capital always.
// model name must be singular.


export const User=mongoose.model("User",userSchema);
export const Product=mongoose.model("Product",productSchema);
export const Student=mongoose.model("Student",studentSchema);
export const Employee=mongoose.model("Employee",employeeSchema);
export const Trainee=mongoose.model("Trainee",traineeSchema);
export const Review=mongoose.model("Review",reviewSchema);
export const webUser=mongoose.model("webUser",webUserSchema);