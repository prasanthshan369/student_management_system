
const { request } = require("express");
const Staff = require("../model/Staff");

const addStaff = async (req, res) => {
  const staffData = new Staff({
    staff_Image:req.body.staff_Image,
    staff_Name:req.body.staff_Name,
    staff_Exp:req.body.staff_Exp,
    staff_Number:req.body.staff_Number,
    course:req.body.course
  })

  const data = await staffData.save();
  res.json(data);
};
const read=async(req,res)=>{
  const data=await Staff.findOne({_id:req.body._id}).populate('course','course_Name')
  if(data){
    res.json({data})
  }else{
    res.json({message:"no staff data"})
  }
}
const update=async(req,res)=>{
  const data=await Staff.findByIdAndUpdate({_id:req.params.id},req.body)
  if(data){
    res.json({data})
  }else{
    res.json({message:"no staff data"})
  }
}
const deletes=async(req,res)=>{
  const data=await Staff.findOneAndDelete({_id:req.body._id})
  if(data){
    res.json({data})
  }else{
    res.json({message:"no staff data"})
  }

}
const allData=async(req,res)=>{
    const data=await Staff.find({}).populate('course',"course_Name")
    if(data){
      res.json({data})
    }else{
      res.json({message:"no staff data"})
    }
}
module.exports = {
  addStaff,
  read,
  update,
  deletes,
  allData,
};
