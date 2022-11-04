import axios from "axios";
export const usersApi =  axios.create({
    baseURL:'http://localhost:3000/api/'
})
usersApi.interceptors.request.use(config =>{
    config.headers ={
        ...config.headers,
        'x-token':localStorage.getItem('token')
    }
    return config
})  
export const personsApi =  axios.create({
    baseURL:'http://localhost:3000/persons/'
})
personsApi.interceptors.request.use(config =>{
    config.headers ={
        ...config.headers,
        'x-token':localStorage.getItem('token')
    }
    return config
}) 