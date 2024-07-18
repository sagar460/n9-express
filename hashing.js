// hashing
import bcrypt from "bcrypt";
// Generate hash code
// let Password="Password@123";
// let hashedPassword=await bcrypt.hash(Password,10)
// console.log(hashedPassword);

// // compare hash code
// let loginPassword="Password@123";
// let isValidPassword= await bcrypt.compare(loginPassword,Password);
// console.log(isValidPassword)


// function to create hashPassword using bcrypt.hash
let hashPassword=async(Password)=>{
    let hashedPassword= await bcrypt.hash(Password,10); 
    return hashedPassword;
}
let data= await hashPassword("abc")
// console.log(data) 

// function to compare Password & hashPassword using bcrypt.compare(Password,hashPassword)

let comparePassword=  async(Password,hashedPassword)=>{
let isValidPassword= await bcrypt.compare(Password,hashedPassword);
return isValidPassword;
}
let data1= await comparePassword("abc","$2b$10$woEaVHHAjYGgu1ifr4t5uOGRD9gDqX5obvmHw1iL6/2NGxECnaJJ2")
console.log(data1)


// Password => bcrypt.hash() => hashedPassword
// Password, hashPassword => bcrypt.compare(Password, hashPassword) => True/False