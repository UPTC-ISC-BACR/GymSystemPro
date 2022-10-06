import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import './LogIn.css'
import pic from "../../icons/programmer.png";
import {useRef,useState,useEffect} from 'react'
import { useContext } from "react";
import AuthContext from "../../context/AuthProvider";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "../../helpers/useForm";
const LOGIN_URL = 'http://localhost:3000/api/usuarios/register'
const LogIn =()=>{
    
    const {login}= useContext(AuthContext)
    const navigate = useNavigate();
    const userRef = useRef();
    const [formValues, handleInputChange] = useForm({
      nombre:'data',
      password:'data'
    });
     
   const onLogin = async(e)=>{
    e.prevent.default()
    try{
      const {data} = await axios.post('',
      {
        ...formValues,
      });
    }catch(err){
      console.log(err)
    }
    }
    login('Santiago')
    navigate('/',{
      replace:true
    })
   
    return <>
      <header>
        <NavBar />
      </header>
      <div className="form">
        <div id="formContent">
          <div className="fadeIn first">
            <img src={pic} className="SampleImage" id="icon" alt="User Icon" />
          </div>
          <form onSubmit={(e)=>onLogin(e)}>
            <input type="text" id="username" ref={userRef} autoComplete="off" className="fadeIn second" name="login" placeholder="login" value={'nombre'} onChange={handleInputChange} />
            <input type="password" id="password" className="fadeIn third" name="login" placeholder="password" value={'password'} onChange={handleInputChange} required />
            <input type="submit" className="fadeIn fourth" value="Log In"  />
          </form>
         
        </div>
      </div>
    </>
}
export default LogIn