const Course = require("../model/Course")
const addCourse=async(req,res)=>{
const courseData= new Course({
    course_Image:req.body.course_Image,
    course_Name:req.body.course_Name,
    course_Date:req.body.course_Date,
    course_Lessons:req.body.course_Lessons,
    course_Rating:req.body.course_Rating
})
const data= await courseData.save()
res.status(201).json({success:true,data})
}
const read=async(req,res)=>{
    const data=await Course.findOne({_id:req.body._id})
    if(data){
        res.status(201).json({success:true,data})

    }else{
        res.json({message:"No user data"})
    }
}
const deletes=async(req,res)=>{
    const data=await Course.findOneAndDelete({_id:req.body._id})
    if(data){
        res.status(201).json({success:true,data})

    }else{
        res.json({message:"No user data"})
    }
    console.log(req.body);


}

const updates=async(req,res)=>{
 const {data}=await Course.findByIdAndUpdate({_id:req.params.id},req.body,{new:true})
 if(data){
    res.status(201).json({success:true,data})

}else{
    res.json({message:"No user data"})
}
}
const allData=async(req,res)=>{
    const data =await Course.find({})
    if(data){
        res.status(201).json({success:true,data})

    }else{
        res.json({message:"No user data"})
    }

}
module.exports={
    addCourse,allData,deletes,updates,read
}