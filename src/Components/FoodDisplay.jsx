import React, { useContext } from 'react'
import { StoreContext } from './Store'
import FoodItem from './FoodItem'

function FoodDisplay({category}) {

    const {food_list} = useContext(StoreContext)
  return (
    <div className='mt-[30px] font-light'>
      <h2 className='font-bold'>Top dishes near you</h2>
      <div className='grid 
      grid-cols-[repeat(auto-fill,_minmax(240px,_1fr))] 
      mt-[30px] gap-[50px] 
      gap-y-[50px] '>
        {food_list.map((item,index)=> {
            if (category==="All" || category===item.category) {
                return <FoodItem key={index} id={item._id} name={item.name} 
                description={item.description} price={item.price} image={item.image}/>
            }
            })}
      </div>
    </div>
  )
}

export default FoodDisplay

