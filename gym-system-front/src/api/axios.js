import axios from "axios";
export const usersApi =  axios.create({
    baseURL:'http://localhost:3000/api/users'
})
usersApi.interceptors.request.use(config =>{
    config.headers ={
        ...config.headers,
        'x-token':localStorage.getItem('token')
    }
    return config
})
export const adminApi = axios.create({
    baseURL:'http://localhost:3000/api/admin'
})  
export const plansApi = axios.create({
    baseURL:'http://localhost:3000/api/plans'
})
export const personsApi =  axios.create({
    baseURL:'http://localhost:3000/persons/'
})
adminApi.interceptors.request.use(config =>{
    config.headers ={
        ...config.headers,
        'x-token':localStorage.getItem('token')
    }
    return config
}) 
personsApi.interceptors.request.use(config =>{
    config.headers ={
        ...config.headers,
        'x-token':localStorage.getItem('token')
    }
    return config
}) 