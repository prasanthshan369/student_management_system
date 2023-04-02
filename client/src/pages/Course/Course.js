import React, { useEffect, useState } from "react";
import Model from "../../Components/Course/Model/Model";
import Navbar from "../../Components/Nav/Navbar";
import View from "../../Components/Course/View/View";
import "./Course.css";
import axios from '../../axios'
const Course = () => {
  const [datas, setDatas] = useState(false);
  const [show, setShow] = useState(false)

 
  useEffect(()=>{
   hanldeLoad()
   
  },[])
  const hanldeLoad=async()=>{
    const { data } = await axios.get("/course/all");
    setDatas(data.data);  
  }
  return (
    <div>
      <Navbar setShow={setShow} />
      {datas ? (
        <div className="container">
          <View  datas={datas}  hanldeLoad={hanldeLoad} />
          {
         show &&(
           <Model setShow={setShow} name="Add" hanldeLoad={hanldeLoad}/>
          ) }</div>
      ) : (
        <div>
       <h1>Empty</h1>
        </div>
      )}
    </div>
  );
};
export default Course;
