import React, { useState } from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as IcoMoon from "react-icons/im"
import * as CG from "react-icons/cg";

export const SideBarData = [
    {
        title:'Home',
        path:'/adminPage',
        icon:<AiIcons.AiFillHome/>,
        cName:'nav-text'
    },
    {
        title:'Create User',
        path:'/adminPage/createUser',
        icon:<IcoMoon.ImUserPlus/>,
        cName:'nav-text'
        
    },
    {
        title:'Create Plan',
        path:'/adminPage',
        icon:<CG.CgGym/>,
        cName:'nav-text'
        
    },
   
]