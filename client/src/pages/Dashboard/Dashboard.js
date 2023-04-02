import React, { useEffect, useState } from 'react'
import Model from '../../Components/Dashboard/Model/Model'
import Navbar from '../../Components/Nav/Navbar'
import "./Dashboard.css"
import course from '../../assets/course.jpg'
import staff from '../../assets/staff.jpeg'
import student from '../../assets/student.jpeg'
import axios from '../../axios'

import {useDispatch, useSelector}from 'react-redux'
import { getUser, handleLogins } from '../../slices/userSlice'
import { hanldeLoad } from '../Course/Course'
const Dashboard = () => {
  const [tcourse, setTcourse] = useState("")
  const [tstudent, setTstudent] = useState("")
  const [tsatff, setTsatff] = useState("")
  const [show, setShow] = useState(false)
  const dispatch=useDispatch()
  const user=useSelector(getUser)
  useEffect(()=>{
    let token=localStorage.getItem('token')
    if(token && !user){
      hanldeLoad() 
      dispatch(handleLogins(token))
    }
  
  },[])
  const hanldeLoad=async()=>{
    const c  = await axios.get("/course/all");
    setTcourse(c.data.data); 
    const s = await axios.get("/staff/all");
    setTsatff(s.data.data);   
    const std = await axios.get("/student/all");
    setTstudent(std.data.data);  
  }

    return (
    <div className='dashboard'>
      <Navbar name={user ? "Logout":"Login"} setShow={setShow}/>
      <div className='dash__container'>
       <div className='dash__detail'>
       <div className='dash__box'>  
          <img src={course} className='dash__boxicon'/>
          <div className='dash__boxdetail'>
            <h1>Courses</h1>
            <h2>{tcourse.length}</h2>
          </div>

        </div> <div className='dash__box'>
        <img src={staff} className='dash__boxicon'/>
          <div className='dash__boxdetail'>
            <h1>Staffs</h1>
            <h2>{tsatff.length}</h2>
          </div>

        </div>
        <div className='dash__box'>
          
          <img src={student} className='dash__boxicon'/>
        
          <div className='dash__boxdetail'>
            <h1>Students</h1>
            <h2>{tstudent.length}</h2>

          </div>

        </div>
       </div>

      </div>
        <div className="container">
          {
         show &&( 
           <Model setShow={setShow} name="Login"/>
          ) }</div>

    </div>
  )
}

export default Dashboard