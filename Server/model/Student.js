const mongoose=require('mongoose')

const studentSchema=mongoose.Schema({
    student_Name:{
        type:String,
    },
    student_Email:{
        type:String,
    },student_Number:{
        type:String,
    },student_Image:{
        type:String,
    },course:{
        type:mongoose.Types.ObjectId,
        ref:'courses'
    },staff:{
        type:mongoose.Types.ObjectId,
        ref:"staffs",
        default:""
    }
})

const Student=mongoose.model('students',studentSchema)
module.exports=Student;