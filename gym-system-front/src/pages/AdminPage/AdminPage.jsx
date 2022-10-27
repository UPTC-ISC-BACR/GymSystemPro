import React from 'react'
import { BrowserRouter, Route,  Routes, useNavigate } from 'react-router-dom'
import SideBar from '../../components/SideBar/SideBar'
import  './AdminPage.css'
const AdminPage = () => {
    const navigate = useNavigate()

    const user = {
        name:'Santiago',
        correo:'santiago.moreno01@uptc.edu.co'
    }
    const registrerUser = ()=>{
        navigate('/createUser')
    }

  return (
    <>
        {/* <div className='buttons_register'>
        <button onClick={registrerUser}>Registrar </button>
       

        </div>
        <div className = 'user_data'>

        </div> */}
          <SideBar/>
         
    </>
  )
}

export default AdminPage