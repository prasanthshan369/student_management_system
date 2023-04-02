import React, { useState } from "react";
import "./View.css";
import image from "../../../assets/html.png";
import Model from "../Model/Model";
import axios from "../../../axios";
const View = ({ datas,hanldeLoad }) => {
  const [updateData, setUpdateData] = useState();
  const [show, setShow] = useState(false);
  const [btnName, setBtnName] = useState()
  const handleUpdate = async (e) => {
    const { data } = await axios.post("/course/read", { _id:e.target.value });
    setUpdateData(data.data);
    setShow(true)
    setBtnName("Update")
  };
  const handleView=async(e)=>{
  await  handleUpdate(e)
    setBtnName("Back")
    setShow(true);

  }
  const handleDelete=async(e)=>{
  const d=  await axios.post("/course/delete",{_id:e.target.value });
    hanldeLoad()
  }
  return (
    <div className="container">
      {datas.map((datas, i) => (
        <div className="container__view" key={i}>
          <img src={datas.course_Image} className="view__image" />
          <div className="view__content">
            <div className="flex">
              <h3 className="flex_text">{datas.course_Name}</h3>
              <p className="flex_text">Rat: {datas.course_Rating}</p>
            </div>
            <div className="flex">
              <p className="flex_text">Les: {datas.course_Lessons}</p>
              <p className="flex_text"> {datas.course_Date}</p>
            </div>
            <div className="flex">
              <button className="view__updateBtn"onClick={handleUpdate} name="update"value={datas._id}>Update</button>
              <button className="view__ViewBtn"onClick={handleView} name="view"value={datas._id}>View</button>
              <button className="view__deleteBtn" value={datas._id} onClick={handleDelete}>Delete</button>
            </div>
          </div>
        </div>
      ))}

      {show && <Model setShow={setShow} name={btnName} update={updateData}  hanldeLoad={hanldeLoad}/>}
    </div>
  );
};

export default View;
