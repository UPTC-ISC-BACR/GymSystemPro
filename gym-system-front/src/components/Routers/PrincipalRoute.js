import { useSelect } from '@mui/base'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminPage from '../../pages/AdminPage/AdminPage'
import CoachPage from '../../pages/CoachPage/CoachPage'
import CreateUser from '../../pages/CreateUser/CreateUser'
import Home from '../../pages/Home/Home'
import LogIn from '../../pages/LogIn/LogIn'
import { CheckingAuth } from '../../ui/components/CheckingAuth'
import PrivateRoutes from './PrivateRoutes'
import PublicRouters from './PublicRouters'

export const PrincipalRoute = () => {
  const isLogged = true
  const {status,type} = useSelector(state=>state.auth)
 
  return (
    <BrowserRouter>
        <Routes>
          {((status ==='authenticated') && (type === 'Ad'))?<Route path='/adminPage' element = {<AdminPage/>}/>:<Route path="/" element={<Home/>} />}
          {((status ==='authenticated') && (type === 'En'))?<Route path='/coachPage' element = {<CoachPage/>}/>:<Route path="/" element={<Home/>} />}
           <Route path='/login' element = {<PublicRouters component = {LogIn} isLogged = {isLogged}/>}></Route>
           <Route path='/createUser' element = {<PrivateRoutes component = {CreateUser} isLogged = {isLogged} roles = {'admin'}/>}></Route>

         </Routes>
    </BrowserRouter>
  )
}