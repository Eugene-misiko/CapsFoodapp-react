import React from 'react';
import { menu_list } from '../assets/assets';

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className='flex flex-col gap-[20px]'>
      <h1 className='text-[#262626] font-bold'>Explore our menu</h1>
      <p className='max-w-[60%] text-[#808080]'>
        Choose from a diverse menu featuring a delectable array of dishes. Our
        mission is to satisfy your cravings and elevate your dining experience,
        one delicious meal at a time.
      </p>

      <div className='flex justify-center items-center text-center gap-[30px] my-[20px]'>
        {menu_list.map((item, index) => (
          <div
            key={index}
            onClick={() =>
              setCategory((prev) =>
                prev === item.menu_name ? 'All' : item.menu_name
              )
            }
          >
            <img
              className={
                category === item.menu_name
                  ? 'active'
                  : 'w-[7.5vw] min-w-[80px] cursor-pointer rounded-[50%] transition duration-200'
              }
              src={item.menu_image}
              alt={item.menu_name}
            />
            <p className='mt-[10px] text-[20px] cursor-pointer'>
              {item.menu_name}
            </p>
          </div>
        ))}
      </div>

      <hr className='my-[10px] h-[2px] bg-[#e2e2e2] border-none' />
    </div>
  );
};

export default ExploreMenu;

