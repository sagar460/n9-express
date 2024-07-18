// Make Express Application
import express, {Router, json } from "express";
import connectMongoDB from "./src/connectDB/mongo.js";
import userRouter from "./src/routes/userRouter.js";
import productRouter from "./src/routes/productRouter.js";
import studentRouter from "./src/routes/studentRouter.js";
import employeeRouter from "./src/routes/employeeRouter.js";
import traineeRouter from "./src/routes/traineeRouter.js";
import reviewRouter from "./src/routes/reviewRouter.js";
import webUserRouter from "./src/routes/webUserRouter.js";
import cors from "cors";

import { config } from "dotenv";

import fileRouter from "./src/routes/sendFileRouter.js";

 
config();
// console.log(process.env.NAME)
// console.log(process.env.AGE)
// console.log(typeof process.env.IS_MARRIED)
const MyApp = express();
MyApp.use(express.static("./public"));
// localhost:3000
// Attach
const port=3000;
connectMongoDB();

// MyApp.get("/product",(req,res,next)=>{
//     console.log("hello world")
// })
MyApp.use(json());  //read json file 
MyApp.use(cors());

MyApp.use("/user",userRouter);
MyApp.use("/product", productRouter)                                                                                                                                                                                
MyApp.use("/student", studentRouter)
MyApp.use("/employee",employeeRouter)
MyApp.use("/trainee",traineeRouter)
MyApp.use("/review",reviewRouter)
MyApp.use("/webUser",webUserRouter)
MyApp.use("/files",fileRouter)

MyApp.listen(3000,()=>{ 
    console.log("express is running at port 3000")
});
// MyApp.use("/first",firstRouter);

// API- defining task for each request
// MyApp
// firstRouter.post("/",(req,res,next)=>{
//     res.json("first post")
// })
// .get(req,res,next)=>{
//     res.json("first get")
// })
// .patch((req,res,next)=>{
//     res.json("first patch")
// })
// .delete((req,res,next)=>{
//     res.json("first delete")
// })

// schema
// model
// controller
// routes
// index



