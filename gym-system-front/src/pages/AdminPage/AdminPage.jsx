import React from 'react'
import { useNavigate } from 'react-router-dom'
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
        <div className='buttons_register'>
        <button onClick={registrerUser}>Registrar </button>
       

        </div>
        <div className = 'user_data'>

        </div>
    </>
  )
}

export default AdminPage