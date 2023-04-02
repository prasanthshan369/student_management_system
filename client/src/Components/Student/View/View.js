
import React,{useState,useEffect} from 'react'
import "../../Course/View/View.css"
import image from "../../../assets/html.png";
import Model from "../Model/Model";
import axios from "../../../axios"; 
const View = ({ datas,hanldeLoad }) => {
  const [updateData, setUpdateData] = useState();
  const [show, setShow] = useState();
  const [btnName, setBtnName] = useState()
  const handleUpdate = async (e) => {
  const { data } = await axios.post("/student/read", { _id: e.target.value });
  setUpdateData(data.data);
  setShow(true);
  setBtnName("Update")
};
const handleView=async(e)=>{
  await handleUpdate(e)
  setBtnName("Back")
  setShow(true);
}
const handleDelete=async(e)=>{
  const{data}=await axios.post('/student/delete',{_id:e.target.value })
  hanldeLoad()
}

  return (
    <div className="container">
    {datas.map((datas, i) => (
     <div className="container__view" key={i}>
     <img src={datas.student_Image} className="view__image" />
     <div className="view__content">
       <div className="flex">
         <h3 className="flex_text">{datas.student_Name}</h3>
         <p className="flex_text"> {datas.student_Number}</p>
       </div>
       <div className="flex">
         <p className="flex_text_email">{datas.student_Email}</p>


         </div>
       <div className="flex">
         <button
           className="view__updateBtn"
           onClick={handleUpdate}
           value={datas._id}
         >
           Update
         </button>
         <button className="view__ViewBtn" value={datas._id} onClick={handleView}>View</button>
         <button className="view__deleteBtn" value={datas._id} onClick={handleDelete}>Delete</button>
       </div>
     </div>
   </div>
    ))}

    {show && <Model setShow={setShow} name={btnName} update={updateData} hanldeLoad={hanldeLoad}/>}
  </div>
  )
  }


export default View