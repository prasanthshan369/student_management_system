const path=require('path')
const multer=require('multer')

 const Storage=multer.diskStorage({

    destination:(req,file,cb)=>{
        cb(null,"../public/images")

        },
        filename:(req,file,cb)=>{
            cb(null,file.fieldname+"_"+Date.now()+path.extname)
        }
   
})
 const size=2*1000*1000
const upload =multer({
    storage:Storage,
    limits:{
        fileSize:size
    }
})
const uploadHandler=upload.single('student_Image')
module.exports=uploadHandler