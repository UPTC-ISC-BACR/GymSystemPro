import React from 'react'
import { Navigate } from 'react-router-dom'
import {isLogIn} from '../../helpers/helper'
const PrivateRoutes = ({component: Component,...rest}) => {
    const isLogged = true
    if(isLogged){
        return <Component {...rest}/>
    }
    return <Navigate to="/login"/>
}

export default PrivateRoutes