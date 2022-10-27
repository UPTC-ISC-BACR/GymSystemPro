import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SideBarData } from './SideBarData';
import './SideBar.css'
import { IconContext } from 'react-icons/lib';

const SideBar = () => {
    const [sidebar, setsidebar] = useState(false)

    const showSideBar =()=>setsidebar(!sidebar)

  return (
    <>
    {/* <IconContext.Provider value={{color:'#fff'}}> */}

    <div className='SideBar'>
        <Link to="" className='menu-bars'>
            <FaIcons.FaBars onClick={showSideBar}/>
        </Link>
    </div>
    <nav className={sidebar ? 'nav-menu active':'nav-menu'}>
        <ul className='nav-menu-items' onClick={showSideBar}>
            <li className='navbar-toggle'>
            <Link to= '#' className = 'menu-bars'>
                <AiIcons.AiOutlineClose/>
            </Link>
            </li>
            {SideBarData.map((item,index)=>{
                return (
                    <li key={index} className={item.cName}>
                        <Link to = {item.path}>
                        {item.icon}
                        <span>{item.title}</span>
                        </Link>
                    </li>

                )
            })}
        </ul>
    </nav>
    {/* </IconContext.Provider> */}
    </>
  )
}

export default SideBar