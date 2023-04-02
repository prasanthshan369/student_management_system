import axios from "../../../axios";
import React, { useState } from "react";
import "../../Model.css";
import { useDispatch, useSelector } from "react-redux";
import { getUser, handleLogins } from "../../../slices/userSlice";
const Model = ({ setShow, name, }) => {
  const dispatch=useDispatch()
  const [commonError, setCommonError] = useState('')
  const [form, setForm] = useState({
    email:"",
    password: "",
    username:""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleLogin= async()=> {
    const {data}=await axios.post('/user/login',form)
    if(data.success==true){
      localStorage.setItem("token",data.token)
      dispatch(handleLogins(data.token))
    setShow(false)
    setCommonError(data.message);
    }else{
      setCommonError(data.message);
    }
  };
  const handleRegister= async () => {
    const {data}=await axios.post('/user/signup',form)
    if(data.success==true){
      localStorage.setItem("token",data.token)
      dispatch(handleLogins(data.token))
    setShow(false)
    setCommonError(data.message); 
    }else{
      setCommonError(data.message);
    }
  };
  return (
    <div className="modelmain__container">
      <div className="model__container">
        <div className="model_nav">
          <h1 style={{fontSize:'25px'}}> Login and Register</h1>
          <button className="model__close" onClick={() => setShow(false)}>
            Close
          </button>
        </div>
        <div className="model__form">
        <div className="model__formFiled">
            <label className="model__formTitle">Username : </label>
            <input
              className="model__formInput"
              name="username"
              placeholder="username"
              onChange={handleChange}
              value={form.username}
            />
          </div>
          <div className="model__formFiled">
            <label className="model__formTitle">Email : </label>
            <input
              className="model__formInput"
              name="email"
              placeholder="abc@gmail.com"
              onChange={handleChange}
              value={form.email}
            />
          </div>
          <div className="model__formFiled">
            <label className="model__formTitle">Password : </label>
            <input
              className="model__formInput"
              name="password"
              placeholder="*********"
              onChange={handleChange}
              value={form.password}
            />
          </div>
          <h4 style={{color:'red',fontSize:"20px",marginTop:'15px',marginLeft:"25px"}}>{commonError}</h4>
          <div style={{textAlign:'center',marginRight:'100px',marginTop:'10px'}}>
          <button className="form__updateBtn" onClick={handleLogin}>
            Login
          </button>
          <button className="form__updateBtn" onClick={handleRegister}>
            Register
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model;
