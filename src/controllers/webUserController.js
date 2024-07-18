import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { secretKey } from "../utils/constant.js";
import { webUser } from "../schema/model.js";
import { sendMail } from "../utils/sendMail.js";

export const createWebUserController=async(req,res,next)=>{
    try {
        let data= req.body;
        let password=req.body.password;

        let hashedPassword=await bcrypt.hash(password,10);

        data={
            ...data,
            isVerifiedEmail:false,
            password:hashedPassword,
        }
        const result=await webUser.create(data);
        console.log(result);
        //generate token
        let infoObj={
            _id:result._id,

        }
        let expiryInfo={
            expiresIn:"10d",
        }
        let token=await jwt.sign(infoObj,secretKey,expiryInfo);
        console.log(token);

        //send Email
        await sendMail({
            from:"'n9solution'<shresthasagar7000@gmail.com>",
            to: result.email,
            subject:"account created successfully....",
            html:`
            <h2>your account has been created successfully...</h2>
            <a href=" http://localhost:3000/verify-email?token=${token}">
            http://localhost:3000/verify-email?token=${token}
            </a>
            `
        })
        res.status(400).json({
            success:true,
            message:"webUser created successfully",
            result:result,
        })
    } catch (error) {
        res.status(404).json({
            success:false,
            message:error.message,
        })
    }
}


export const verifyEmailController=async(req,res,next)=>{
    try {
        let tokenString=req.headers.authorization;

        let tokenArray=tokenString.split(" ");

        let token=tokenArray[1];

        let infoObj=await jwt.verify(token,secretKey)

        // console.log(infoObj);
        let userId=infoObj._id;

        let result=await webUser.findByIdAndUpdate(userId,{isVerifiedEmail:true},{new:true});
        res.status(200).json({
            success:true,
            message:"email is verified successfully",
            result:result,
        })
    } catch (error) {
        res.status(404).json({
            success:false,
            message:error.message
        })
    }
}


export const webUserLoginController=async(req,res,next)=>{
    try {
        // console.log(req.body);
        let email=req.body.email;
        let password=req.body.password;
        // console.log(email);
        // console.log(password);

        let user= await webUser.findOne({email:email});

        if (!user) {
          throw new Error("Invalid credentials");
        }
        if (!user.isVerifiedEmail) {
          throw new Error("Email not verified");
        }
        let isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
          throw new Error("Invalid credentials");
        }
        // generate Token
        let infoObj = {
          _id: user._id,
        };
        let expiryInfo = {
          expiresIn: "30d",
        };
        let token = await jwt.sign(infoObj, secretKey, expiryInfo);
        res.json({
          success: true,
          message: "webUser login successfully",
          result: user,
          token : token
    
        });
      } catch (error) {
        res.json({
          success: false,
          message: error.message,
        });
      }
};


export const readSpecificWebUserController = async (req, res, next) => {
    try {
      let result = await webUser.findById(req.params.id);
      res.json({
        success: true,
        message: "webUser read successfully",
        result: result,
      });
    } catch (error) {
      res.json({
        success: false,
        message: error.message,
      });
    }
};


export const updateSpecificWebUserController = async (req, res, next) => {
    try {
      let id = req.params.id;
      let data = req.body;
      delete data.email;
      delete data.password;
      let result = await webUser.findByIdAndUpdate(id, data, {
        new: true,
      });
      res.json({
        success: true,
        message: "webUser updates successfully",
        result: result,
      });
    } catch (error) {
      res.json({
        success: false,
        message: error.message,
      });
    }
};


export const deleteSpecificWebUserController = async (req, res, next) => {
    try {
      let result = await webUser.findByIdAndDelete(req.params.id);
      res.json({
        Success: true,
        message: "User deleted successfully",
        result: result,
      });
    } catch (error) {
      res.json({
        success: false,
        message: error.message,
      });
    }
};


export const myProfileController=async(req,res,next)=>{
    try {
    let _id=req._id;
    let result=await webUser.findById(_id);
    res.status(200).json({
      success:true,
      message:"read webUser profile successfully",
      result:result,
    })
    } catch (error) {
      res.status(400).json({
      success:false,
       message:error.message
      })
    }
};


export const readAllWebUserController=async(req,res,next)=>{
  try {
    let data=await webUser.find({});
    res.json({
      success:true,
      message:"all webUsers details",
      result:data,
    })
  } catch (error) {
    res.json({
      success:false,
      message:error.message
    })
  }
};


export const updateProfile=async(req,res,next)=>{
  try {
    let id=req._id;
    let data=req.body;
    delete data.email;
    delete data.password;
    
    let result=await webUser.findByIdAndUpdate(id,data,{new:true});
    res.json({
        success:true,
        message:"profile update successfully",
        result:data,
    })
} catch (error) {
    res.json({
        success:false,
    message:error.message
    })
}
};


export const updatePassword=async(req,res,next)=>{
  try {
    let id=req._id;
    let oldPassword=req.body.oldPassword;
    let newPassword=req.body.newPassword;
    let data=await webUser.findById(id);

    let hashedPassword=data.password;
    let isValidPassword=await bcrypt.compare(oldPassword,hashedPassword);
    if(isValidPassword){
      let newHashedPassword=await bcrypt.hash(newPassword,10)
      let result= await webUser.findByIdAndUpdate(
        id,
        {password:newHashedPassword},
        {new:true}
      );
      res.json({
        success:true,
        message:"password updated Successfully",
        result:result,
      })

    }
    else{
      throw error=new Error("Password already updated")
    }
  } catch (error) {
    res.json({
      success:false,
      message:error.message
    })
    
  }
};


export const forgotPassword=async(req,res,next)=>{
  try {
    let email=req.body.email;
    let user=await webUser.findOne({email:email});

    // Generate Token
    if(user){
      let infoObj={
         _id:user._id,
      }
      let expiryInfo={
        expiresIn:"5d",
      }
      let token= await jwt.sign(infoObj,secretKey,expiryInfo);
      await sendMail({
        from:"'n9solution'<shresthasagar7000@gmail.com>",
        to:email,
        subject:"Reset your Password",
        html:`
        <h2>Click this link to reset your Password</h2>
        <a href=" http://localhost:3000/reset-password?token=${token}">
        http://localhost:3000/reset-password?token=${token}
        </a>
        `})
        res.json({
        success:true,
        message:"link has been sent successfully",
        })
  
    }
    else{
      res.json({
        success:false,
        message:"email does not exist"
      })
    }
     
      
  } catch (error) {
    res.json({
      success:false,
      message:"email does not exist"
    })
  }
}


export const resetPassword=async(req,res,next)=>{
 try {
  let _id=req._id;
  let hashedPassword=await bcrypt.hash(req.body.password,10);
  let result=await webUser.findByIdAndUpdate(_id,{password:hashedPassword},{new:true});
 
  res.status(201).json({
    success:true,
    message:"password reset successfully",
    data:result,
  })
 } catch (error) {
  res.status(400).json({
    success:false,
    message:error.message
  })
 } 
}














