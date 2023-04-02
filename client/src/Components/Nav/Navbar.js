import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../slices/userSlice'
import "./Nav.css"
const Navbar = ({setShow,name}) => {
  const dispatch=useDispatch()
const handleClick=()=>{
  if(name=="Logout"){
    dispatch(logout())
    localStorage.removeItem("token")
    setShow(true)
  }else{
    setShow(true)
  }
}
  return (
    <div>
      <div className='nav__container'>
        <h1 className='nav__head'>Admin</h1>
        <div className='nav__search'>
        <input placeholder='Search ' className='nav__input'/>
        <button className='nav__button'>Search</button>
        </div>
        <button className='nav__login' onClick={handleClick}>{name?name:"Create"}</button>
      </div>
    </div>
  )
}

export default Navbar