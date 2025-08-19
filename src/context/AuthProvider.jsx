import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage } from '../utills/localStorage';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    let [userData ,setUserData] = useState(null)

    useEffect(()=>{
        const {employees,admin} = getLocalStorage();
        setUserData({employees,admin})
    },[])


  return (
    <div>
        <AuthContext.Provider value={userData}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider