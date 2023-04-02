const mongoose = require("mongoose");
const courseSchema = mongoose.Schema(
  {
    course_Image: {
      type: String,
      
    },
    course_Name: {
      type: String,
      required: true,
    },
    course_Rating: {
      type: String,
      required:true
    },
    course_Date: {
      type: String,
      default:Date.now()
    },course_Lessons:{
        type:String
    }
  },
);
const Course = mongoose.model("courses", courseSchema);
module.exports = Course;
