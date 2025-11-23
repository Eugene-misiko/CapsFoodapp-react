import React from 'react'
import logo from '../src/AdminImages/logo.png'
import LogoImage from '../src/assets/Eugene.jpeg'

const NavAdmin = () => {
  return (
    <div className='flex  justify-between items-center pt-[8px] pb-[8px] pl-[4%] pr-[4%]'>
      <img className='w-[10%] min-w-[80px]' src={logo} alt="" />
      <img className='h-[40px] w-[40px] rounded-[50%] border border-red-500 border-[3px]' src={LogoImage} alt="" />
    </div>
  )
}

export default NavAdmin
