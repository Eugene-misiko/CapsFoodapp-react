import React from 'react'
import { assets } from '../assets/assets'

const AppDownload = () => {
  return (
    <div className='mx-auto m-[100px] text-center '>
      <p className='font-bold'>For Better Experince Download <br /> Tomato</p>
      <div className="flex justify-center mt-8 gap-8">
        <img className=' max-w-[180px] cursor-pointer transform hover:scale-105 transition-transform duration-300' src={assets.play_store} alt="" />
        <img className=' max-w-[180px] cursor-pointer transform hover:scale-105 transition-transform duration-300' src={assets.app_store} alt="" />
      </div>
    </div>
  )
}

export default AppDownload
