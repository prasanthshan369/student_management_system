import axios from "../../../axios";
import React, { useEffect, useState } from "react";
import "../../Model.css";
const Model = ({ setShow, name, update,hanldeLoad }) => {
  const [form, setForm] = useState({
    course_Image:"",
    course_Name: "",
    course_Rating: "",
    course_Date: "",
    course_Date: "",
    course_Lessons: "",
  });
  useEffect(() => {
    if (update) {
      setForm({
        course_Name: update.course_Name,
        course_Rating: update.course_Rating,
        course_Lessons: update.course_Lessons,
        course_Date: update.course_Date,
        course_Image:update.course_Image
      });
    }
  }, []);
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
        `/course/updates/${id}`,form
      );
     hanldeLoad()
      setShow(false)
    }
    else if(name=="Add") {
      const { data } = await axios.post("/course/create", form);
      hanldeLoad()
    setShow(false);}else{
      setShow(false)
    }

  };
  return (
    <div className="modelmain__container">
      <div className="model__container">
        <div className="model_nav">
          <h1> Course</h1>
          <button className="model__close" onClick={() => setShow(false)}>
            Close
          </button>
        </div>
        <div className="model__form">
          <div className="model__formFiled">
            <label className="model__formTitle">Course Name : </label>
            <input
              className="model__formInput"
              name="course_Name"
              onChange={handleChange}
              value={form.course_Name}
            />
          </div>
          <div className="model__formFiled">
            <label className="model__formTitle">Course Image : </label>
            <input
              className="model__formInput"
              name="course_Image"
              onChange={handleChange}
              value={form.course_Image}
            />
          </div>
          <div className="model__formFiled">
            <label className="model__formTitle">Course Rating : </label>
            <input
              className="model__formInput"
              name="course_Rating"
              onChange={handleChange}
              value={form.course_Rating}
            />
          </div>{" "}
          <div className="model__formFiled">
            <label className="model__formTitle">Lessong </label>
            <input
              className="model__formInput"
              name="course_Lessons"
              onChange={handleChange}
              value={form.course_Lessons}
            />
          </div>
          <div className="model__formFiled">
            <label className="model__formTitle">Course Date </label>
            <input
              className="model__formInput"
              type="date"
              name="course_Date"
              onChange={handleChange}
              value={form.course_Date}
            />
          </div>
          <button className="form__updateBtn" onClick={hanleClick} style={{marginRight:'180px'}}>
            {name}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Model;
