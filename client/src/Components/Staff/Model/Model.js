import React,{ useEffect, useState } from "react";
import "../../Model.css"
import axios from "../../../axios";
const Model = ({ setShow, name, update,hanldeLoad }) => {
  const [course, setCourse] = useState([])
  const [form, setForm] = useState({
    staff_Image:"",
    staff_Name: "",
    staff_Number: "",
    Staff_Exp: "",
    course: "",
  });

  useEffect(() => {
    couses()
    if (update) {
      setForm({
        staff_Image:update.staff_Image,
        staff_Name: update.staff_Name,
        staff_Number: update.staff_Number,
        staff_Exp: update.staff_Exp,
        course: update.course,
      });
    }
    
  }, []);
  const couses=async()=>{
    const {data}=await axios.get('/course/all')
     setCourse(data.data)
     
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const hanleClick = async () => {
    if(name=="Update")
    {
      const id=update._id;
      const { data } = await axios.post(
        `/staff/update/${id}`,form
      );
      console.log(data);
     hanldeLoad()
      setShow(false)
    }
    else if(name=="Add") {
      const { data } = await axios.post("/staff/create", form);
      hanldeLoad()
    setShow(false);}else{
      setShow(false)
    }
   
  };

  return (
    <div className="modelmain__container">
      <div className="model__container">
        <div className="model_nav">
          <h1> Staff</h1>
          <button className="model__close" onClick={() => setShow(false)}>
            Close
          </button>
        </div>
        <div className="model__form">
          <div className="model__formFiled">
            <label className="model__formTitle">Staff Name : </label>
            <input
              className="model__formInput"
              name="staff_Name"
              onChange={handleChange}
              value={form.staff_Name}
            />
          </div>
          <div className="model__formFiled">
            <label className="model__formTitle">Staff Image : </label>
            <input
              className="model__formInput"
              name="staff_Image"
              onChange={handleChange}
              value={form.staff_Image}
            />
          </div>
          <div className="model__formFiled">
            <label className="model__formTitle">Staff Number : </label>
            <input
              className="model__formInput"
              name="staff_Number"
              onChange={handleChange}
              value={form.staff_Number}
            />
          </div>{" "}
          <div className="model__formFiled">
            <label className="model__formTitle">Staff Exp </label>
            <input
              className="model__formInput"
              name="staff_Exp"
              onChange={handleChange}
              value={form.staff_Exp}
            />
          </div>
          <div className="model__formFiled">
            <label className="model__formTitle">Courses </label>
            <select onChange={handleChange} name="course">
              <option disabled="disabled"  value={course._id}selected={true}>courses</option>
             {
              
                course.map((d, index) => {
                  return(
                    <>
                  <option key={index} value={d._id}>{d.course_Name}</option>;
                  
                    </>

                   
                  )
                })}      
          
            </select>
          </div>
          <button className="form__updateBtn" onClick={hanleClick} style={{marginRight:'180px'}}>
            {name}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Model