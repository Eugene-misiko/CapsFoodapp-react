import React from 'react'
import addIcon from '../src/AdminImages/add_icon.png'
import orderIcon from '../src/AdminImages/order_icon.png'
import { NavLink } from 'react-router-dom'
import Holdcont from './Holdcont'


const Sidebar = () => {
  return (
    <div className=' w-[18%] font-[max(1vw,10px)] min-h-[100vh] border border-[1.5px] border-[#a9a9a9] border-t-0 '>
      <div className='pt-[50px] pl-[20%] flex flex-col gap-[20px]'>
        <NavLink to='/add' className={ ({isActive}) => isActive ? 'bg-[#fff0ed] border border-red-500 flex items-center gap-[12px]  border-[1px] border-[#a9a9a9] border-r-0 pt-[8px] pb-[8px] pl-[10px] pr-[10px] rounded-[3px_0px_0px_3px] cursor-pointer' : 
        "flex  items-center gap-[12px] border border-[1px] border-[#a9a9a9] border-r-0 pt-[8px] pb-[8px] pl-[10px] pr-[10px] rounded-[3px_0px_0px_3px] cursor-pointer"} >
            
            <img src={addIcon} alt="" />
            <p className='max-lg:hidden'>Add Items</p>
           </NavLink>
       

        <NavLink to='/list' className={ ({isActive}) => isActive ? 'bg-[#fff0ed] border border-red-500 flex items-center gap-[12px]  border-[1px] border-[#a9a9a9] border-r-0 pt-[8px] pb-[8px] pl-[10px] pr-[10px] rounded-[3px_0px_0px_3px] cursor-pointer' : 
        "flex  items-center gap-[12px] border border-[1px] border-[#a9a9a9] border-r-0 pt-[8px] pb-[8px] pl-[10px] pr-[10px] rounded-[3px_0px_0px_3px] cursor-pointer"} >
            <img src={orderIcon} alt="" />
            <p className='max-lg:hidden'>List Items</p>
        </NavLink>

        <NavLink to='/order' className={ ({isActive}) => isActive ? 'bg-[#fff0ed] border border-red-500 flex items-center gap-[12px]  border-[1px] border-[#a9a9a9] border-r-0 pt-[8px] pb-[8px] pl-[10px] pr-[10px] rounded-[3px_0px_0px_3px] cursor-pointer' : 
        "flex  items-center gap-[12px] border border-[1px] border-[#a9a9a9] border-r-0 pt-[8px] pb-[8px] pl-[10px] pr-[10px] rounded-[3px_0px_0px_3px] cursor-pointer"} >
            <img src={orderIcon} alt="" />
            <p className='max-lg:hidden'>Orders</p>
        </NavLink>
              
      </div>
     
    </div>
  )
}

export default Sidebar
