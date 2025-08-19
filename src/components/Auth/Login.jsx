import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    let [formData,setLogin] = useState({
        email:"",
        password:""
    });

    const handleChange = (e)=>{
        
        setLogin((formData)=>({
            ...formData,
            [e.target.name]:e.target.value
        }))
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        handleLogin(formData);
        setLogin({
            email:"",
            password:""
        });
    }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 rounded-xl border-emerald-600 p-20'>
            <form className='flex flex-col items-center justify-center' onSubmit={submitHandler}>
                <input required className='outline-none bg-transparent border-2 border-emerald-600  text-xl py-3 px-5 rounded-full placeholder:text-gray-400' type="email"  placeholder='Enter Your Email' value={formData.email} onChange={handleChange} name="email"/>
                <input required className='outline-none bg-transparent border-2 border-emerald-600  text-xl py-3 px-5 rounded-full placeholder:text-gray-400 mt-3' type="password"  placeholder='Enter Password' value={formData.password} onChange={handleChange} name="password"/>
                <button className='text-white mt-5 border-none outline-none bg-emerald-600  text-xl py-3 px-5 w-full rounded-full placeholder:text-white' >Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login