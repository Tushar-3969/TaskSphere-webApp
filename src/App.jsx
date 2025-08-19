import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utills/localStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  let [user,setUser] = useState(null);
  const authData = useContext(AuthContext);
  
  useEffect(()=>{
    if(authData){
      const loggedInUser = localStorage.getItem("loggedInUser")
      if(loggedInUser){
        setUser(loggedInUser.role)
      }
    }
  },[authData]);

  const handleLogin = (formData)=>{

    if(formData.email=="admin@me.com" && formData.password == "123"){
      setUser("admin");
      localStorage.setItem('loggedInUser',JSON.stringify({role:"admin"}))
    }
    else if (authData && authData.employees.find((e)=>formData.email==e.email && formData.password == e.password)){
      setUser("employee")
      localStorage.setItem('loggedInUser',JSON.stringify({role:"employee"}))
    }else{
      alert("Invalid Credential");
    }
  }


  

  return (
    <>
    {!user?<Login handleLogin={handleLogin}/>:""}
    {user=="admin"?<AdminDashboard/>:<EmployeeDashboard/>}
    {/* <EmployeeDashboard/> */}
    {/* <AdminDashboard/> */}
    </>
  )
}

export default App
