import React, { useState } from "react";
import './HamburguerMenuStyle.css'
const HamburguerMenu =()=>{
    const [burguerClass,setBurguerClass] = useState("burguer_bar  unclicked");
    const [menu_class, setmenu_class] = useState("menu hidden")
    const [isMenuClicked, setisMenuClicked] = useState(false)

    const updateMenu = ()=>{
        if(!isMenuClicked){
            setBurguerClass("burguer_bar clicked")
            setmenu_class("menu visible")
        }else{
            setBurguerClass("burguer_bar unclicked")
            setmenu_class("menu hidden")
        }
        setisMenuClicked(!isMenuClicked)
    }
    return <>
    <nav>
        <div className="burguerMenu" onClick = {updateMenu}>
                <div className={burguerClass} ></div>
                <div className={burguerClass} ></div>
                <div className={burguerClass} ></div>
                <div className={burguerClass} ></div>
        </div>
    </nav>
    </>
}
export default HamburguerMenu