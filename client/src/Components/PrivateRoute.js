import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate,Outlet } from 'react-router-dom'
import { getUser, handleLogins } from '../slices/userSlice'

const PrivateRoute = () => {
    const [loading, setLoading] = useState(true)
    const user=useSelector(getUser)
    const dispatch=useDispatch()
    useEffect(()=>{
        const token=localStorage.getItem("token")
        if(token && !user){
            dispatch(handleLogins(token))
        }
        setTimeout(() => {
            setLoading(false)
        }, 500);
    },[])
    if(loading){
        return <h1>Loading . . . </h1>
    }
    if(!user){
       return <Navigate to='/'/>
    }
  return <Outlet/>
}

export default PrivateRoute