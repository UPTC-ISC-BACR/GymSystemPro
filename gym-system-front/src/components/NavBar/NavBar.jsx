import React , {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import HamburguerMenu from "../HamburguerMenu/HamburguerMenu";
import './NavBar.css'
const NavBar =()=>{
    //const navigate = useNavigate()
    //useEffect(()=>{
       // navigate('/login')

    //})
    //const navigateLogIn =()=>{
    //}
    return <div>
        <nav>
            <ul>
                <li>Home</li>
                <li>Contact</li>
                <div className="buttons">
                <button className="button-3" >Log In</button>
                <button className="button-3">Sign In</button>
                </div>
            </ul>

        </nav>

    </div> 
}
export default NavBar;