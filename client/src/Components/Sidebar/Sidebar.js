import React, { Children } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getUser, logout } from '../../slices/userSlice'
import "./Sidebar.css"
const Sidebar = ({children}) => {
  let user=useSelector(getUser)
  console.log(user);
  const menuItem=[
    {
      path:'/',
      name:"Dashboard",
      icon:""
    },
    {
      path:'/course',
      name:"Course",
      icon:""
    },  {
      path:'/staff',
      name:"Staff",
      icon:""
    },  {
      path:'/student',
      name:"Student",
      icon:""
    },
  ]
  return (
    <div className='sidebar_container'>
  <div className='sidebar'>
    <h1 className='sidebar_text'>{
      user? user.username:"User"
}</h1>
<h2 style={{color:'gray',marginTop:'10px',marginLeft:'10px'}}>Main Navigation</h2>
    {
      menuItem.map((item,index)=>(
        <NavLink to={item.path} key={index} className="link">
          <div className='icon'>{item.icon}</div>
          <div className='link_text'>{item.name}</div>
        </NavLink>
      ))
    }
  </div>
<main>{children}</main>
    </div>
  )
}

export default Sidebar