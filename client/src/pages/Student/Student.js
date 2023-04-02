import React,{useState,useEffect}from 'react'
import Navbar from '../../Components/Nav/Navbar'
import "./Student.css"
import View from '../../Components/Student/View/View'
import Model from '../../Components/Student/Model/Model'
import axios from '../../axios'
const Student = () => {
  const [datas, setDatas] = useState(false);
  const [show, setShow] = useState(false)
 

   useEffect(()=>{
   hanldeLoad()
 
  },[])
  const hanldeLoad=async()=>{
    const { data } = await axios.get("/student/all");
    setDatas(data.data)
  }
  return (
    <div>
      <Navbar setShow={setShow}/>
      {datas ? (
        <div className="container">
          <View  datas={datas}  hanldeLoad={hanldeLoad} />
          {
         show &&(
           <Model setShow={setShow} name="Add" hanldeLoad={hanldeLoad}/>
          ) }</div>
      ) : (
        <div>
       <h1>List is empty</h1>
        </div>
      )}

    </div>
  )
}

export default Student