import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserBillingHistory from '../../pages/UserBillingHistory/UserBillingHistory'
import UserPage from '../../pages/UserPage/UserPage'

const UsersRoutes = () => {
  return (
   <Routes>
        <Route path='/' element={<UserPage/>} />
        <Route path='/billingHistory' element={<UserBillingHistory/>}/>
   </Routes>
  )
}

export default UsersRoutes