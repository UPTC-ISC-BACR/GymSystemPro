import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import './LogIn.css'
import pic from "../../icons/programmer.png";
import {useRef,useState,useEffect} from 'react'
import { useContext } from "react";
import AuthContext from "../../context/AuthProvider";
import axios from "../../api/axios";
const LOGIN_URL = '/auth'
const LogIn =()=>{

    const {setAuth}= useContext(AuthContext)
    const userRef = useRef();
    const errRef = useRef()
    const [user, setUser] = useState('')
    const [pwd, setPwd] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState(false)

    

    useEffect(()=>{
      setErrMsg('')
    },[user,pwd])

    const handleSubmit = async(e)=>{
      e.preventDefault();
      try{
        const response= await axios.post(LOGIN_URL,JSON.stringify({user,pwd}),
            {
              headers:{'Content-Type':'application/json'},
              withCredentials:true
            }
          );
          console.log(JSON.stringify(response?.data))
          console.log(JSON.stringify(response?.data))
          const accesToken = response?.data?.accessToken;
          const roles = response?.data?.roles;
          setAuth({user,pwd,roles,accesToken})

        setUser('')
        setSuccess('')
      }catch(err){

      }
    }
    return <>
      <header>
        <NavBar />
      </header>
      <div className="form">
        <div id="formContent">
          <div className="fadeIn first">
            <img src={pic} className="SampleImage" id="icon" alt="User Icon" />
          </div>
          <form>
            <input type="text" id="username" ref={userRef} autoComplete="off" className="fadeIn second" name="login" placeholder="login" value={user} onChange={(e) => setUser(e.target.value)} />
            <input type="password" id="password" className="fadeIn third" name="login" placeholder="password" value={pwd} onChange={(e) => setPwd(e.target.value)} required />
            <input type="submit" className="fadeIn fourth" value="Log In" />
          </form>
          <div id="formFooter">
            <a className="underlineHover">Forgot Password?</a>
          </div>
        </div>
      </div>
    </>
}
export default LogIn