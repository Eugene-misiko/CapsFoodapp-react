import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='text-[#d9d9d9] bg-[#323232] flex flex-col items-center gap-[20px] pt-[80px] px-[8vw] py-[20px] mt-45'>
      <div className="grid w-full grid-cols-[2fr_1fr_1fr]">
        <div className="">
           <img src={assets.logo} alt="" /> 
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ab, odit ea earum corrupti nostrum, vero at, tempora labore dolorum blanditiis cupiditate voluptatem voluptates eum rerum eaque illo velit dolores!</p>
           <div className="flex gap-[20px] mt-5 w-[40px] mr-[15px] ">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
           </div>
        </div>
        <div className="flex flex-col">
            <h2 className='text-white'>COMPANY</h2>
            
                <Link className='cursor-pointer' to='/'>Home</Link>
                <Link className='cursor-pointer' to='/about'>About us</Link>
                <Link className='cursor-pointer' to='delivery'>Delivery</Link>
                <Link className='cursor-pointer' to='private'>Privacy policy</Link>
            
        </div>
        <div className="">
            <h2 className='text-white'>GET IN TOUCH</h2>
            <ul>
                <li>+2547-123-45678</li>
                <li>contact@tomato.com</li>
            </ul>
        </div>
      </div>
      <hr className='w-full h-[2px] mt-[20px] ml-0 bg-gray-500 border-none' />
      <p className="">
        &copy; 2025 Tomato.com - All Rights Reserved
      </p>
    </div>
  )
}

export default Footer


