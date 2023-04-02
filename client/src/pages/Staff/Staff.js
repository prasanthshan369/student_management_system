import React,{useState,useEffect}from 'react'
import Navbar from '../../Components/Nav/Navbar'
import "./Staff.css"
import View from '../../Components/Staff/View/View'
import Model from '../../Components/Staff/Model/Model'
import axios from '../../axios'
const Staff = () => {
  const [datas, setDatas] = useState(false);
  const [show, setShow] = useState(false)

 
  useEffect(()=>{
   hanldeLoad()
   },[])
   const hanldeLoad=async()=>{
    const { data } = await axios.get("/staff/all");
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
       <h1>Empty</h1>
        </div>
      )}

    </div>
  )
}

export default Staff