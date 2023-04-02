const nodemailer =require('nodemailer')
const Student=require('../model/Student')
const mailService = require('../middlewares/nodemailer');
const addStudent=async(req,res)=>{
    console.log(req.body);
    const d=await new Student(req.body)
    const data=await  d.save()
    //Mail Sending
    mailService(data.student_Name,data.student_Email)
        if(data){
            res.status(201).json({success:true,data})
        }else{
            res.json.status(400).json({success:false,message:"no student data"})
        }
}
const read=async(req,res)=>{
    const data=await Student.findOne({_id:req.body._id})
    if(data){
        res.status(201).json({success:true,data})
    }else{
        res.json.status(400).json({success:false,message:"no student data"})
    }
}
const update=async(req,res)=>{
    const data=await Student.findOneAndUpdate({_id:req.params.id},req.body)
    if(data){
        res.status(201).json({success:true,data})
    }else{
        res.json.status(400).json({success:false,message:"no student data"})
    }
}
const deletes=async(req,res)=>{
    const data=await Student.findOneAndDelete({_id:req.body._id})
    if(data){
        res.status(201).json({success:true,data})
    }else{
        res.json.status(400).json({success:false,message:"no student data"})
    }

}
const getStudent=async(req,res)=>{
    const data=await Student.find({}).populate([
        {path:'course',model:"courses",select:'course_Name',},
        {path:'staff',model:"staffs",select:'staff_Name'}
    ])
    if(data){
        res.status(201).json({success:true,data})
    }else{
        res.json.status(400).json({success:false,message:"no student data"})
    }
}
module.exports={
    addStudent,
    read,
    update,
    deletes,
    getStudent
}