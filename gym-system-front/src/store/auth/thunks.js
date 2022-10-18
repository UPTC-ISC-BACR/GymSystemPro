import  axios  from "axios";
import { useDispatch } from "react-redux";
import { checkingCredentials } from "./authSlice"
const LOGIN_URL = 'http://localhost:3000/api/users/login'


export const checkingAuthentication = (email,password)=>{
    return async(dispatch)=>{
        dispatch(checkingCredentials())
    }
}
export const startLoginWithEmailPassword=  ({user_name,password})=>{
    return async (dispatch)=>{
        dispatch(checkingCredentials());
        
        const result = await axios.post(LOGIN_URL,JSON.stringify({user_name,password}))
        console.log(result)

    }
}