import { createSlice } from '@reduxjs/toolkit'
export const authSlice = createSlice({
    name:'auth',
    initialState:{
        status:'not-authenticated',//checking, not-authenticated, authenticated
        uid:null,
        type:null,
        user:null,
        errorMessage:null
    },
    reducers:{
        login:(state,{payload})=>{
            state.status='authenticated';//checking, not-authenticated, authenticated
            state.uid=payload.uid;
            state.type=payload.type;
            state.user=payload.user;
            state.errorMessage=null;
        },
        logout:(state,{payload})=>{
            console.log('logOut')
            state.status='not-authenticated';//checking, not-authenticated, authenticated
            state.uid=null;
            state.displayName=null;
            state.errorMessage=payload.errorMessage;
        },
        checkingCredentials:(state)=>{
            state.status = 'checking';
        },
        register:(state,{payload})=>{
            state.status='register'
            state.errorMessage=payload.errorMessagge;
        },
        registerSuccess:(state)=>{
            state.status='register-success'
            state.errorMessage=null
        }
    }
})
export const {login,logout,checkingCredentials,registerSuccess} = authSlice.actions;

