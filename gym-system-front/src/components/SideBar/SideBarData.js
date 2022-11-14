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
        title:'Asignar Plan',
        path:'/adminPage/assignPlan',
        icon:<IcoMoon.ImUserPlus/>,
        cName:'nav-text'
        
    },
    {
        title:'Create Plan',
        path:'/adminPage/createPlan',
        icon:<CG.CgGym/>,
        cName:'nav-text'
        
    },
    {
        title:'Show Plans',
        path:'/adminPage/showPlans',
        icon:<CG.CgGym/>,
        cName:'nav-text'
    }
   
]

export const SideBarDataClient = [
    {
        title:'Home',
        path:'/userPage',
        icon:<AiIcons.AiFillHome/>,
        cName:'nav-text'
    },
    {
        title:'Show Billing History',
        path:'/userPage/billingHistory',
        icon:<IcoMoon.ImUserPlus/>,
        cName:'nav-text'
        
    },
    {
        title:'Create Plan',
        path:'/adminPage/createPlan',
        icon:<CG.CgGym/>,
        cName:'nav-text'
        
    }
   
]