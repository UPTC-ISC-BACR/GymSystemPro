import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import './LogIn.css'
import pic from "../../icons/programmer.png";
import {useRef,useState,useEffect} from 'react'
import { useContext } from "react";
import AuthContext from "../../context/AuthProvider";
import axios from "../../api/axios";
import { useForm } from "../../helpers/useForm";
import {useDispatch, useSelector} from 'react-redux'
import { checkingAuthentication, startLoginWithEmailPassword } from "../../store/auth/thunks";
import { useMemo } from "react";

const LogIn =()=>{

  const {status} =  useSelector(state=>state.auth)
  const dispatch = useDispatch();//Permite hacer dispatch de acciones en cualquier lugar
    const [formValues, handleInputChange] = useForm({
      email:'email',
      password:'pass'
    });
  const isAuthenticating = useMemo(()=>status === 'checking',[status])
    const {email,password} = formValues
   const onLogin = (event)=>{
    event.preventDefault()
    console.log('asdfas')
    dispatch(startLoginWithEmailPassword({email,password}))
    // try{
    //   const {data} = await axios.post('api/login',
    //   {
    //   //  ...formValues,
    //   })
    //   console.log(data)
    // }catch(err){
    //   console.log(err)
    // }
    }
    
   
   
    return <>
      
        <NavBar />
    
      <div className="form-padre">

      <div className="form-children">
        
        <div className="formContent">
          <div className="fadeIn first">
            <img src={pic} className="SampleImage" id="icon" alt="User Icon" />
          </div>
          <form onSubmit={onLogin}>
            <input type="text" id="username"  autoComplete="off" className="fadeIn second" name="email" placeholder="email" value={email} onChange={handleInputChange}/>
            <input type="password" id="password" className="fadeIn third" name="password" placeholder="password" value={password} onChange={handleInputChange}  />
            <button type="submit" disabled={isAuthenticating}></button>
          </form>
         
        </div>
      </div>
      </div>
    </>
}
export default LogIn