import { webUser } from "../schema/model.js";

export let isAuthorization=(roles)=>{
    return async(req,res,next)=>{
        try {
            let id=req._id;
            let result=await webUser.findById(id);
            let tokenRole=result.role;
            if(roles.includes(tokenRole)){
                next()
            }
            else{
                res.status(403).json({
                    success:false,
                    message:  "user not authorized"
                })
            }
        } catch (error) {
            res.status(400).json({
                success:false,
                message:error.message

    
            })
            
        }
     }
}

