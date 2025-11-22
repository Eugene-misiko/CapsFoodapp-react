import React from 'react'
import { assets } from '../src/assets/assets'
import LogoImage from '../src/assets/Eugene.jpeg'

const NavAdmin = () => {
  return (
    <div className='flex  justify-between items-center pt-[8px] pb-[8px] pl-[4%] pr-[4%]'>
      <img className='' src={assets.logo} alt="" />
      <img className='h-[60px] w-[60px] rounded-[50%] border border-red-500 border-[3px]' src={LogoImage} alt="" />
    </div>
  )
}

export default NavAdmin
