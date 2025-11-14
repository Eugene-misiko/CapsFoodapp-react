import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Login = ({setShowLogin}) => {

    const [currState,setCurrState] = useState("Login")
  return (
    <div className='absolute z-[1] w-full h-full bg-[#00000090] grid'>
      <form  className=' mx-auto place-items-center my-auto 
        w-[max(23vw,390px)] text-[#808080] bg-white flex 
        flex-col gap-[25px] pt-[25px] pr-[0px] rounded-[8px] text-[14px]
         animate-[fadeIn_0.5s_ease-in-out] '>
        <div className='flex justify-space-between items-center text-black gap-70'>
            <h2 className='font-bold'>{currState}</h2>
            <img className='w-[16px] cursor-pointer' onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className='flex flex-col gap-[20px]'>
            {currState==="Login"?<></>:<input type="text" className='outline-none border border-gray-300 rounded-[4px] p-[10px]' placeholder='Your name' required/>}
            <input className='outline-none border border-gray-300 rounded-[4px] p-[10px]' type="email" placeholder='Your email' required/>
            <input className='outline-none border border-gray-300 rounded-[4px] p-[10px]' type="password" placeholder='Password' required />
        </div>
        <button className='border-none p-[8px] rounded-[4px] text-white bg-red-500 text-[15px] cursor-pointer'>{currState==="Sign Up"?"Create account":"Login"}</button>
        <div className='flex items-start gap-[8px] mt-[-15px]'>
            <input className='mt-[5px]'  type="checkbox" required/>
            <p>By continuing, I agree to the terms of use & privacy.</p>
        </div>
        {currState==="Login"?
         <p className='m-10'>Create a new account?<span onClick={()=>setCurrState("Sign Up")} className='cursor-pointer text-red-500 font-medium m-10 font-medium'>Click here</span></p>
      :<p className=' m-10'>Already have an account?<span onClick={()=>setCurrState("Login")} className='cursor-pointer text-red-500 font-medium   m-10 font-medium'>Login here</span></p>}
        
        
      </form>
    </div>
  )
}

export default Login
