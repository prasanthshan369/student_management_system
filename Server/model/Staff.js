const mongoose=require('mongoose')

const staffSchema=mongoose.Schema({
    staff_Image:{
        type:String,
    },
    staff_Name:{
        type:String,required:true
    },staff_Number:{
        type:String,required:true
    },staff_Exp:{
        type:String,required:true
    },course:{
        type:mongoose.Types.ObjectId,
        ref:"courses",
        default:""
    }
})

const Staff=mongoose.model('staffs',staffSchema)
module.exports=Staff;