import React from 'react'
import { assets } from '../assets/assets'

const FoodItem = ({id,name,price,description,image}) => {
  return (
    <div className=''>
      <div className=''>
        <img className='' src={image} alt="" />
      </div>
      <div className="">
        <div className="">
            <p>{name}</p>
            <img src={assets} alt="" />
        </div>
      </div>
      <p className="">{description}</p>
      <p className=''>${price}</p>
    </div>
  )
}

export default FoodItem
