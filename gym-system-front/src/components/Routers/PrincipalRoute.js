import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminPage from '../../pages/AdminPage/AdminPage'
import CreatePlan from '../../pages/AdminPage/CreatePlan'
import EditPlan from '../../pages/AdminPage/EditPlan'
import ShowPlans from '../../pages/AdminPage/ShowPlans'
import CreateUser from '../../pages/CreateUser/CreateUser'
import Home from '../../pages/Home/Home'
import LogIn from '../../pages/LogIn/LogIn'
import PrivateRoutes from './PrivateRoutes'
import PublicRouters from './PublicRouters'

export const PrincipalRoute = () => {
  const isLogged = true
  return (
    <BrowserRouter>
        <Routes>
                <Route path='/' element =  {<Home/>} ></Route>
                <Route path='/login' element = {<PublicRouters component = {LogIn} isLogged = {isLogged}/>}></Route>
                <Route path='/adminPage' element = {<PrivateRoutes component = {ShowPlans} isLogged = {isLogged} roles = {'admin'}/>}></Route>
                
                <Route path='/createPlan' element={ <CreatePlan/>} />
                <Route path='/editPlan/:id_plan' element={ <EditPlan/>} />
                
                <Route path='/createUser' element = {<PrivateRoutes component = {CreateUser} isLogged = {isLogged} roles = {'admin'}/>}></Route>

         </Routes>
    </BrowserRouter>
  )
}