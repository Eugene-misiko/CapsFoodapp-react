import React, { useContext } from 'react'
import { StoreContext } from './Store'

const PlaceOder = () => {

  const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <form className='flex items-start justify-space-between gap-[50px] mt-[100px]'>
        <div className="w-full w-max[(30%,500px)]">
          <p className="text-[30px] font-medium mb-[50px] ">Delivery Information</p>
          <div className="flex gap-[10px]">
            <input className='w-[100%] mb-[15px] p-[10px] border border-[#c5c5c5] rounded-[4px] outline-red-500' type="text"  placeholder='Fisrt Name'/>
            <input className='w-[100%] mb-[15px] p-[10px] border border-[#c5c5c5] rounded-[4px] outline-red-500' type="text"  placeholder='Last Name'/>
          </div>
          <input className='w-[100%] mb-[15px] border border-[#c5c5c5] p-[10px] rounded-[4px] outline-red-500'  type="email" placeholder='Email Adress'/>
          <input className='w-[100%] mb-[15px] border border-[#c5c5c5] p-[10px] rounded-[4px] outline-red-500' type="text" placeholder='Street'/>
           <div className="">
            <input className='w-[100%] mb-[15px] border border-[#c5c5c5] p-[10px] rounded-[4px] outline-red-500' type="text"  placeholder='City'/>
            <input className='w-[100%] mb-[15px] border border-[#c5c5c5] p-[10px] rounded-[4px] outline-red-500' type="text"  placeholder='State'/>
          </div>
           <div className="">
            <input className='w-[100%] mb-[15px] border border-[#c5c5c5] p-[10px] rounded-[4px] outline-red-500' type="text"  placeholder='Zip code'/>
            <input className='w-[100%] mb-[15px] border border-[#c5c5c5] p-[10px] rounded-[4px] outline-red-500' type="text"  placeholder='Country'/>
          </div>
          <input className='w-[100%] border border-[#c5c5c5] mb-[15px] p-[10px] rounded-[4px] outline-red-500' type="text" placeholder='Phone'/>
        </div>
        <div className="w-max[(40%,500px)]">
             <div className='flex-1 flex flex-col'>
          <h2>Cart Totals</h2>
          <div>
             <div className="flex justify-space-between text-[#555]">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className='mt-[10px] m-[0px]'/>
            <div className="">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr className='mt-[10px] m-[0px]'/>
            <div className="">
              <b>Total</b>
              <b>{getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button  className='border-none text-white bg-red-500
           w-[max(15vw,200px)] py-[12px] pl-[0px] rounded-[4px]
            cursor-pointer mt-[30px]'>PROCEED TO PAYMENT</button>
        </div>
        </div>
    </form>
  )
}

export default PlaceOder
