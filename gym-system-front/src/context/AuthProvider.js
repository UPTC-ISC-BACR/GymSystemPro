import {createContext,useState} from 'react'
import React from 'react'

const AuthContext = createContext({});
export const AuthProvider = ({children})=>{
    const [auth, setauth] = useState({})
    return (
        <AuthContext.Provider value ={{auth,setauth}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContext

