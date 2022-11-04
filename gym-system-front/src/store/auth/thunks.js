import  axios  from "axios";
import { useDispatch } from "react-redux";
import { usersApi } from "../../api/axios";
import { checkingCredentials, login, logout ,registerSuccess} from "./authSlice"
const LOGIN_URL = 'http://localhost:3000/api/users/login'
const LOGIN_REGISTER = 'http://localhost:3000/api/persons/register'

export const checkingAuthentication = (email,password)=>{

    return async(dispatch)=>{
        dispatch(checkingCredentials())
    }
}
export const startLoginWithEmailPassword=  ({user_name,password})=>{
    const config = {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        }
      };
    return async (dispatch)=>{
        dispatch(checkingCredentials());
        await axios.post(LOGIN_URL, {user_name:user_name,
        password:password},config.headers)
            .then(response =>
                {
                localStorage.setItem('token',response.data.success)
                localStorage.setItem('token-init-date',new Date().getTime())
                dispatch(login(response.data))
                })
            .catch(error=>dispatch(logout(error.response.data)))
    }
}
export const starRegister = (data)=>{
    console.log(data)
    return async(dispatch)=>{
            await axios.post(LOGIN_REGISTER,JSON.stringify(data))
                .then(response=>dispatch(registerSuccess()))
                .catch(error=>dispatch(starRegister()))
    }
}
export const startLogOut=(dispatch)=>{
    localStorage.clear();
   
    
    
}
export const checkAuthToken =  ()=>{
    const token = localStorage.getItem('token')

    if(!token){
        return (dispatch)=>{
            dispatch((logout('LogOut')))
        } 
    } 
    return async(dispatch)=>{
        await usersApi.get('users/renew')
            .then(response=>  {
                localStorage.setItem('token',response.data.success)
                localStorage.setItem('token-init-date',new Date().getTime())
                dispatch(login(response.data))
                })
            .catch(error=>{
                localStorage.clear()
                dispatch(logout(error.response.data))})
    }
}