import React, { useContext } from 'react'
import { StoreContext } from './Store'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

  const{cartItems,food_list,removeFromCart,getTotalCartAmount} = useContext(StoreContext)
  const navigate = useNavigate()
  return (
    <div className='mt-[100px]'>
      <div className="">
        <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-gray-500 text-[max(1vw,12px)]">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,index)=>{
            if(cartItems[item._id]>0){
              return(
                <div>
                  <div className='mt-[10px] m-[0px] text-black'>
                   <img className='w-[50px]' src={item.image} alt="" />
                   <p>{item.name}</p>
                   <p>${item.price}</p>
                   <p>{cartItems[item._id]}</p>
                   <p>${item.price*cartItems[item._id]}</p>
                   <p onClick={()=>removeFromCart(item._id)} className='cursor-pointer'>x</p>
                </div>
                <hr className='h-[1px] bg-[#e2e2e2] border-none'/>
                </div>
                
              )
            }
        })}
        
      </div>
      <div className="mt-[80px] justify-space-between flex gap-[max(12vw,20px)]">
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
          <button onClick={()=>navigate('/order')} className='border-none text-white bg-red-500
           w-[max(15vw,200px)] py-[12px] pl-[0px] rounded-[4px]
            cursor-pointer'>PROCEED TO CHECKOUT</button>
        </div>
        <div className="flex-1">
          <div>
            <p className='text-[#555]'>If you have a promo code, Enter it here</p>
            <div className='mt-[10px] flex justify-space-between items-center bg-[#555] rounded-[4px]'>
              <input className='bg-transparent border-none outline-none pl-[10px]' type="text" placeholder='promo code'/>
              <button className='w-max[(10vw,150px)] p-[12px] bg-black border-none text-white rounded-[4px]'>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
