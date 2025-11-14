import React, { useContext } from 'react'
import { StoreContext } from './Store'

const PlaceOder = () => {

  const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <form className='flex items-start justify-space-between gap-[50px] mt-[100px]'>
        <div className="w-full w-max[(30%,500px)]">
          <p className="text-[30px] font-medium mb-[50px] ">Delivery Information</p>
          <div className="">
            <input type="text"  placeholder='Fisrt Name'/>
            <input type="text"  placeholder='Last Name'/>
          </div>
          <input type="email" placeholder='Email Adress'/>
          <input type="text" placeholder='Street'/>
           <div className="">
            <input type="text"  placeholder='City'/>
            <input type="text"  placeholder='State'/>
          </div>
           <div className="">
            <input type="text"  placeholder='Zip code'/>
            <input type="text"  placeholder='Country'/>
          </div>
          <input type="text" placeholder='Phone'/>
        </div>
        <div className="">
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
              <p>${2}</p>
            </div>
            <hr className='mt-[10px] m-[0px]'/>
            <div className="">
              <b>Total</b>
              <b>{getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button  className='border-none text-white bg-red-500
           w-[max(15vw,200px)] py-[12px] pl-[0px] rounded-[4px]
            cursor-pointer'>PROCEED TO PAYMENT</button>
        </div>
        </div>
    </form>
  )
}

export default PlaceOder
