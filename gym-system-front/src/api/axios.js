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
    baseURL:'http://localhost:3000/api/admi'
})  
export const plansApi = axios.create({
    baseURL:'http://localhost:3000/api/plans'
})
export const personsApi =  axios.create({
    baseURL:'http://localhost:3000/persons/'
})
export const recordsApi = axios.create({
    baseURL:'http://localhost:3000/api/plans_records/'
})
export const exercisesApi = axios.create({
    baseURL:'http://localhost:3000/api/excercises/'
})
export const testApi = axios.create({
    baseURL:'http://localhost:3000/api/tests/'
})
exercisesApi.interceptors.request.use(config =>{
    config.headers ={
        ...config.headers,
        'x-token':localStorage.getItem('token')
    }
    return config
})
recordsApi.interceptors.request.use(config =>{
    config.headers ={
        ...config.headers,
        'x-token':localStorage.getItem('token')
    }
    return config
}) 
plansApi.interceptors.request.use(config =>{
    config.headers ={
        ...config.headers,
        'x-token':localStorage.getItem('token')
    }
    return config
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