import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { StoreContext } from './Store'


const FoodItem = ({id,name,price,description,image}) => {

    
    const {cartItems,addToCart,removeFromCart} = useContext(StoreContext)
  return (
    <div className='w-[100%] m-auto rounded-[15px] transition-all
    shadow-[0_0_10px_#00000015] 
     duration-300 ease-in-out animate-fadeIn'>
      <div className='relative'>
        <img className='w-[100%] rounded-t-[15px] rounded-b-[0px]' src={image} alt="" />
      </div>
      <div className="p-[20px]">
        <div className="flex justify-between items-center mb-[10px]">
            <p className='text-[20px] font-medium'>{name}</p>
            <img className='w-[70px]' src={assets.rating_starts} alt="" />
            {!cartItems[id] 
               ? <img className='w-[35px] absolute mb-[130px] ml-[125px] cursor-pointer rounded-[50%]' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" />
               : <div className=' absolute mb-[130px] ml-[125px] flex items-center gap-[10px] p-[6px] rounded-[50px] bg-white '>
                    <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                    <p>{cartItems[id]}</p>
                    <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
               </div>
            }
        </div>
      </div>
      <p className="text-[#676767] text-[12px] ">{description}</p>
      <p className='text-red-500 text-[22px] font-medium mt-[10px] ml-[0px]'>${price}</p>
      
    </div>
  )
}

export default FoodItem
