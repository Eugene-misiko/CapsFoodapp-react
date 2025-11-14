
import React from 'react';
import header_img from '../assets/header_img.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="relative w-full">
     
      <img
        src={header_img}
        alt="header"
        className="w-full h-[500px] object-cover rounded"
      />

            <div className="absolute inset-0 flex flex-col 
            justify-center items-start px-8 md:px-16 
            bg-black/40 text-white">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 ">
          Order your <br /> favourite food here
        </h2>
        <p className="max-w-lg text-sm md:text-base mb-6">
          From a diverse menu featuring a delectable array of dishes crafted
          with the finest ingredients to satisfy your dining experience — one
           delicious meal at a time.
        </p>
        <Link to='/menu' className="bg-[#747474] hover:bg-gray-600 
        text-white font-semibold px-6 py-2 rounded-[50px] 
        cursor-pointer">
          View Menu
        </Link>
      </div>
    </div>
  );
};

export default Header;

