import  axios  from "axios";
import { useDispatch } from "react-redux";
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
            .then(response =>dispatch(login(response.data)))
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