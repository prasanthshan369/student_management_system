const jwt=require('jsonwebtoken')
const User = require('../model/User')
const verifiyAccount=async(req,res,next)=>{
   const token=req.headers["authorization"]
   if(token){
    jwt.verify(token,process.env.SECRET_KEY,async(err,decoded)=>{
        if(err){
            res.status(401).json({message:"Access Denied"})
            return
        }
        else{
            const data=await User.findById({_id:decoded.userId}).select(" -__v -password")
            if(data){
               req.user=data   
                    next()
            }else{
            res.status(401).json({message:"Access Denied"})

            }

        }

    })
   }
}
module.exports=verifiyAccount