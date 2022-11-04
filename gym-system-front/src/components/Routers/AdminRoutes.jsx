import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminPage from '../../pages/AdminPage/AdminPage'
import CreatePlan from '../../pages/AdminPage/CreatePlan'
import CreateUser from '../../pages/CreateUser/CreateUser'
import Home from '../../pages/Home/Home'

const AdminRoutes = () => {


  return (
    <>
    <Routes>
        <Route path='/' element = {<AdminPage/>}/>
        <Route path='/createUser' element = {<CreateUser/>}/>
        <Route path='/createPlan' element = {<CreatePlan/>}/>
    </Routes>
    </>
  
  )
}

export default AdminRoutes