import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import './LogIn.css'
import pic from "../../icons/programmer.png";

const LogIn =()=>{
    return <>
        <header>
            <NavBar/>
        </header>
    <div className="form">
    <div id="formContent">
    <div className="fadeIn first">
      <img src={pic} className ="SampleImage" id="icon" alt="User Icon"   />
    </div>
    <form>
      <input type="text" id="login" className="fadeIn second" name="login" placeholder="login"/>
      <input type="text" id="password" className="fadeIn third" name="login" placeholder="password"/>
      <input type="submit" className="fadeIn fourth" value="Log In"/>
    </form>
    <div id="formFooter">
      <a className="underlineHover" href="#">Forgot Password?</a>
    </div>
    </div>
    </div>
    </>
}
export default LogIn