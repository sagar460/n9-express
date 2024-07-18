//  Token
 // Generate Token
// import jwt from "jsonwebtoken";
// let infoObj={
//     id:"1234",
// };
// let secretKey ="n9solution";
// // expiry info must be in same format
// let expiryDate = {expiresIn:"5d",};

// import { secretKey } from "./src/constant";

// // Generate Token
// let token=jwt.sign(infoObj,secretKey,expiryDate)
// console.log(token)

// let token1="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMzQiLCJpYXQiOjE3MjA1MDU1NzAsImV4cCI6MTcyMDkzNzU3MH0.ZM1Fd5DJY6TQ4RcAM7j0mzKnXD0-RQ2WBaG0iVqjgbI";

// try {
//     let infoObj= await jwt.verify(token1,"n9solution");
//     console.log(infoObj,"verified")
// } catch (error) {
//     console.log(error.message)
// }






// function to generate Token
// export let generateToken= async(info,secretKey,expiryInfo)=>{
//     let token=await jwt.sign(info,secretKey,expiryInfo)
//     return token;
// }

// function to verify token
// export let verify=async(token,secretKey)=>{
// let data=await jwt.verify(token,secretKey)
// return data;
// }