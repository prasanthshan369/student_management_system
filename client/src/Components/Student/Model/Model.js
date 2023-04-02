import React, { useEffect, useState } from "react";
import "../../Model.css";
import axios from "../../../axios";
const Model = ({ setShow, name, update, hanldeLoad }) => {
  const [course, setCourse] = useState([]);
  const [staff, setStaff] = useState([]);
  const [courseValue, setCourseValue] = useState({
    course_Name: "",
    _id: "",
  });
  const [staffValue, setStaffValue] = useState({
    staff_Name: "staff",
    _id: "",
  });
  const [form, setForm] = useState({
    student_Name: "",
    student_Number: "",
    student_Email: "",
    student_Image: "",
  });
  useEffect(() => {
    couses();
    staffs();
    if (update) {
      setForm({
        student_Name: update.student_Name,
        student_Image: update.student_Image,
        student_Number: update.student_Number,
        student_Email: update.student_Email,
      });
      setCourseValue({ course_Name: update.course_Name });
      setStaffValue({ staff_Name: update.staff_Name });
    }
  }, []);
  const couses = async () => {
    const { data } = await axios.get("/course/all");
    setCourse(data.data);
  };
  const staffs = async () => {
    const { data } = await axios.get("/staff/all");
    setStaff(data.data);
  };
  // console.log(staff[0].course._id);
  const handlechangeCourse = async (e) => {
    const curcourse = e.target.value;
    setCourseValue({ _id: curcourse });
    staff.forEach((item) => {
      if (curcourse == item.course._id) {
        setStaffValue({
          staff_Name: item.staff_Name,
          _id: item._id,
        });
      }
    });
  };
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
    if (name == "Update") {
      const id = update._id;
      const { data } = await axios.post(`/student/update/${id}`, {
        student_Name: form.student_Name,
        student_Image: form.student_Image,
        student_Number: form.student_Number,
        student_Email: form.student_Email,
        staff: staffValue._id,
        course: courseValue._id,
      });
      hanldeLoad();
      setShow(false);
      console.log(data);
    } else if (name == "Add") {
      const { data } = await axios.post("/student/create", {
        student_Name: form.student_Name,
        student_Image: form.student_Image,
        student_Number: form.student_Number,
        student_Email: form.student_Email,
        staff: staffValue._id,
        course: courseValue._id,
      });
      console.log(data);
      hanldeLoad();
      setShow(false);
    } else {
      setShow(false);
    }
  };

  return (
    <div className="modelmain__container">
      <div className="model__container">
        <div className="model_nav">
          <h1> Student</h1>
          <button className="model__close" onClick={() => setShow(false)}>
            Close
          </button>
        </div>
        <div className="model__form">
          <div className="model__formFiled">
            <label className="model__formTitle">Student Name : </label>
            <input
              className="model__formInput"
              name="student_Name"
              onChange={handleChange}
              value={form.student_Name}
            />
          </div>
          <div className="model__formFiled">
            <label className="model__formTitle">Student Image : </label>
            <input
              className="model__formInput"
              name="student_Image"
              onChange={handleChange}
              value={form.student_Image}
            />
          </div>
          <div className="model__formFiled">
            <label className="model__formTitle">Student Number : </label>
            <input
              className="model__formInput"
              name="student_Number"
              onChange={handleChange}
              value={form.student_Number}
            />
          </div>{" "}
          <div className="model__formFiled">
            <label className="model__formTitle">Student Email </label>
            <input
              className="model__formInput"
              name="student_Email"
              onChange={handleChange}
              value={form.student_Email}
            />
          </div>
          <div className="model__formFiled">
            <label className="model__formTitle">Courses </label>
            <select name="course" onChange={handlechangeCourse}>
              <option disabled="disabled" selected={true}>
                courses
              </option>
              {course.map((d, index) => {
                return (
                  <>
                    <option key={index} value={d._id}>
                      {d.course_Name},
                    </option>
                  </>
                );
              })}
            </select>
          </div>
          <div className="model__formFiled">
            <label className="model__formTitle">Staffs</label>
            <select onChange={handleChange} name="staff">
              <option disabled="disabled" selected={true}>
                {staffValue.staff_Name}
              </option>
            </select>
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
