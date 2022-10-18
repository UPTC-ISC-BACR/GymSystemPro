import { createSlice } from '@reduxjs/toolkit'
export const authSlice = createSlice({
    name:'auth',
    initialState:{
        status:'not-authenticated',//checking, not-authenticated, authenticated
        uid:null,
        email:null,
        displayName:null,
        errorMessage:null
    },
    reducers:{
        login:(state,{payload})=>{
            state.status='not-authenticated';//checking, not-authenticated, authenticated
            state.uid=payload.uid;
            state.email=payload.email;
            state.displayName=payload.displayName;
            state.errorMessage=null;
        },
        logout:(state,{payload})=>{
            state.status='not-authenticated';//checking, not-authenticated, authenticated
            state.uid=null;
            state.email=null;
            state.displayName=null;
            state.errorMessage=payload.errorMessagge;
        },
        checkingCredentials:(state)=>{
            state.status = 'checking';

        }
    }
})
export const {login,logout,checkingCredentials} = authSlice.actions;

